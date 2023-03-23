import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);
  
  return (
    <div className='text-3xl font-bold underline'>
        <h2>sorry An Error Occurred</h2>
        <p>
            <i>{error?.statusText || error.message}</i>
        </p>
    </div>
  )
}
