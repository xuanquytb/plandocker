export function converseMoney(value) {
    return value?.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
    });
}

export function isEmptyObject(obj) {
    return JSON.stringify(obj) === "{}";
}
