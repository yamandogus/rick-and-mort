import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/navbar";

export default function rootLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
