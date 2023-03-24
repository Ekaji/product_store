import { Link, Params, useLoaderData, useParams } from "react-router-dom";

export async function Loader({request, params} : any) {
    console.log(params.category)
    try {
        const response = await fetch(`https://dummyjson.com/products/category/${
            params.category
        }`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default function Products() {

    interface Product {
        brand: string;
        category: string;
        description: string;
        discountPercentage: number;
        id: number;
        images: string[];
        price: number;
        rating: number;
        stock: number;
        thumbnail: string;
        title: string;
      }

    const data: any = useLoaderData()

    const params: Readonly<Params<string>> = useParams()

    return (
        <div className='container mx-auto my-16'>
            <h2 className='text-center font-semibold text-2xl capitalize'>{ params.category }</h2>

            <section className=" py-1">
                <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {
                    data?.products.map(({images, category, description, price, id}: Product) => (
                    <Link className="cursor-pointer" to={`/products/:category/${id}`}>
                        <div key={id}
                            className=" rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">

                                <div>
                                    <img src={
                                            `${
                                                images[0] + '?auto=format&fit=crop&w=400&q=50'
                                            }`
                                        }
                                        className="rounded-t h-72 w-full object-cover"/>

                                    <div className="p-4">
                                        <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300" x-text="post.category">
                                            {description} </p>

                                        <small className="leading-5 flex justify-between text-gray-500 dark:text-gray-400">
                                            <p> {category} </p>
                                            <p className='font-bold text-black'>
                                                {price} </p>
                                        </small>
                                    </div>
                                </div>
                        </div>
                    </Link>
                    ))
                } </div>
            </section>
        </div>
    )
}
