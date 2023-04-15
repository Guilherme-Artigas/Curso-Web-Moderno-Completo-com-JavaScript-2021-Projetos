function area (p1, p2) {
    const area = p1 * p2;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m².`);
    } else {
        return area;
    };
};


console.log(area(2, 2)); // 4
console.log(area(2)); // NaN
console.log(area()); // NaN
console.log(area(2, 5, 8, 10, 25)); // 10 ... Vai considerar somente os dois primeiros.
console.log(area(5, 5)); // undefined