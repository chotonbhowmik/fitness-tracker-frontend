import AboutSection from "../../components/Home/AboutSection/AboutSection";
import Banner from "../../components/Home/Banner/Banner";
import FeaturedSection from "../../components/Home/FeaturedSection/FeaturedSection";
import ForumSection from "../../components/Home/ForumSection/ForumSection";
import Testimonial from "../../components/Home/Testimonial/Testimonial";


const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <div className="max-w-7xl mx-auto">
          <FeaturedSection></FeaturedSection>
          <AboutSection></AboutSection>
          <Testimonial></Testimonial>
          <ForumSection></ForumSection>
        </div>
      </div>
    );
};

export default Home;