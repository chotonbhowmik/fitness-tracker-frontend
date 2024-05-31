
import fitness from "../../../assets/undraw_personal_trainer_re_cnua.svg"
const AboutSection = () => {
    return (
      <div>
        <h1 className="text-center text-3xl font-bold pt-10  ">About Us</h1>
        <p className="text-center text-xl py-5 max-w-3xl mx-auto pb-14">
          We're dedicated to guiding individuals towards their fitness
          aspirations through tailored training and nutrition programs. Join our
          community to embark on a journey of transformation and wellness with
          expert support.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
          <div className="pl-3">
            <h2 className="font-medium text-slate-700 text-2xl ">
              Discover Our Mission
            </h2>
            <p className="py-5 ">
              Our mission is to empower you with personalized fitness plans,
              nutrition tracking, and a supportive community. We are dedicated
              to helping you achieve your health and wellness goals, no matter
              your fitness level. Join us and transform your journey to a
              healthier, happier life.
            </p>
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 rounded-full focus-visible:outline-none justify-self-center whitespace-nowrap bg-[#10B981] text-white hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none">
              <span>Learn More</span>
            </button>
          </div>
          <div>
            <img src={fitness}></img>
          </div>
        </div>
      </div>
    );
};

export default AboutSection;