import React from 'react';

export default function Tabs() {
  return (
    
<ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
    <li className="mr-2">
        <a href="#" aria-current="page" className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg ">All Products</a>
    </li>
    <li className="mr-2">
        <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">T-Shirt</a>
    </li>
    <li className="mr-2">
        <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">Hoodie</a>
    </li>
    <li className="mr-2">
        <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">Jacket</a>
    </li>
</ul>

  )
}
