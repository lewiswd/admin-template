import { NavLink } from "react-router-dom";
import { Tooltip } from "@nextui-org/react";
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { HiDocument } from "react-icons/hi2";

import Logo from "../Logo";
import { cn } from "@/utils";

const Sidebar = () => {
    return (
        <aside className="p-2 md:p-4 md:w-28 flex flex-col">
            {/* Logo */}
            <Logo />
            <nav className="navigation">
                <ul className="navigation-menu">
                    <li>
                        <NavLink className="navigation-link" to="/" end>
                            <Tooltip
                                className={cn(
                                    "capitalize text-white font-medium",
                                    "md:ml-3 rounded-lg p-1",
                                    "hidden md:flex"
                                )}
                                color="success"
                                content="dashboard"
                                placement="right"
                            >
                                <span>
                                    <GoHomeFill className="w-6 h-6" />
                                </span>
                            </Tooltip>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navigation-link" to="/user" end>
                            <Tooltip
                                className={cn(
                                    "capitalize text-white font-medium",
                                    "md:ml-3 rounded-lg p-1",
                                    "hidden md:flex"
                                )}
                                color="success"
                                content="người dùng"
                                placement="right"
                            >
                                <span>
                                    <FaUser className="w-6 h-6" />
                                </span>
                            </Tooltip>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navigation-link" to="/customer" end>
                            <Tooltip
                                className={cn(
                                    "capitalize text-white font-medium",
                                    "md:ml-3 rounded-lg p-1",
                                    "hidden md:flex"
                                )}
                                color="success"
                                content="khách hàng"
                                placement="right"
                            >
                                <span>
                                    <FaUsers className="w-6 h-6" />
                                </span>
                            </Tooltip>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navigation-link" to="/customer" end>
                            <Tooltip
                                className={cn(
                                    "capitalize text-white font-medium",
                                    "md:ml-3 rounded-lg p-1",
                                    "hidden md:flex"
                                )}
                                color="success"
                                content="danh mục"
                                placement="right"
                            >
                                <span>
                                    <BiSolidCategoryAlt className="w-6 h-6" />
                                </span>
                            </Tooltip>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="navigation-link" to="/customer" end>
                            <Tooltip
                                className={cn(
                                    "capitalize text-white font-medium",
                                    "md:ml-3 rounded-lg p-1",
                                    "hidden md:flex"
                                )}
                                color="success"
                                content="báo cáo"
                                placement="right"
                            >
                                <span>
                                    <HiDocument className="w-6 h-6" />
                                </span>
                            </Tooltip>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
