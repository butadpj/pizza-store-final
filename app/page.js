import Hero from "./components/Hero";
import ProductLists from "./components/ProductLists";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="medium-pizzas">
        <ProductLists />
      </div>
    </main>
  );
}
