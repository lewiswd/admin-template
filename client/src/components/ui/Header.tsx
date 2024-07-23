import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Kbd,
    Tooltip,
    User,
} from "@nextui-org/react";
import { MdSearch } from "react-icons/md";
import { MdNightlight, MdSunny } from "react-icons/md";

import { useTheme } from "@/contexts";
import { cn } from "@/utils";

const Header = () => {
    const searchRef = useRef<HTMLInputElement | null>(null);

    const { changeTheme, theme } = useTheme();
    const navigate = useNavigate();

    /**
     * * Handle events
     */
    const handleSearchClick = useCallback(() => {
        searchRef.current?.focus();
    }, []);

    useEffect(() => {
        const handlerKeydown = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.key === "k") {
                e.preventDefault();
                if (searchRef.current) searchRef.current.focus();
            }

            if (e.key === "Escape") {
                searchRef.current?.blur();
            }
        };

        window.addEventListener("keydown", handlerKeydown);

        return () => {
            window.removeEventListener("keydown", handlerKeydown);
        };
    }, []);

    return (
        <header className="sticky top-0 left-0 right-0 w-full shadow-md z-50 py-2 px-4 md:p-4">
            <div className="flex justify-between items-center">
                <div>
                    {/* Search input */}
                    <div
                        className={cn(
                            "hidden md:flex items-center gap-1 w-72 lg:w-96 relative",
                            "p-3 rounded-lg",
                            "bg-gray-200 focus-within:bg-gray-300 focus:bg-gray-300 dark:bg-gray-700 dark:focus-within:bg-gray-600 dark:focus:bg-gray-600"
                        )}
                        onClick={handleSearchClick}
                    >
                        <MdSearch className="w-5 h-5 flex-shrink-0 cursor-pointer" />
                        <input
                            className={cn(
                                "flex-1 bg-transparent outline-none peer",
                                "text-sm"
                            )}
                            type="text"
                            ref={searchRef}
                        />
                        <Kbd
                            className={cn(
                                "absolute top-1/2 -translate-y-1/2 right-3",
                                "text-sm font-medium",
                                "peer-focus:hidden pointer-events-none"
                            )}
                        >
                            Crtl + K
                        </Kbd>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    {/* Themes toggle */}
                    <Tooltip
                        content="Thay đổi nền"
                        size="md"
                        className="bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium"
                        closeDelay={200}
                        placement="bottom-end"
                    >
                        <Button
                            variant="light"
                            size="lg"
                            isIconOnly
                            onClick={() => {
                                changeTheme(
                                    theme === "light" ? "dark" : "light"
                                );
                            }}
                        >
                            {theme === "light" && (
                                <MdNightlight className="w-6" />
                            )}
                            {theme === "dark" && <MdSunny className="w-6" />}
                        </Button>
                    </Tooltip>
                    {/* User toggle dropdown */}
                    <Dropdown placement="bottom-start">
                        <DropdownTrigger>
                            <User
                                as="button"
                                avatarProps={{
                                    isBordered: true,
                                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                                }}
                                className="transition-transform"
                                description="@tonyreichert"
                                name="Tony Reichert"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="User Actions" variant="flat">
                            <DropdownItem
                                key="settings"
                                className="block first-letter:uppercase text-gray-500 dark:text-gray-400"
                                onClick={() => navigate("/settings")}
                            >
                                cài đặt
                            </DropdownItem>
                            <DropdownItem
                                key="logout"
                                color="danger"
                                className="block first-letter:uppercase text-gray-500 dark:text-gray-400"
                            >
                                đăng xuất
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </header>
    );
};

export default Header;
