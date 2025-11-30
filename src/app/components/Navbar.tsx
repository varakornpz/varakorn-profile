'use client'

import { BiHomeAlt, BiIdCard } from "react-icons/bi";
import {GoProjectRoadmap} from "react-icons/go"
import CustomLink from "./CustomLink";
import { useState } from "react";
import { usePathname } from "next/navigation"
import './navbar.css'

const mainNavbar = ()=>{
  const pathname = usePathname()
  const pathToShow = ['/' , '/about' , "/project"]
  return (
    <nav className={`${pathToShow.includes(pathname) ? null : "hidden"} nav-fade-in-up fixed top-6 left-1/2 transform -translate-x-1/2 backdrop-blur-md border-emerald-400 border-2 rounded-lg px-2 py-1 flex flex-row gap-4 z-50`}>
      <CustomLink to="/" icon={<BiHomeAlt />}>Home</CustomLink>
      {/* <CustomLink to="/about" icon={<BiIdCard />}>About</CustomLink> */}
      <CustomLink to="project" icon={<GoProjectRoadmap/>}>Project</CustomLink>
    </nav>
  )
}

const Navbar = () => {
  return (
    mainNavbar()
  );
};

export default Navbar;

