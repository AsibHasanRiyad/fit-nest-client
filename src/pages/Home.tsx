import { Category } from "@/components/Home/Category";
import Hero from "../components/Home/Hero";
import Container from "../components/ui/Container";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import ImageParallax from "@/components/Home/ImageParallax";

const Home = () => {
  return (
    <Container>
      <Hero />
      <Category />
      <FeaturedProducts />
      <ImageParallax />
    </Container>
  );
};

export default Home;
