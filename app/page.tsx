import HeroSlider from "@/components/Shared/HeroSlider";
import Categories from "@/components/Shared/Categories";
import Products from "@/components/Shared/Products";
import Banner from "@/components/Shared/Banner";

export default function Home() {
  return (
    <div>
      {/* Slider Here */}
      <HeroSlider />
      {/* Categories Here */}
      <Categories />
      {/* Products Here */}
      <Products />
      {/* Advertize banner */}
      <Banner />
    </div>
  );
}
