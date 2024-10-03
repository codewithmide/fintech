'use client';

import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href='/' className="center gap-5">
            <Image src="/svgs/logo.svg" alt="logo" width={24} height={24} />
            <p>Fintech</p>
        </Link>
    );
}
 
export default Logo;