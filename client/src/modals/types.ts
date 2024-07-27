import { Dispatch } from "react";

type SizeModal =
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";

export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void | Promise<void>;
    title?: string;
    size?: SizeModal;
    loading?: boolean;
};

export type TCreateModalProps<T> = ModalProps & {
    data: T;
    setData: Dispatch<React.SetStateAction<T>>;
};

export type TUpdateModalProps<T> = Omit<ModalProps, "onSubmit"> & {
    item: T | null;
    onSubmit: (item: T) => void | Promise<void>;
};
