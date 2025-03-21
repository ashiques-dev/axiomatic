import React from 'react'
import ArrowRight from '@/assets/arrow-right.svg'
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 gap-3 bg-black text-white text-sm">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex items-center gap-1">
          <p>Get started for free</p>
          <ArrowRight className="size-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas logo" height={40} width={40} />
            <MenuIcon className="size-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href={"#"}>About</Link>
              <Link href={"#"}>Features</Link>
              <Link href={"#"}>Customers</Link>
              <Link href={"#"}>Updates</Link>
              <Link href={"#"}>Help</Link>
              <button className="btn btn-primary">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;