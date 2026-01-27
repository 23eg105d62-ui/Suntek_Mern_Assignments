function bill(a, b, discount, tax) {
    totalAmount = a + b;
    let discountedAmt = totalAmount - discount
    let taxedAmt = discountedAmt + (tax / 100) * discountedAmt;
    return taxedAmt;
}

let finalBill = bill(500, 1200, 200, 18);
console.log('final bill amount is', finalBill);