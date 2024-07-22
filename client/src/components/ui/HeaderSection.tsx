import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

type HeaderSectionProps = {
    title: string;
    breadcrumbs?: string[];
    endContent?: ReactNode | ReactNode[];
};

const HeaderSection = ({
    title,
    breadcrumbs,
    endContent,
}: HeaderSectionProps) => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between gap-2">
            <div>
                <h2 className="title" data-slot="title">
                    {title}
                </h2>
                {breadcrumbs && (
                    <Breadcrumbs
                        classNames={{
                            list: "p-0 bg-tranparent",
                        }}
                        itemClasses={{
                            item: "data-[current=true]:text-green-600 data-[current=true]:font-medium",
                        }}
                        variant="solid"
                    >
                        {breadcrumbs.map((breadcrumb, index) => {
                            let pathBreadcumb = `/${breadcrumbs[0]}`;

                            if (index > 0) {
                                const breadcrumbsSlice = breadcrumbs.slice(
                                    0,
                                    index + 1
                                );

                                pathBreadcumb = `/${breadcrumbsSlice.join(
                                    "/"
                                )}`;
                            }

                            return (
                                <BreadcrumbItem
                                    key={index}
                                    onPress={() => {
                                        navigate(pathBreadcumb);
                                    }}
                                >
                                    {breadcrumb}
                                </BreadcrumbItem>
                            );
                        })}
                    </Breadcrumbs>
                )}
            </div>
            {endContent && endContent}
        </div>
    );
};

export default HeaderSection;
