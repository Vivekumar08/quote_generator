import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const CustomLink = ({ href, title, className = "" }) => {
        return (
            <NavLink to={href} className={({ isActive }) =>
                isActive
                    ? `${className}  decoration-[white] md:decoration-[white] underline decoration-2 leading-snug  hover:opacity-75`
                    : `${className}  hover:decoration-[white] md:hover:decoration-[white] hover:underline hover:decoration-2 leading-snug  hover:opacity-75`
            }>
                <span className={` text-white`}>
                    {title}
                </span>
            </NavLink>
        )
    }
    return (
        <header className='absolute w-full px-[69px] py-[24px] '>
            <div className='flex justify-between items-center '>
                <CustomLink href={'/'} title={"Home"} className='px-3 py-2 flex items-center  uppercase underline-offset-4' />
                <CustomLink href={'/Bookmarks'} title={"Bookmark"} className='px-3 py-2 flex items-center  uppercase underline-offset-4' />
            </div>
        </header>
    )
}

export default Navbar