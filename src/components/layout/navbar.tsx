/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {

    type items = {
        item: string;
        link: string;
    }
    
    type navLinkItems = {
        item: string;
        link: string;
    }[]
    
    const navlinks: navLinkItems = [
        {
            link: "/products/tops",
            item: "Tops"
        },
        {
            link: "/products/sunglasses" ,
            item: "Sunglasses"
        },
        {
            link: "/products/womens-dresses",
            item: "women's-dresses"
        },
        {
            link: "/products/womens-shoes",
            item: "women's-shoes"
        },
        {
            link: "/products/mens-shoes",
            item: "mens-shoes"
        },
        {
            link: "/products/mens-shirts",
            item: 'mens-shirts'
        },
    ]
    return (

        <div className="container flex flex-wrap items-center justify-between border-b border-gray-300 mx-auto p-3">
            <Link to="/" className="flex items-center">
                <img src="/search.png" className=" mr-3 h-6" alt="product storeLogo"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </Link>
            <div className="flex md:order-2">
                <div className="flex text-black className font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">
                    <img src="/User.png" className=" mr-3 h-6" alt="product storeLogo"/>
                    Account
                </div>

                <div className="flex text-black className font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">
                    <img src="/shopping_bag.png" className="mr-3 h-6" alt="product storeLogo"/>
                    Shopping
                </div>

            </div>
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2" id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                        {
                        navlinks.map(({item, link} : items) => (
                            <li key={link}>
                                <Link to={link}
                                    className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 "
                                    aria-current="page">
                                    {item}</Link>
                            </li>
                        ))
                    } </ul>
            </div>
        </div>

    )
}
