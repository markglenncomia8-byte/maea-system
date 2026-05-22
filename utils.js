
export function autoPrecision(n) {
    let a = Math.abs(n);
    if (a < 10) return 4;
    if (a < 100) return 3;
    if (a < 1000) return 2;
    return 1;
}

export function format(n) {
    return Number(n.toFixed(autoPrecision(n)));
}
