import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import Products from "./landingpage_components.tsx/products";

export default function Tabs() {

    const tab_links = [
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
    <>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
            {
                tab_links.map(({ link, item }) => (                
                <li className="mr-2">
                        <NavLink to={link} className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">{ item }</NavLink>
                </li>
                ))
            }
        </ul>
    </>

  )
}
