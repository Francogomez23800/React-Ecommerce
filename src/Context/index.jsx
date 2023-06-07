import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    //Get products (API)
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    // Cart Count
    const [count, setCount] = useState(null)

    // Product Detail : OPEN/CLOSE
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Product Detail : Show product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart: Add product to cart
    const [cartProducts, setCartProducts] = useState([])

    // Product Detail : OPEN/CLOSE
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Shopping Cart: Order
    const [order, setOrder] = useState([])

    //Search product
    const [searchProduct, setSearchProduct] = useState(null)

    //Search products filter
    const [filteredProducts, setFilteredProducts] = useState(null)

    const filter = (Products, searchProduct) => {
    return Products?.filter(product => product.title.toLowerCase().includes(searchProduct.toLowerCase()))
    }

    //Search product by category
    const [searchByCategory, setSearchByCategory] = useState('')

    //Search category filter

    const categoryFilter = (Products, searchByCategory) => {
    return Products?.filter(product => product.category.name.toLowerCase().includes(searchByCategory))
    }
    

    const filterBy = (searchType, items, searchProduct, searchByCategory) => {
        if(searchType === 'BY_TITLE'){
            return filter(items, searchProduct)
        }
        if(searchType === 'BY_CATEGORY'){
            return categoryFilter(items, searchByCategory)
        }
        if(searchType === 'BY_TITLE_AND_CATEGORY'){
            return categoryFilter(items, searchByCategory).filter(item => item.category.name.toLowerCase().includes(searchProduct.toLowerCase()))
        }
        if(!searchType ){
            return items
        }
    }

    useEffect(() =>{
        if(searchProduct && !searchByCategory) setFilteredProducts(filterBy('BY_TITLE', items, searchProduct, searchByCategory))
        if(searchByCategory && !searchProduct) setFilteredProducts(filterBy('BY_CATEGORY', items, searchProduct, searchByCategory))
        if(searchProduct && searchByCategory) setFilteredProducts(filterBy('BY_TITLE_AND_CATEGORY', items, searchProduct, searchByCategory))
        if(!searchByCategory && !searchProduct) setFilteredProducts(filterBy(null, items, searchProduct, searchByCategory))
        },[items, searchProduct, searchByCategory])

    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                setIsCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder,
                searchProduct,
                setSearchProduct,
                setSearchByCategory,
                filteredProducts,
                items,
                setItems,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
