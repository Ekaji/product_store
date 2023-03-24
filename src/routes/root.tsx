import { Outlet } from "react-router-dom";
import NavBar from '../components/layout/navbar'
import LandingPage from '../components/landingpage_components.tsx'

const Root = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  )
}

export default Root