/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
    Select as SelectNext,
    SelectItem,
    SelectProps,
} from "@nextui-org/react";

export type TSelectProps<T extends Record<string, any>> = Omit<
    SelectProps,
    "children"
> & {
    options: T[];
    option: {
        key: keyof T;
        label: keyof T;
    };
};

const Select = <T extends Record<string, any>>({
    label = "Select option",
    options,
    option,
    ...props
}: TSelectProps<T>) => {
    const [initValue, setInitValue] = useState(
        props.value && typeof props.value === "string"
            ? new Set([props.value])
            : new Set([])
    );

    return (
        <SelectNext
            {...props}
            label={label}
            selectedKeys={initValue}
            onSelectionChange={(key) => setInitValue(key as never)}
        >
            {options.map((opt) => (
                <SelectItem key={opt[option.key].toLowerCase()}>
                    {opt[option.label]}
                </SelectItem>
            ))}
        </SelectNext>
    );
};

export default Select;
