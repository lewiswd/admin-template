import { FaUserGroup } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";

import { cn } from "@/utils";

// TODO Fake data
const fakeDataSystem = [
    {
        label: "người dùng",
        value: 10,
        icon: <FaUserGroup className="w-6 h-6 text-white" />,
    },
    {
        label: "khách hàng",
        value: 300,
        icon: <BiWorld className="w-6 h-6 text-white" />,
    },
];

const Dashboard = () => {
    return (
        <div className="space-y-4 md:space-y-5 lg:space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 py-4 md:py-8">
                {fakeDataSystem.map((item, index) => (
                    <div
                        key={index}
                        className={cn(
                            "h-[86px] p-4",
                            "flex gap-2",
                            "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg"
                        )}
                    >
                        <div className="space-y-1 flex-1">
                            <div className="uppercase font-medium text-sm font-accent">
                                {item.label}
                            </div>
                            <div className="text-xl font-accent">
                                {item.value}
                            </div>
                        </div>
                        <div
                            className={cn(
                                "w-12 h-12 rounded-lg bg-green-500",
                                "flex justify-center items-center flex-shrink-0"
                            )}
                        >
                            {item.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
