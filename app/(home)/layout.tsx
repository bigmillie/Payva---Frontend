import Footer from "../components/commons/Footer";
import Header from "../components/commons/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     <div className="relative">
              <Header />
      {children}
      <Footer />
     </div>
    </>
  );
}