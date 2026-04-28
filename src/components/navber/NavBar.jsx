"use client"
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="border-b px-2 sticky top-0 z-40 bg-gray-100">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-2xl">
            <Link href={"/"}>
            pix<span className="text-purple-600">gen</span>.
            </Link>
          </h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-5 ">
          <ul className="flex items-center  text-sm ">
            <li>
              <Link className="border py-1 px-3 rounded-4xl mr-3 
               border-purple-400 bg-purple-100 hover:bg-purple-500
                hover:text-white transform duration-200" href={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link className="border py-1 px-3 rounded-4xl border-purple-400
               bg-purple-100 hover:bg-purple-500 hover:text-white transform
                duration-200" href={"/signin"}>SignIn</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;