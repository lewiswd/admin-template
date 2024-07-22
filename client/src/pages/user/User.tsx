import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import { Permissions, Roles, Users } from "@/assets";
import { HeaderSection } from "@/components";
import { cn } from "@/utils";

const User = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-4 md:space-y-6">
            <HeaderSection title="quản lý người dùng" />
            <div className="space-y-2 md:space-y-3">
                <p className="first-letter:uppercase w-full max-w-3xl">
                    quản lý kiểm soát truy cập để đảm bảo bảo mật dữ liệu tối
                    đa. xác định và quản lý truy cập, danh tính, quyền của người
                    dùng. Đảm bảo dữ liệu người dùng của hệ thống luôn được bảo
                    vệ và tuân thủ theo chính sách đã lập ra.
                </p>
                <div className="grid grid-auto-fill gap-2 md:gap-4 lg:gap-8">
                    <div
                        onClick={() => {
                            navigate("/user/roles");
                        }}
                    >
                        <Card
                            className={cn(
                                "w-full h-full p-4 space-y-2",
                                "border border-gray-400 dark:border-gray-600 bg-transparent",
                                "cursor-pointer"
                            )}
                        >
                            <CardHeader className="p-0">
                                <Image
                                    alt="Roles system management"
                                    className="w-full aspect-video object-cover rounded-xl"
                                    src={Roles}
                                />
                            </CardHeader>
                            <CardBody className="p-0">
                                <h6 data-slot="sub-title">thiết lập roles</h6>
                                <p data-slot="description">
                                    tập hợp các quyền được xác định trước liên
                                    quan đến nhiệm vụ hoặc trách nhiệm cụ thể.
                                    Vai trò nhóm người dùng theo chức năng công
                                    việc của họ, hợp lý hóa việc quản lý quyền.
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                    <div
                        onClick={() => {
                            navigate("/user/permissions");
                        }}
                    >
                        <Card
                            className={cn(
                                "w-full h-full p-4 space-y-2",
                                "border border-gray-400 dark:border-gray-600 bg-transparent",
                                "cursor-pointer"
                            )}
                        >
                            <CardHeader className="p-0">
                                <Image
                                    alt="Permissions system management"
                                    className="w-full aspect-video object-cover rounded-xl"
                                    src={Permissions}
                                />
                            </CardHeader>
                            <CardBody className="p-0">
                                <h6 data-slot="sub-title">thiết lập quyền</h6>
                                <p data-slot="description">
                                    Người tương tác với hệ thống, thường sở hữu
                                    mã định danh duy nhất (như tên người dùng)
                                    và thông tin xác thực (chẳng hạn như mật
                                    khẩu).
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                    <div
                        onClick={() => {
                            navigate("/user/list");
                        }}
                    >
                        <Card
                            className={cn(
                                "w-full h-full p-4 space-y-2",
                                "border border-gray-400 dark:border-gray-600 bg-transparent",
                                "cursor-pointer"
                            )}
                        >
                            <CardHeader className="p-0">
                                <Image
                                    alt="Users system management"
                                    className="w-full aspect-video object-cover rounded-xl"
                                    src={Users}
                                />
                            </CardHeader>
                            <CardBody className="p-0">
                                <h6 data-slot="sub-title">
                                    quản lý người dùng
                                </h6>
                                <p data-slot="description">
                                    Quyền thực hiện các hành động cụ thể trong
                                    hệ thống, chẳng hạn như xem dữ liệu, sửa đổi
                                    bản ghi hoặc thực thi lệnh.
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
