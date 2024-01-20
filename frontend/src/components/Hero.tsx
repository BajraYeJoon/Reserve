import Banner from "./Banner";

const Hero = () => {
  return (
    <section className=" h-auto md:min-h-[350px] lg:min-h-[465px] relative">
      <img
        src="https://images.unsplash.com/photo-1515362655824-9a74989f318e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD"
        alt=""
        className="absolute inset-0 -z-10  object-cover w-full h-full bg-image"
      />
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-0 ">
        <Banner />
        <h1 className="mb-4 text-4xl font-extrabold tracking-wide leading-none  md:text-5xl lg:text-6xl text-gray-100">
          Your Perfect Stay Awaits
        </h1>
        <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-gray-200">
          Choose Your Ideal Room, Tailor Your Stay, and Make Every Moment
          Unforgettable with Our Easy Booking Experience.
        </p>
      </div>
    </section>
  );
};

export default Hero;
