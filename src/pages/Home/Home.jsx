import Banner from "../../components/Home/Banner/Banner";
import FeaturedSection from "../../components/Home/FeaturedSection/FeaturedSection";


const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <div className="max-w-7xl mx-auto">
          <FeaturedSection></FeaturedSection>
        </div>
      </div>
    );
};

export default Home;