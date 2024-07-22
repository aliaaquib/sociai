import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex flex-col items-center">
      <Image src="/logo.svg" width={120} height={64} alt="logo" />
    </Link>
  );
};
