import { Fragment } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css/animate.min.css";

import { MainWrapper } from "@/layouts";

const App = () => {
    return (
        <Fragment>
            <MainWrapper />
            <ToastContainer />
        </Fragment>
    );
};

export default App;
