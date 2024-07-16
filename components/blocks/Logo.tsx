import React from "react";
import Image from "next/image";
import logo from "@/assets/images/super-case-logo.png";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="">
      <Image src={logo} alt="Logo" width={80} height={80} />
    </div>
  );
};

export default Logo;
