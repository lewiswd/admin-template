import { useCallback, useEffect, useState } from "react";
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Input,
    Pagination,
    Spinner,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    Tooltip,
} from "@nextui-org/react";
import { TbRefresh } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";

import { HeaderSection } from "@/components";

const fakeUsers = [
    {
        photoUrl: "https://randomuser.me/api/portraits/men/1.jpg",
        fullname: "John Doe",
        email: "john.doe@example.com",
        role: "Administrator",
        createdAt: "01-15-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/women/1.jpg",
        fullname: "Jane Smith",
        email: "jane.smith@example.com",
        role: "User",
        createdAt: "01-16-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/men/2.jpg",
        fullname: "Michael Brown",
        email: "michael.brown@example.com",
        role: "Moderator",
        createdAt: "01-17-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/women/2.jpg",
        fullname: "Emily Davis",
        email: "emily.davis@example.com",
        role: "User",
        createdAt: "01-18-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/men/3.jpg",
        fullname: "James Wilson",
        email: "james.wilson@example.com",
        role: "User",
        createdAt: "01-19-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/women/3.jpg",
        fullname: "Olivia Johnson",
        email: "olivia.johnson@example.com",
        role: "Administrator",
        createdAt: "01-20-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/men/4.jpg",
        fullname: "William Martinez",
        email: "william.martinez@example.com",
        role: "Moderator",
        createdAt: "01-21-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/women/4.jpg",
        fullname: "Sophia Garcia",
        email: "sophia.garcia@example.com",
        role: "User",
        createdAt: "01-22-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/men/5.jpg",
        fullname: "Benjamin Lee",
        email: "benjamin.lee@example.com",
        role: "User",
        createdAt: "01-23-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/women/5.jpg",
        fullname: "Mia Brown",
        email: "mia.brown@example.com",
        role: "Administrator",
        createdAt: "01-24-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/men/6.jpg",
        fullname: "Elijah Robinson",
        email: "elijah.robinson@example.com",
        role: "Moderator",
        createdAt: "01-25-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/women/6.jpg",
        fullname: "Isabella Clark",
        email: "isabella.clark@example.com",
        role: "User",
        createdAt: "01-26-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/men/7.jpg",
        fullname: "Alexander Lewis",
        email: "alexander.lewis@example.com",
        role: "User",
        createdAt: "01-27-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/women/7.jpg",
        fullname: "Charlotte Young",
        email: "charlotte.young@example.com",
        role: "Administrator",
        createdAt: "01-28-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/men/8.jpg",
        fullname: "Henry Walker",
        email: "henry.walker@example.com",
        role: "Moderator",
        createdAt: "01-29-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/women/8.jpg",
        fullname: "Amelia Hall",
        email: "amelia.hall@example.com",
        role: "User",
        createdAt: "01-30-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/men/9.jpg",
        fullname: "Daniel Allen",
        email: "daniel.allen@example.com",
        role: "User",
        createdAt: "02-01-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/women/9.jpg",
        fullname: "Avery King",
        email: "avery.king@example.com",
        role: "Administrator",
        createdAt: "02-02-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/men/10.jpg",
        fullname: "Matthew Scott",
        email: "matthew.scott@example.com",
        role: "Moderator",
        createdAt: "02-03-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/women/10.jpg",
        fullname: "Ella Adams",
        email: "ella.adams@example.com",
        role: "User",
        createdAt: "02-04-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/men/11.jpg",
        fullname: "Joshua Carter",
        email: "joshua.carter@example.com",
        role: "User",
        createdAt: "02-05-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/women/11.jpg",
        fullname: "Sofia Martinez",
        email: "sofia.martinez@example.com",
        role: "Administrator",
        createdAt: "02-06-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/men/12.jpg",
        fullname: "Ryan Hernandez",
        email: "ryan.hernandez@example.com",
        role: "Moderator",
        createdAt: "02-07-2024",
    },
    {
        photoUrl: "https://randomuser.me/api/portraits/women/12.jpg",
        fullname: "Zoe Lewis",
        email: "zoe.lewis@example.com",
        role: "User",
        createdAt: "02-08-2024",
    },
];

const columns = [
    { label: "Người dùng", uid: "user" },
    { label: "Role", uid: "role" },
    { label: "Ngày tạo", uid: "createdAt" },
    { label: "", uid: "actions" },
];

type TFakeData = {
    photoUrl: string;
    fullname: string;
    email: string;
    role: string;
    createdAt: string;
};

type TData = TFakeData[] | [];

const UserList = () => {
    const [tableData, setTableData] = useState<TData>([]);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });
    const [totalRow, setTotalRow] = useState<number>(0);

    /**
     * TODO: Handle events
     */

    /**
     * TODO: Utilities method
     */
    const renderCell = useCallback(
        (item: TFakeData, columnKey: string | number) => {
            switch (columnKey) {
                case "user":
                    return (
                        <div className="sm:w-60">
                            <div className="flex gap-2">
                                <div className="w-12 aspect-square rounded-full overflow-hidden">
                                    <img
                                        src={item.photoUrl}
                                        alt={item.fullname}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="text-sm font-medium capitalize">
                                        {item.fullname}
                                    </div>
                                    <p className="text-xs">{item.email}</p>
                                </div>
                            </div>
                        </div>
                    );
                case "role":
                    return (
                        <div>
                            <div className="text-xs font-medium uppercase">
                                {item.role}
                            </div>
                        </div>
                    );
                case "createdAt":
                    return (
                        <div className="w-20">
                            <div className="text-xs">{item.createdAt}</div>
                        </div>
                    );
                case "actions":
                    return (
                        <div className="relative flex justify-end items-center gap-2">
                            <Dropdown
                                className="bg-background border-1 border-default-200"
                                placement="bottom-end"
                            >
                                <DropdownTrigger>
                                    <Button
                                        isIconOnly
                                        radius="full"
                                        size="sm"
                                        variant="light"
                                    >
                                        <HiDotsVertical className="text-lg text-gray-400" />
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu className="dark:bg-gray-950">
                                    <DropdownItem className="dark:text-gray-400 dark:hover:bg-gray-800">
                                        Xem chi tiết
                                    </DropdownItem>
                                    <DropdownItem className="dark:text-gray-400 dark:hover:bg-gray-800">
                                        Chỉnh sửa
                                    </DropdownItem>
                                    <DropdownItem className="dark:text-gray-400 dark:hover:bg-gray-800">
                                        Xoá
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    );
                default:
                    return <div>{item[columnKey as keyof TFakeData]}</div>;
            }
        },
        []
    );

    /**
     * TODO: Side effect
     */
    useEffect(() => {
        const startIndex = pagination.pageIndex * pagination.pageSize;
        const endIndex = startIndex + pagination.pageSize;
        const filterData = [...fakeUsers].slice(startIndex, endIndex);
        setTableData(filterData);
    }, [pagination.pageIndex, pagination.pageSize]);

    useEffect(() => {
        setTotalRow(fakeUsers.length);
    }, []);

    return (
        <div className="space-y-4 md:space-y-6">
            <HeaderSection
                title="Quản lý người dùng"
                breadcrumbs={["user", "list"]}
            />
            {/* Filter data */}
            <div className="flex justify-between items-center min-h-[4.375rem] rounded-lg">
                <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-64">
                        <Input label="Tìm kiếm" />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Button
                        className="inline-block first-letter:uppercase text-white"
                        color="success"
                    >
                        tạo mới
                    </Button>
                    <Tooltip
                        className="font-medium"
                        color="primary"
                        content="Tải lại dữ liệu"
                        placement="bottom-end"
                    >
                        <Button
                            variant="light"
                            className="min-w-8 aspect-square flex items-center justify-center"
                            color="primary"
                        >
                            <TbRefresh className="w-4 h-4 flex-shrink-0" />
                        </Button>
                    </Tooltip>
                </div>
            </div>
            {/* Table */}
            <div className="shadow-lg">
                <Table
                    isHeaderSticky
                    aria-label="Permission data table"
                    checkboxesProps={{
                        classNames: {
                            wrapper:
                                "after:bg-foreground after:text-background text-background",
                        },
                    }}
                    classNames={{
                        wrapper: "max-h-[36rem] bg-white dark:bg-gray-700",
                        td: "align-top",
                        th: "dark:bg-gray-600 dark:text-white font-semibold",
                    }}
                    bottomContent={
                        <div className="p-4 flex justify-between items-center gap-4">
                            <div className="text-sm">
                                {`${
                                    pagination.pageIndex * pagination.pageSize +
                                    1
                                } - ${
                                    pagination.pageIndex * pagination.pageSize +
                                    tableData.length
                                } of ${totalRow}`}
                            </div>
                            <Pagination
                                classNames={{
                                    next: "dark:bg-gray-600 dark:hover:!bg-gray-500",
                                    prev: "dark:bg-gray-600 dark:hover:!bg-gray-500",
                                    cursor: "bg-green-600",
                                    item: "data-[active='true']:!bg-green-600 data-[active='true']:!text-white dark:bg-gray-600 dark:hover:!bg-gray-500",
                                }}
                                initialPage={pagination.pageIndex + 1}
                                total={Math.ceil(
                                    totalRow / pagination.pageSize
                                )}
                                onChange={(page) =>
                                    setPagination((prev) => ({
                                        ...prev,
                                        pageIndex: page - 1,
                                    }))
                                }
                                loop
                                showControls
                            />
                        </div>
                    }
                >
                    <TableHeader columns={columns}>
                        {(column) => (
                            <TableColumn
                                className="first-letter:uppercase text-sm font-medium"
                                key={column.uid}
                            >
                                {column.label}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody
                        items={tableData}
                        loadingContent={<Spinner />}
                        emptyContent={
                            <div className="px-2 py-6">
                                <p className="subtitle first-letter:uppercase">
                                    không có dữ liệu
                                </p>
                            </div>
                        }
                    >
                        {(item) => (
                            <TableRow key={item.email}>
                                {(columnKey) => (
                                    <TableCell>
                                        {renderCell(item, columnKey)}
                                    </TableCell>
                                )}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {/* Modals */}
        </div>
    );
};

export default UserList;
