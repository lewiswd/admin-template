import { useEffect, useState } from "react";
import {
    Autocomplete as AutoCompleteNext,
    AutocompleteItem,
    AutocompleteProps,
} from "@nextui-org/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TAutoCompleteProps<T extends Record<string, any>> = Omit<
    AutocompleteProps,
    "children"
> & {
    options: T[];
    option: {
        key: keyof T;
        label: keyof T;
    };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AutoComplete = <T extends Record<string, any>>({
    label = "Select option",
    options,
    option,
    ...props
}: TAutoCompleteProps<T>) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        if (!props.value) {
            setValue("");
        } else {
            setValue(props.value as string);
        }
    }, [props.value, value]);

    return (
        <AutoCompleteNext
            {...props}
            label={label}
            selectedKey={value}
            onSelectionChange={(val) => {
                props.onSelectionChange?.(val);
            }}
        >
            {options?.map((opt) => (
                <AutocompleteItem
                    key={opt[option.key].toLowerCase()}
                    value={opt[option.key].toLowerCase()}
                >
                    {opt[option.label]}
                </AutocompleteItem>
            ))}
        </AutoCompleteNext>
    );
};

export default AutoComplete;
