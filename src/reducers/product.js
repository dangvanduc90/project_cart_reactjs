let initState = [
    {
        id: 1,
        name: 'Iphone 6',
        image: '',
        description: 'Sản phẩm do Apple sản xuất',
        price: 400,
        inventory: 10,
    },
    {
        id: 2,
        name: 'Iphone 6S',
        image: '',
        description: 'Sản phẩm do Apple sản xuất',
        price: 450,
        inventory: 8,
    },
    {
        id: 3,
        name: 'Iphone 6S Plus',
        image: '',
        description: 'Sản phẩm do Apple sản xuất',
        price: 480,
        inventory: 6,
    },
    {
        id: 4,
        name: 'Iphone 7',
        image: '',
        description: 'Sản phẩm do Apple sản xuất',
        price: 520,
        inventory: 12,
    },
];

const product = (state = initState, action) => {
    switch (action.types) {
        default:
            break;
    }
};

export default product;
