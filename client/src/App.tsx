import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css/animate.min.css";

import { AuthProvider } from "@/contexts";
import { AdminRoutes } from "@/routes";

const App = () => {
    return (
        <AuthProvider>
            <AdminRoutes />
            <ToastContainer />
        </AuthProvider>
    );
};

export default App;
