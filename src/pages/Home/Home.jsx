import AboutSection from "../../components/Home/AboutSection/AboutSection";
import Banner from "../../components/Home/Banner/Banner";
import FeaturedClass from "../../components/Home/FeaturedClass/FeaturedClass";
import FeaturedSection from "../../components/Home/FeaturedSection/FeaturedSection";

import ForumSection from "../../components/Home/ForumSection/ForumSection";
import NewsLetter from "../../components/Home/NewsLetter/NewsLetter";
import TeamSection from "../../components/Home/TeamSection/TeamSection";
import Testimonial from "../../components/Home/Testimonial/Testimonial";


const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <div className="max-w-7xl mx-auto">
          <FeaturedSection></FeaturedSection>
          <AboutSection></AboutSection>
          <FeaturedClass></FeaturedClass>
          <Testimonial></Testimonial>
          <ForumSection></ForumSection>
          <NewsLetter></NewsLetter>
          <TeamSection></TeamSection>
    
        </div>
      </div>
    );
};

export default Home;