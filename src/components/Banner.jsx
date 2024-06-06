/* eslint-disable react/no-unescaped-entities */
import bannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <section>
      <div className="text-center space-y-5 font-bold">
        <p className="text-7xl text-gray-200">
          The Best Mongolia's AI Tools for
        </p>

        <p className="text-7xl bg-gradient-to-r from-[#1AC5B4] to-[#0BA1AC] bg-clip-text text-transparent">
          Video Subtitles
        </p>

        <p className="text-gray-400">
          One standout feature of this AI tool is its seamless integration of
          Mongolian language support
        </p>
      </div>
      <img className="mt-20 w-full mx-auto" src={bannerImg} alt="" />

      <div className="flex justify-center mt-8">
        <button className="bg-primary-color px-8 py-4 text-white font-bold rounded-lg">
          Try it for free
        </button>
      </div>
    </section>
  );
};

export default Banner;
