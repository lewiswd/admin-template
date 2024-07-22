import { Link } from "react-router-dom";

import { LogoImage } from "@/assets";

const Logo = () => {
    return (
        <Link
            to="/"
            className="hidden md:block w-12 aspect-square flex-shrink-0"
        >
            <img
                className="w-full h-full object-cover"
                src={LogoImage}
                alt="Logo"
            />
        </Link>
    );
};

export default Logo;
