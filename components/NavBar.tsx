import Link from "next/link"
import Image from "next/image"
import NavItems from "./NavItems"

const NavBar = () => {
  return (
   <nav className="navbar ">
       <Link href="/">
       <div className="flex items-center gap-2.5 cursor-pointer">
            <Image src = "/images/logo.svg" 
             alt="logo" 
             width={32} 
             height={32} />
       </div>
       </Link>
       <div className="flex items-center gap-8">
          <NavItems />
          <Link href="/sign-in">
            <p>Sign In</p>
          </Link>
       </div>
   </nav>
  )
}

export default NavBar
