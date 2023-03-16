function orderTaker (product, qty) {
    switch (product) {
        case 'coffee':
            console.log(operation(qty, 1.50));
        break;
        case 'water':
            console.log(operation(qty, 1.00));
        break;
        case 'coke':
            console.log(operation(qty, 1.40));
        break;
        case 'snacks':
            console.log(operation(qty, 2.00));
        break;
    }

    function operation (quantity, pricePerProduct) {
        result = quantity * pricePerProduct;
        return result.toFixed(2);
    }
}

orderTaker('coffee', 2)
orderTaker('coke', 5)