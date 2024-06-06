import { useState } from "react";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="w-full bg-gray-900 py-12">
      <div className="text-center font-bold space-y-5 mb-10">
        <p className="text-3xl md:text-5xl text-gray-200">
          MAZALA.AI Pricing Plans
        </p>
        <p className="text-gray-400 px-4 md:px-0">
          Explore our flexible pricing plans on Mazala.AI, designed to
          accommodate every creative journey and budget.
        </p>
      </div>

      <div className="p-4">
        <div className="flex justify-center mb-8">
          <div className="bg-[#101727] px-4 py-3 rounded-full">
            <button
              className={`px-4 md:px-6 py-2 md:py-4 focus:outline-none rounded-full ${
                activeTab === "Tab1"
                  ? "text-gray-100 bg-primary-color"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("Tab1")}
            >
              Monthly
            </button>
            <button
              className={`px-4 md:px-6 py-2 md:py-4 focus:outline-none rounded-full ${
                activeTab === "Tab2"
                  ? "text-gray-100 bg-primary-color"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("Tab2")}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-10">
          {/* Card 1 */}
          <div className="w-full md:w-1/3 border border-gray-700 p-5 rounded-2xl bg-[#101727]">
            <div className="flex items-center justify-between gap-5">
              <p className="text-gray-100 text-xl font-bold">Basic Plan</p>
              <p className="border border-primary-color px-8 py-3 rounded-full text-primary-color font-bold bg-[#121A2B]">
                Save 20%
              </p>
            </div>

            <hr className="mt-5 border-gray-700" />

            <p className="text-primary-color py-10 font-bold">
              <span className="text-4xl">$0</span>/month
            </p>

            <hr className="border-gray-700" />

            <div className="space-y-5 mt-5">
              <p className="text-gray-100 text-xl font-bold">
                Featured Services
              </p>
              <div className="flex items-center justify-between border border-gray-700 p-3 rounded-md bg-[#121A2B]">
                <p className="text-gray-100">Video subtitles</p>
                <p className="text-gray-400">10 | Per Day</p>
              </div>
              <div className="flex items-center justify-between border border-gray-700 p-3 rounded-md bg-[#121A2B]">
                <p className="text-gray-100">Images Generation</p>
                <p className="text-gray-400">10 | Per Day</p>
              </div>
              <div className="flex items-center justify-between border border-gray-700 p-3 rounded-md bg-[#121A2B]">
                <p className="text-gray-100">Chatroom</p>
                <p className="text-gray-400">10 | Per Day</p>
              </div>
            </div>

            <button className="px-8 py-4 border border-gray-700 rounded-md w-full text-primary-color font-bold mt-10 bg-[#121A2B]">
              Get Started
            </button>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/3 border border-primary-color p-5 rounded-2xl bg-[#101727] relative">
            <div className="bg-primary-color absolute w-full top-0 left-0 right-0 py-3 rounded-t-xl text-center text-gray-100 font-bold">
              <p>Most Popular</p>
            </div>
            <div className="flex items-center justify-between gap-5 mt-20">
              <p className="text-gray-100 text-xl font-bold">Business Plan</p>
              <p className="border border-primary-color px-8 py-3 rounded-full text-primary-color font-bold bg-[#121A2B]">
                Save 20%
              </p>
            </div>

            <hr className="mt-5 border-gray-700" />

            <p className="text-primary-color py-10 font-bold">
              <span className="text-4xl">$19</span>/month
            </p>

            <hr className="border-gray-700" />

            <div className="space-y-5 mt-5">
              <p className="text-gray-100 text-xl font-bold">
                Featured Services
              </p>
              <div className="flex items-center justify-between border border-gray-700 p-3 rounded-md bg-[#121A2B]">
                <p className="text-gray-100">Video subtitles</p>
                <p className="text-gray-400">10 | Per Day</p>
              </div>
              <div className="flex items-center justify-between border border-gray-700 p-3 rounded-md bg-[#121A2B]">
                <p className="text-gray-100">Images Generation</p>
                <p className="text-gray-400">10 | Per Day</p>
              </div>
              <div className="flex items-center justify-between border border-gray-700 p-3 rounded-md bg-[#121A2B]">
                <p className="text-gray-100">Chatroom</p>
                <p className="text-gray-400">10 | Per Day</p>
              </div>
              <div className="flex items-center justify-between border border-gray-700 p-3 rounded-md bg-[#121A2B]">
                <p className="text-gray-100">YouTube</p>
                <p className="text-gray-400">Unlimited</p>
              </div>
            </div>

            <button className="px-8 py-4 rounded-md w-full text-gray-100 font-semibold mt-10 bg-primary-color">
              Get Started
            </button>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-1/3 border border-gray-700 p-5 rounded-2xl bg-[#101727]">
            <div className="flex items-center justify-between gap-5">
              <p className="text-gray-100 text-xl font-bold">Enterprise Plan</p>
              <p className="border border-primary-color px-8 py-3 rounded-full text-primary-color font-bold bg-[#121A2B]">
                Save 10%
              </p>
            </div>

            <hr className="mt-5 border-gray-700" />

            <p className="text-primary-color py-10 font-bold">
              <span className="text-4xl">$30</span>/month
            </p>

            <hr className="border-gray-700" />

            <div className="space-y-5 mt-5">
              <p className="text-gray-100 text-xl font-bold">
                Featured Services
              </p>
              <div className="flex items-center justify-between border border-gray-700 p-3 rounded-md bg-[#121A2B]">
                <p className="text-gray-100">Video subtitles</p>
                <p className="text-gray-400">10 | Per Day</p>
              </div>
              <div className="flex items-center justify-between border border-gray-700 p-3 rounded-md bg-[#121A2B]">
                <p className="text-gray-100">Images Generation</p>
                <p className="text-gray-400">10 | Per Day</p>
              </div>
              <div className="flex items-center justify-between border border-gray-700 p-3 rounded-md bg-[#121A2B]">
                <p className="text-gray-100">Chatroom</p>
                <p className="text-gray-400">10 | Per Day</p>
              </div>
              <div className="flex items-center justify-between border border-gray-700 p-3 rounded-md bg-[#121A2B]">
                <p className="text-gray-100">YouTube</p>
                <p className="text-gray-400">Unlimited</p>
              </div>
            </div>

            <button className="px-8 py-4 border border-gray-700 rounded-md w-full text-primary-color font-bold mt-10 bg-[#121A2B]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
