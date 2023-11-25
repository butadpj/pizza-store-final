import Hero from "@components/Hero";
import ProductLists from "@components/ProductLists";
import { pizzaMenuImages } from "@assets/pizza-menu";

const bestSellers = [
  {
    id: 1,
    name: "Bacon Mushroom",
    href: "#",
    price: 210.0,
    sizeVariants: {
      medium: 210.0,
    },
    imageSrc: pizzaMenuImages.baconMushroom,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Pizza Combo",
    href: "#",
    price: "$35",
    imageSrc: pizzaMenuImages.pizzaCombo,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Baked Pizza",
    href: "#",
    price: "$89",
    imageSrc: pizzaMenuImages.bakedPizza,
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "The Circle of Life",
    href: "#",
    price: "$35",
    imageSrc: pizzaMenuImages.theCircleOfLife,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "All Time Favorite",
    href: "#",
    price: "$35",
    imageSrc: pizzaMenuImages.allTimeFavorite,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Mac Duo",
    href: "#",
    price: "$35",
    imageSrc: pizzaMenuImages.macDuo,
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />

      <div id="menu" className="menu">
        <ProductLists
          label={{
            style: "text-red-600",
            content: "Best sellers 💯",
          }}
          products={bestSellers}
        />
      </div>
    </main>
  );
}
