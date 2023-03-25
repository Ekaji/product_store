import {Link, Params, useLoaderData, useParams} from "react-router-dom";
import type {RootState}
from "../store";
import {useSelector, useDispatch} from "react-redux";
import {addToCart, removeFromCart} from "../slice/cartSlice";


export async function Loader({request, params} : any) {

    try {
        const response = await fetch(`https://dummyjson.com/products/${
            params.id
        }`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default function Item() {

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

    const {
        brand,
        category,
        description,
        discountPercentage,
        id,
        images,
        price,
        rating,
        stock,
        thumbnail,
        title
    } : any = useLoaderData()

    console.log(images, category, description, price, id)

    const cartCounter = useSelector((state : RootState) => state.cart.numOfCartItems)
    const isItemInCart = useSelector((state : RootState) => state.cart.cart.find((item) => item.id === id) ? true : false)

    console.log(isItemInCart)

    const dispatch = useDispatch()

    return (
        <section>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                        <img alt="Les Paul"
                            src={
                                images[0]
                            }
                            className="aspect-square w-full rounded-xl object-cover"/>
                    </div>

                    <div className="sticky top-0">

                        <div className="mt-8 flex justify-between">
                            <div className="max-w-[35ch] space-y-2">
                                <h1 className="text-3xl font-bold sm:text-2xl capitalize">
                                    {title} </h1>

                                <h2 className="text-xl">Brand: {brand}</h2>

                                <p className="text-sm">Rating{cartCounter}</p>

                                <div className="-ml-0.5 flex">
                                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>

                                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>

                                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>

                                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>

                                    <svg className="h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                </div>
                            </div>

                        </div>

                        <div className="mt-4">
                            <div className="prose max-w-none">
                                <p>{description}</p>
                            </div>
                        </div>

                        <div className="mt-8">

                            <div className="mt-8 flex gap-4">
                                <div>
                                    <p className="text-xl font-bold mt-3">${
                                        `${price}`
                                    }</p>
                                </div>
                                {

                                    !isItemInCart ? (                               <button // type="submit"
                                    onClick={
                                        () => dispatch(addToCart({
                                            brand,
                                            category,
                                            description,
                                            discountPercentage,
                                            id,
                                            images,
                                            price,
                                            rating,
                                            stock,
                                            thumbnail,
                                            title
                                        }))
                                    }
                                    className="w-full rounded bg-green-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white">
                                    { 'Add to cart'}
                                    </button>) : (
                                    <>
                                    <button // type="submit"
                                    onClick={
                                        () => dispatch(addToCart({
                                            brand,
                                            category,
                                            description,
                                            discountPercentage,
                                            id,
                                            images,
                                            price,
                                            rating,
                                            stock,
                                            thumbnail,
                                            title
                                        }))
                                    }
                                    className="w-full rounded bg-green-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white">
                                    { 'Add more items'}
                                                </button>
                                                <button // type="submit"
                                    onClick={
                                        () => dispatch(removeFromCart(id))
                                    }
                                    className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white">
                                    { 'Remove Item'}
                                </button>
                                    
                                    </>
                                    )
                                    
                                    }
                                {/* <button // type="submit"
                                    onClick={
                                        () => dispatch(addToCart({
                                            brand,
                                            category,
                                            description,
                                            discountPercentage,
                                            id,
                                            images,
                                            price,
                                            rating,
                                            stock,
                                            thumbnail,
                                            title
                                        }))
                                    }
                                    className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white">
                                    { isItemInCart ? 'Add more items': 'Add to cart'}
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


