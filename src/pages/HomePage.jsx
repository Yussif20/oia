import HeroSection from "../components/home/HeroSection";
import CategoriesSection from "../components/home/CategoriesSection";
import CouponBanner from "../components/home/CouponBanner";
import FeaturedSection from "../components/home/FeaturedSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <CouponBanner />
      <FeaturedSection />
    </div>
  );
};

export default HomePage;
