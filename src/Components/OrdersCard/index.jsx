const OrdersCard = props => {

    const { totalPrice, totalProducts } = props

    console.log(totalProducts)

    return (
        <div className='flex justify-between items-center rounded-lg m-4 border border-black p-4 w-80 '>
            <p className='flex flex-col'>
                <span>Date: 07/02/2023</span>
                <span>Items: <b>{totalProducts}</b></span>
            </p>
                <span><b>${totalPrice}</b></span>
        </div>
    )

}
export { OrdersCard }