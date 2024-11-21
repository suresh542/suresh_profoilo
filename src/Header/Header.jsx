import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ThemeProvider } from "../ThemeProvider";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useEffect } from "react";

const navigation = [
  { name: "Dashboard", href: "#", current: true, icons: <FaHome /> },
  { name: "Team", href: "#", current: false, icons: <IoPerson /> },
  { name: "Projects", href: "#", current: false, icons: <IoPerson /> },
  { name: "Calendar", href: "#", current: false, icons: <IoPerson /> },
];

export default function Header() {


  return (
    <div className="px-3 py-10 relative ms:fixed lg:fixed hidden md:flex lg:flex  lg:flex-col justify-between bg-transparent  h-screen w-auto">
      <div className="">
        <svg
          className="h-8 w-auto fill-gray-500 "
          viewBox="0 0 1298 815"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1297.79 814.154H854.969L727.01 686.22V814.154H499.442C530.01 795.603 556.44 770.944 577.035 741.847H654.703V511.636L884.914 741.847H1123.23L787.499 406.117L1121.31 72.307H883.02L654.704 300.623V72.307H221.609C139.278 72.307 72.3069 139.278 72.3069 221.609C72.3069 303.94 139.278 370.911 221.609 370.911H365.475C487.674 370.911 587.109 470.346 587.109 592.545C587.109 714.744 487.674 814.154 365.475 814.154H0V741.847H365.475C447.806 741.847 514.802 674.875 514.802 592.545C514.802 510.215 447.806 443.218 365.475 443.218H221.609C99.4089 443.218 0 343.808 0 221.609C0 99.41 99.4089 0 221.609 0H727.011V126.038L853.075 0H1295.87L889.752 406.117L1297.79 814.154Z" />
        </svg>


        {/* <div>
        <div className="text-red-500 dark:text-black">

       
       
       <div className="relative  hover:block">
       <div className="mx-auto max-w-7xl px-2 mt-64 sm:px-6 lg:px-8 w-full h-12  hover:hidden">
           =
         </div>

         <div className="space-y-1  group-hover:block pb-3 pt-2 absolute text-slate-50 duration-2500 ease-out">
           {navigation.map((item) => (
             <div
               key={item.name}
               as="a"
               href={item.href}
               aria-current={item.current ? "page" : undefined}
               className={`${
                 item.current
                   ? "bg-gray-900 text-white"
                   : "text-gray-300 hover:bg-gray-700 hover:text-white"
               } block rounded-md px-3 py-2 text-base font-medium`}
             >
               <div className="flex items-center">
                 <span className=" duration-2500 ease-in">
                   {item.icons}
                 </span>
               </div>
             </div>
           ))}
         </div>
       </div>
   </div>
        </div> */}
      </div>
    

      <ThemeProvider />
    </div>
  );
}
