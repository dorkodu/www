import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
