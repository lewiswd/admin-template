import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

import { NotFound as NotFoundSVG } from "@/assets";
import { cn } from "@/utils";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div
            className={cn(
                "w-full h-full flex justify-center items-center p-2",
                "bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400"
            )}
        >
            <div className="w-full max-w-lg p-4 md:p-6 lg:p-8 space-y-4">
                <img
                    className="w-full max-w-96 h-auto object-cover mx-auto"
                    src={NotFoundSVG}
                    alt="Notfound items"
                />
                <div className="text-center text-lg font-medium">
                    Oops! Page not found
                </div>
                <p className="text-center text-sm font-medium">
                    The page you are looking for doesn't exist or other error
                    occured, Go back to previous page or homepage
                </p>
                <div className="flex gap-2 md:gap-4 lg:gap-8">
                    <Button
                        className="flex-1 text-white"
                        color="success"
                        onClick={() => navigate("/")}
                    >
                        <span className="first-letter:uppercase">
                            go to home
                        </span>
                    </Button>
                    <Button
                        variant="ghost"
                        className="flex-1 hover:!text-white"
                        color="success"
                        onClick={() => navigate(-1)}
                    >
                        <span className="first-letter:uppercase">
                            previous page
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
