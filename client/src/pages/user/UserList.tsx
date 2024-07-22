import { HeaderSection } from "@/components";

const UserList = () => {
    return (
        <div className="space-y-4 md:space-y-6">
            <HeaderSection
                title="Quản lý roles"
                breadcrumbs={["user", "list"]}
            />
        </div>
    );
};

export default UserList;
