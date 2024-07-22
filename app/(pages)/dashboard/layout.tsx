import Header from "@/components/header/Header";
import LogoText from "@/components/blocks/LogoText";
import BasicButton from "@/components/buttons/BasicButton";
import Footer from "@/components/footer/Footer";
import StepBar from "@/components/stepper/StepBar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menus = [
    { label: <LogoText />, path: "/" },
    {
      label: (
        <BasicButton text="Create Case" variant="outlined" color="warning" />
      ),
      path: "/dashboard",
    },
  ];

  return (
    <section className="flex flex-col gap-10">
      <Header menus={menus} />
      <StepBar />
      {children}
      <Footer />
    </section>
  );
}
