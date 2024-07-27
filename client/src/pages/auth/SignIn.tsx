import { FormEvent, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button, Input } from "@nextui-org/react";

import { signIn } from "@/api";
import { Authentication, LogoImage } from "@/assets";
import { useAuth } from "@/contexts";
import { ProfileDto } from "@/types";
import { notification } from "@/utils";

const SignIn = () => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const { updateUser } = useAuth();

    const signInMutation = useMutation({
        mutationFn: signIn,
    });

    /**
     * TODO: Handle events
     */
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const payload = {
            email: emailRef.current?.value.trim() || "",
            password: passwordRef.current?.value.trim() || "",
        };

        // TODO: Validate email and password. Show notification when value is not enough.
        if (payload.email === "" || payload.password === "") {
            notification(false, "Vui lòng nhập đủ thông tin đăng nhập");
            return;
        }

        // TODO: Call api to sign in
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res: any = await signInMutation.mutateAsync(payload);
        notification(res.status, res.message);
        if (res.status) {
            // Set token to localStorage
            localStorage.setItem("token", res.data.token);
            // Update data to currentUser data local
            updateUser(res.data.payload as unknown as ProfileDto);
        }
    };

    return (
        <section className="flex h-screen">
            <div className="flex-1 flex flex-col justify-center items-center gap-4 md:gap-8 p-4 md:p-8">
                <div className="flex items-center">
                    <div className="w-12 aspect-square flex-shrink-0">
                        <img
                            className="w-full h-full object-cover"
                            src={LogoImage}
                            alt="Logo"
                        />
                    </div>
                    <h1 className="font-accent font-semibold italic text-[2rem] text-[#22C55E]">
                        vsl
                    </h1>
                </div>
                <div className="space-y-2 text-center">
                    <div className="text-3xl first-letter:uppercase font-accent font-semibold text-gray-950">
                        chào mừng trở lại
                    </div>
                    <p className="first-letter:uppercase font-medium text-gray-600">
                        hãy nhập thông tin đăng nhập
                    </p>
                </div>
                <form
                    className="space-y-4 w-full max-w-96"
                    onSubmit={handleSubmit}
                >
                    <Input label="Nhập email" ref={emailRef} />
                    <Input
                        type="password"
                        label="Nhập mật khẩu"
                        ref={passwordRef}
                    />
                    <div className="flex justify-end">
                        <p className="text-sm hover:underline hover:text-[#22C55E] first-letter:uppercase cursor-pointer font-medium">
                            quên mật khẩu?
                        </p>
                    </div>
                    <div>
                        <Button
                            type="submit"
                            color="success"
                            className="block w-full text-white first-letter:uppercase"
                            isLoading={signInMutation.isPending}
                            isDisabled={signInMutation.isPending}
                        >
                            {signInMutation.isPending
                                ? "đang đăng nhập"
                                : "đăng nhập"}
                        </Button>
                    </div>
                </form>
            </div>
            <div className="flex-1 hidden md:flex justify-center items-center">
                <div className="w-[24rem] lg:w-[32rem]">
                    <img
                        className="w-full h-auto object-cover"
                        src={Authentication}
                        alt="Sign In thumbnail"
                    />
                </div>
            </div>
        </section>
    );
};

export default SignIn;
