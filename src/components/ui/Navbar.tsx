import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
    return (
        <div className="pl-4 mt-[-.1rem] flex items-start bg-sky-400 h-20">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={0.84}
                stroke="currentColor"
                className="w-10 mt-[1rem] h-[25px] "
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.75h16.5M3.75 11.6h16.5m-16.5 6h16.5"
                />
            </svg>
            <img
                src="/youtubewhite.png"
                className="w-[5.5rem] pt-[.3rem] m-0 p-0"
                alt="youtube logo"
            />
        </div>
    );
};

export default Navbar;
