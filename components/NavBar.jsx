import React from "react";
import style from '../styles/header.module.css'
import logo from '../public/logo.png'
import serachLogo from '../public/search-interface-symbol.png'
import profile from '../public/Icon_Profile.svg'
import cart from '../public/shopping-cart.png'
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <>
            <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal mx-7"
                >
                    <a href="#" className="flex items-center">
                        NEW
                    </a>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal mx-7"
                >
                    <a href="#" className="flex items-center">
                        SALE
                    </a>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal mx-7"
                >
                    <a href="#" className="flex items-center">
                        ACRYLIC
                    </a>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal mx-7"
                >
                    <a href="#" className="flex items-center">
                        GEL
                    </a>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal mx-7"
                >
                    <a href="#" className="flex items-center">
                        TOOLS
                    </a>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal mx-7"
                >
                    <a href="#" className="flex items-center">
                        BRUSHES
                    </a>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal mx-7"
                >
                    <a href="#" className="flex items-center">
                        ESSENTIALS
                    </a>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal mx-7"
                >
                    <a href="#" className="flex items-center">
                        MERCH
                    </a>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal mx-7"
                >
                    <a href="#" className="flex items-center">
                        SHOP ALL
                    </a>
                </Typography>
            </ul>
        </>

    );

    return (
        <>
            <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 bg-black" style={{borderTop:'1px solid transparent',borderLeft:'1px solid transparent',borderRight:'1px solid transparent',}}>
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Image
                        className={`${style.logo}`}
                        src={logo}
                        width={40}
                        height={40}
                        alt='logo'
                    />
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>

                        <Link href={'/'}>
                            <Image
                                className={`invert m-2 ${style.img}`}
                                src={serachLogo}
                                height={15}
                                width={20}
                                alt='logo'
                            />
                        </Link>
                        <Link href={'/'}>
                            <Image
                                className={`invert m-2 ${style.img}`}
                                src={profile}
                                height={15}
                                width={20}
                                alt='logo'
                            />
                        </Link>
                        <Link href={'/'}>
                            <Image
                                className={`invert m-2 ${style.img}`}
                                src={cart}
                                height={15}
                                width={20}
                                alt='logo'
                            />
                        </Link>
                        <IconButton
                            variant="text"
                            className="flex ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <Button variant="gradient" size="sm" fullWidth className="mb-2">
                        <span>Buy Now</span>
                    </Button>
                </MobileNav>
            </Navbar>

        </>
    );
}

export default NavBar