import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { isExpiredToken } from "@/utils";
import { refreshToken } from "@/api";

const baseUrl =
    import.meta.env.VITE_APP_BASE_URL_API || "http://localhost:9069/api/v1";

export const publicInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
        "X-Custom-Headers": "foobar",
    },
    withCredentials: true,
});

export const privateInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
        "X-Custom-Headers": "foobar",
    },
    withCredentials: true,
});

// TODO: Response interceptor when call APIs done
publicInstance.interceptors.response.use(
    (response) => {
        // return data
        return response.data;
    },
    (error) => {
        if (axios.isAxiosError(error) && error.response) {
            return error.response.data;
        }
    }
);

privateInstance.interceptors.response.use(
    (response) => {
        // return data
        return response.data;
    },
    (error) => {
        if (axios.isAxiosError(error) && error.response) {
            return error.response.data;
        }
    }
);

// TODO: Request interceptor for APIs called before call main route api
privateInstance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token") || "";

        if (token !== "") {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const decoded: any = jwtDecode(token);

            const isExpired = isExpiredToken(decoded.Exp);

            if (isExpired) {
                // TODO: Call api for refresh token when token is expired
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const res: any = await refreshToken();

                if (res.status) {
                    // Set token to localStorage
                    localStorage.setItem("token", res.data.token);
                    config.headers[
                        "Authorization"
                    ] = `Bearer ${res.data.token}`;
                }
            } else {
                config.headers["Authorization"] = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
