import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";

const NavBar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    return (
        <nav className="flex justify-between item-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-semibold bg-slate-200 ">
            <ul className="flex items-center gap-3">
                <li className="font-bold text-lg">
                    <NavLink
                        to={'/'}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/all'}
                        onClick={() => context.setSearchByCategory()}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/clothes'}
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/electronics'}
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/furnitures'}
                        onClick={() => context.setSearchByCategory('furniture')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/toys'}
                        onClick={() => context.setSearchByCategory('toys')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/others'}
                        onClick={() => context.setSearchByCategory('others')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    franco@frang.com
                </li>
                <li>
                    <NavLink
                        to={'/my-orders'}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/my-account'}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/sign-in'}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                    >
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className=' h-6 w-6' /> <div>{context.count}</div>
                </li>
            </ul>
        </nav>)
}

export { NavBar }