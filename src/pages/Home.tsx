import { Category } from "@/components/Home/Category";
import Hero from "../components/Home/Hero";
import Container from "../components/ui/Container";
import { FeaturedProducts } from "@/components/Home/FeaturedProducts";

const Home = () => {
  return (
    <Container>
      <Hero />
      <Category />
      <FeaturedProducts />
    </Container>
  );
};

export default Home;
