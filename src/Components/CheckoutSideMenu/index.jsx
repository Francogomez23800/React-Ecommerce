import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
        context.setCount(filteredProducts.length)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalPrice: totalPrice(context.cartProducts),
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.closeCheckoutSideMenu()
        context.setSearchProduct(null)
        context.setCount(null)
    }

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} 
            checkout-side-menu flex-col fixed right-0 bg-slate-200`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button
                    onClick={() => context.closeCheckoutSideMenu()}
                ><XMarkIcon className='h-6 w-6 text-black' />
                </button>
            </div>
            <div className='overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imgUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='p-2 m-4 justify-center'>
                <p className='flex justify-between items-center'>
                    <span className='font-normal text-lg'>Total:</span>
                    <span className='font-medium text-xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button
                        className='w-full p-2 bg-slate-600 py-3 text-white rounded-lg mt-4'
                        onClick={() => {
                         handleCheckout()
                        }}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export { CheckoutSideMenu }