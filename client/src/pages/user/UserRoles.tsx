import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

import { HeaderSection } from "@/components";
import { cn } from "@/utils";

const fakeRoles = [
    {
        id: 1,
        name: "administrator",
        totalUser: 5,
        description:
            "All Admin Controls, View and Edit Financial Summaries, Enabled Bulk Reports, View and Edit Payouts, View and Edit Disputes",
    },
    {
        id: 2,
        name: "developer",
        totalUser: 14,
        description:
            "All Admin Controls, View and Edit Financial Summaries, Enabled Bulk Reports, View and Edit Payouts, View and Edit Disputes",
    },
    {
        id: 4,
        name: "analyst",
        totalUser: 5,
        description:
            "All Admin Controls, View and Edit Financial Summaries, Enabled Bulk Reports, View and Edit Payouts, View and Edit Disputes",
    },
    {
        id: 23,
        name: "support",
        totalUser: 5,
        description:
            "All Admin Controls, View and Edit Financial Summaries, Enabled Bulk Reports, View and Edit Payouts, View and Edit Disputes",
    },
];

const UserRoles = () => {
    return (
        <div className="space-y-4 md:space-y-6">
            <HeaderSection
                title="Quản lý roles"
                breadcrumbs={["user", "roles"]}
                endContent={
                    <Button
                        color="success"
                        className="first-letter:uppercase text-white"
                    >
                        Thêm mới
                    </Button>
                }
            />
            <div className="grid grid-auto-fill gap-2 md:gap-4 lg:gap-8">
                {fakeRoles.map((role) => (
                    <Card
                        className={cn(
                            "w-full h-full p-4 space-y-4",
                            "border border-gray-400 dark:border-gray-600 bg-transparent"
                        )}
                    >
                        <CardHeader className="p-0">
                            <div>
                                <h6 data-slot="sub-title">{role.name}</h6>
                                <p className="text-sm first-letter:uppercase font-medium">
                                    {`số lượng người dùng với role ${role.name} là ${role.totalUser}`}
                                </p>
                            </div>
                        </CardHeader>
                        <CardBody className="p-0 space-y-4">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {role.description}
                            </p>
                            <div className="flex items-center">
                                <Button
                                    color="success"
                                    variant="ghost"
                                    className={cn(
                                        "font-semibold",
                                        "!text-gray-500 dark:!text-gray-400 hover:!text-white border-transparent"
                                    )}
                                >
                                    <span className="block w-full first-letter:uppercase">
                                        xem chi tiết
                                    </span>
                                </Button>
                                <Button
                                    color="success"
                                    variant="ghost"
                                    className={cn(
                                        "font-semibold",
                                        "!text-gray-500 dark:!text-gray-400 hover:!bg-transparent hover:!text-success border-transparent"
                                    )}
                                >
                                    <span className="block w-full first-letter:uppercase">
                                        chỉnh sửa
                                    </span>
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default UserRoles;
