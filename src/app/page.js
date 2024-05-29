import AsideCategory from "@/components/AsideCategory";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-4/5 mx-auto">
        <section className="flex">
          <AsideCategory />
          <Products />
        </section>
      </main>
      <Footer />
    </>
  );
}
