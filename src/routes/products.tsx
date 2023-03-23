import React from 'react'
import Tabs from '../components/tabs';

export default function New_products() {


  const posts = [
    {
        image:
            "/pexels-karolina-grabowska-4226880.jpg",
        category: "eye glasses",
        description: "Designer Glasses",
        price: "5000"
    },
    {
        image:
            "/pexels-bella-zhong-3782789.jpg",
        category: "Heels",
        description: "Red High Heels",
        price: "5000"
    },
    {
        image:
            "/pexels-ogo-2005355.jpg",
        category: "Dress",
        description: "Red cotton shirt and trousers",
        price: "5000"
    },
    {
        image:
            "pexels-godisable-jacob-2703042.jpg",
        category: "Dress",
        description: "Ankara Dress",
        price: "5000"
    },
    {
      image:
          "/pexels-melvin-buezo-2529148.jpg",
      category: "High quality shoe",
      description: "Shoe",
      price: "5000"
  },
  {
      image:
          "/pexels-pnw-production-9218538.jpg",
      category: "purse",
      description: "Jacket with Matching purse",
      price: "5000"
  },
  {
      image:
          "/pexels-flat-hito-904350.jpg",
      category: "Bag",
      description: "White purse with floral design",
      price: "5000"
  },
  {
      image:
          "pexels-skylar-kang-6044266.jpg",
      category: "Black purse",
      description: "Purse",
      price: "5000"
  },
  ];
  

    return (
        <div  className='container mx-auto my-16'>
            <h2 className='text-center font-semibold text-2xl'>New Products</h2>
            
            <Tabs />

            {/* <!-- Card List Section --> */}
            <section className=" py-1">
                    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        
                      {/* <!-- Card Item --> */}
            {
                  posts.map(({image, category, description, price }) => (              
                      
                            <div key={image}  className=" rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
                                {/* <!-- Clickable Area --> */}
                                <a href="link" className="cursor-pointer">
                                    <figure> {/* <!-- Image --> */}
                              <img src={ `${image + '?auto=format&fit=crop&w=400&q=50'}`} className="rounded-t h-72 w-full object-cover"/>

                                        <figcaption className="p-4">
                                            {/* <!-- category --> */}
                                            <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300" x-text="post.category">
                                                { description }
                                            </p>

                                            {/* <!-- Description --> */}
                                            <small className="leading-5 flex justify-between text-gray-500 dark:text-gray-400">
                                                <p> { category} </p>
                                                <p className='font-bold text-black'> {price} </p>
                                            </small>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                            ))
                          }
                    </div>
            </section>
        </div>
    )
}
