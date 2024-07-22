import { useCallback, useEffect, useState } from "react";
import { TbRefresh } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";

import { HeaderSection } from "@/components";
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

const fakePermissions = [
    {
        id: 1,
        name: "quản lý người dùng",
        description:
            "khi người dùng có một trong những quyền thuộc quyền này thì người dùng có thể quản lý dữ liệu người dùng trên hệ thống.",
        createdAt: "22/07/2024",
        updatedAt: "",
    },
    {
        id: 2,
        name: "quản lý nhóm người dùng",
        description:
            "khi người dùng có một trong những quyền thuộc quyền này thì người dùng có thể quản lý dữ liệu nhóm người dùng trên hệ thống.",
        createdAt: "22/07/2024",
        updatedAt: "",
    },
    {
        id: 3,
        name: "quản lý khách hàng",
        description:
            "khi người dùng có một trong những quyền thuộc quyền này thì người dùng có thể quản lý dữ liệu khách hàng trên hệ thống.",
        createdAt: "22/07/2024",
        updatedAt: "",
    },
    {
        id: 4,
        name: "quản lý danh mục",
        description:
            "khi người dùng có một trong những quyền thuộc quyền này thì người dùng có thể quản lý dữ liệu danh mục trên hệ thống.",
        createdAt: "22/07/2024",
        updatedAt: "",
    },
];

const columns = [
    { label: "Tên", uid: "name" },
    { label: "Mô tả", uid: "description" },
    { label: "Ngày tạo", uid: "createdAt" },
    { label: "", uid: "actions" },
];

type TFakeData = {
    id: number;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
};

type TData = TFakeData[] | [];

const UserPermissions = () => {
    const [tableData, setTableData] = useState<TData>([]);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 2,
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
                case "name":
                    return (
                        <div className="md:w-32 lg:w-64">
                            <div className="text-sm font-medium first-letter:uppercase">
                                {item.name}
                            </div>
                        </div>
                    );
                case "description":
                    return (
                        <div className="md:w-48 lg:w-96">
                            <div className="text-sm font-medium first-letter:uppercase">
                                {item.description}
                            </div>
                        </div>
                    );
                case "createdAt":
                    return (
                        <div className="md:w-16 lg:w-32">
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
        setTableData(fakePermissions);
        setTotalRow(fakePermissions.length);
    }, []);

    return (
        <div className="space-y-4 md:space-y-6">
            <HeaderSection
                title="Quản lý quyền"
                breadcrumbs={["user", "permissions"]}
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
                            <TableRow key={item.id}>
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

export default UserPermissions;
