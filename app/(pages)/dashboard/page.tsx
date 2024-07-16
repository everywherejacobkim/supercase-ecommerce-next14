import LogoText from "@/components/blocks/LogoText";
import Header from "@/components/header/Header";
import Image from "next/image";

export default function Dashboard() {
  const menus = [
    { label: <LogoText />, path: "/" },
    { label: "Create Case", path: "/dashboard" },
  ];

  return (
    <div className="w-full h-full">
      <Header menus={menus} />
    </div>
  );
}
