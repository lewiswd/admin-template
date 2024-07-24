type ItemParameters = (string | number | null | undefined | boolean)[];

export const cn = (...items: ItemParameters): string => {
    const cls = items.filter(Boolean);
    return cls.join(" ");
};
