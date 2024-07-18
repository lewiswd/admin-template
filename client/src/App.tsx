import { Fragment } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css/animate.min.css";

import { AdminRoutes } from "@/routes";

const App = () => {
    return (
        <Fragment>
            <AdminRoutes />
            <ToastContainer />
        </Fragment>
    );
};

export default App;
