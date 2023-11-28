import heroImage from "../images/hero.jpg";

function Hero() {
  return (
    <section className="hero relative bg-main-background-color text-main-text-color">
      <div className="container mx-auto flex items-center justify-center h-screen relative z-10">
        <div className="text-center">
          <h1 className="font-inter font-bold text-white text-5xl leading-tight">
            Leading game <br /> boosting platform
          </h1>
          <p className="font-inter text-gray-600 text-lg text-main-secondary-color mt-4">
            Game Boosting ⸱ Expert Coaching ⸱ Quality Players
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={heroImage}
          alt="Hero Background"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}

export default Hero;