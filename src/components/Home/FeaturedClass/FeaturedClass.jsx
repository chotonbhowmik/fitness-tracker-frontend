import Glide from "@glidejs/glide";
import { useEffect } from "react";

const FeaturedClass = () => {
    useEffect(() => {
      const slider = new Glide(".glide-04", {
        type: "carousel",
        focusAt: "center",
        perView: 3,
        autoplay: 3500,
        animationDuration: 700,
        gap: 24,
        classNames: {
          nav: {
            active: "[&>*]:bg-wuiSlate-700",
          },
        },
        breakpoints: {
          1024: {
            perView: 2,
          },
          640: {
            perView: 1,
          },
        },
      }).mount();

      return () => {
        slider.destroy();
      };
    }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold pt-10">
        Transform Your Fitness Journey with Our Key Features
      </h1>
      <p className="text-center text-xl py-5 max-w-3xl mx-auto">
        Our fitness website offers personalized workout plans, nutrition
        tracking, and community support to help you achieve your health goals.
        Explore these features and transform your fitness journey today.
      </p>
      <div className="glide-04 relative w-full">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-medium text-slate-700">
                    Personalized Workout Plans
                  </h3>
                  <p>
                    Get a fitness routine tailored to your goals, fitness level,
                    and preferences. Our platform creates custom workout plans
                    that adapt as you progress, keeping you motivated and on
                    track whether you're a beginner or an advanced athlete.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-medium text-slate-700">
                    Real-Time Progress Tracking
                  </h3>
                  <p>
                    Monitor your fitness journey with real-time progress
                    tracking. Our intuitive dashboard provides detailed insights
                    and visual reports on your performance, helping you
                    celebrate achievements and identify areas for improvement.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-medium text-slate-700">
                    Expert Guidance and Support
                  </h3>
                  <p>
                    Access expert guidance from certified trainers and
                    nutritionists anytime. Receive professional advice,
                    personalized tips, and the encouragement you need to stay on
                    track, ensuring a successful fitness journey.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-medium text-slate-700">
                    Real-Time Progress Tracking
                  </h3>
                  <p>
                    Monitor your fitness journey with real-time progress
                    tracking. Our intuitive dashboard provides detailed insights
                    and visual reports on your performance, helping you
                    celebrate achievements and identify areas for improvement.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-medium text-slate-700">
                    Personalized Workout Plans
                  </h3>
                  <p>
                    Get a fitness routine tailored to your goals, fitness level,
                    and preferences. Our platform creates custom workout plans
                    that adapt as you progress, keeping you motivated and on
                    track whether you're a beginner or an advanced athlete.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedClass;
