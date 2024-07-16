import React from "react";
import Image from "next/image";
import logo from "@/assets/images/super-case-logo.png";

type Props = {};

const LogoText = (props: Props) => {
  return (
    <div className="flex gap-1 items-center">
      <Image src={logo} alt="Logo" width={50} height={50} />
      <div className="flex gap-1">
        <h1 className="text-2xl font-bold font-mono">Super</h1>
        <h1 className="text-2xl font-bold font-mono">Case</h1>
      </div>
    </div>
  );
};

export default LogoText;
