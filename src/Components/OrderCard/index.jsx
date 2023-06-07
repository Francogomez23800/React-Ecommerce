import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {

    const { title, imgUrl, price, id, handleDelete } = props

    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon = (<XMarkIcon
            className='h-6 w-6 cursor-pointer'
            onClick={() => handleDelete(id)}
        />)
    }

    return (
        <div className='flex justify-between items-center px-6 rounded-lg m-2'>
            <div className='flex items-center gap-2'>
                <figure className='flex items-center w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imgUrl} alt={title} />
                    <h1 className='text-xs font-normal pl-2 '>{title}</h1>
                </figure>
            </div>
            <div className='flex items-center gap-2'>
                <span className='text-lg font-medium'>${price}</span>
                {renderXMarkIcon}
            </div>
        </div>
    )

}
export { OrderCard }