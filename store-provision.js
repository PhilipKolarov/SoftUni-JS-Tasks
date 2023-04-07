function storeProvision(stock, orderedProducts) {
    let combined = [...stock, ...orderedProducts];
    let store = {};

    for (let i = 0; i < combined.length; i++) {
        let qty = combined[i]
        if (i % 2 === 0) {
            if (!store.hasOwnProperty(qty)) {
                store[qty] = 0;
            }
        } else {
            let value = Number(qty);
            let previousQty = combined[i - 1];
            store[previousQty] += value;
        }
    }

    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }
}

storeProvision( 
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas',
        '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]
)