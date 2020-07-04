import { createContext } from 'react';

const StoreContext = createContext({
    cart: {},
    products: [],
    user: null,
    addToCart: () => {},
    removeFromCart: () => {},
    login: () => {},
    clearCart: () => {},
    addProduct: () => {},
    checkout: () => {},
    logout: () => {}
})

export default StoreContext;