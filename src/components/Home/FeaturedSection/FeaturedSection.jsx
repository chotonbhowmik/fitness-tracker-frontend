

const FeaturedSection = () => {
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
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-4 text-center my-5 shadow py-10 px-6">
            <div className="flex items-center text-emerald-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                aria-label="Dashboard icon"
                role="graphics-symbol"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            <div className="flex w-full min-w-0 flex-col items-center justify-center gap-0 text-base">
              <p className="text-slate-500 pb-5">
                <strong className="font-medium text-slate-700 text-2xl ">
                  Personalized Workout Plans
                </strong>
              </p>
              <p>
                {" "}
                Get a workout plan tailored specifically to your fitness level,
                goals, and preferences. Whether you're a beginner or an advanced
                athlete, our custom plans ensure you stay motivated and on
                track.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-center my-5 shadow py-10 px-6">
            <div className="flex items-center text-emerald-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                aria-label="Dashboard icon"
                role="graphics-symbol"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            <div className="flex w-full min-w-0 flex-col items-center justify-center gap-0 text-base">
              <p className="text-slate-500 pb-5">
                <strong className="font-medium text-slate-700 text-2xl">
                  Nutrition Tracking
                </strong>{" "}
              </p>
              <p>
                Monitor your diet with our comprehensive nutrition tracking
                tools. Log your meals, count your calories, and get personalized
                dietary advice to complement your fitness routine and help you
                achieve your goals faster.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-center my-5 shadow py-10 px-6">
            <div className="flex items-center text-emerald-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                aria-label="Dashboard icon"
                role="graphics-symbol"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
            <div className="flex w-full min-w-0 flex-col items-center justify-center gap-0 text-base">
              <p className="text-slate-500 pb-5">
                <strong className="font-medium text-slate-700 text-2xl">
                  Community Support
                </strong>{" "}
              </p>
              <p>
                Connect with other fitness enthusiasts through our community
                forums and social features. Share your progress, get advice, and
                stay motivated with the support of a like-minded community.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FeaturedSection;