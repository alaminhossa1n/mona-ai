/* eslint-disable react/no-unescaped-entities */
import bannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="space-y-10">
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

      <section>
        <div className="text-center font-bold space-y-5">
          <p className="text-5xl text-gray-200">How to Create MAZALA.AI</p>
          <p className="text-gray-400">
            Mazala.AI is crafted by blending cutting-edge technology with a
            passion for creativity, fostering a limitless realm of imagination.
          </p>
        </div>
      </section>

      <section className="bg-[#101727]">
        <div className="text-center font-bold space-y-5">
          <p className="text-5xl text-gray-200">
            MAZALA.AI 5 Amazing Features Tools
          </p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
