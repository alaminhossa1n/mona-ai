import { useState } from "react";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="">
      <div className="text-center font-bold space-y-5">
        <p className="text-5xl text-gray-200 mb-10">MAZALA.AI Pricing Plans</p>
        <p className="text-gray-400">
          Explore our flexible pricing plans on Mazala.AI, designed to
          accommodate every creative journey and budget.
        </p>
      </div>

      <div className="p-4">
        <div className="flex justify-center gap-3">
          <div className="bg-[#101727] px-4 py-3 rounded-full">
            <button
              className={`px-6 py-4 focus:outline-none rounded-full ${
                activeTab === "Tab1"
                  ? "text-gray-100 bg-primary-color"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("Tab1")}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-4 focus:outline-none rounded-full ${
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

        <div className="mt-20 flex items-center justify-center gap-10">
          <div className="border border-primary-color p-5 rounded-md">
            <div className="flex items-center gap-5">
              <p className="text-gray-100 text-2xl font-bold ">Basic Plan</p>
              <p className="border border-primary-color px-8 py-3 rounded-full text-primary-color font-bold">
                Save 20%
              </p>
            </div>

            <hr />
          </div>

          <div className="border border-primary-color p-5 space-y-5">
            <div>
              <p className="text-gray-100 text-2xl font-bold ">Basic Plan</p>
              <p className="border border-primary-color px-8 py-3">Save 20%</p>
            </div>
          </div>

          <div className="border border-primary-color p-5">
            <div>
              <p className="text-gray-100 text-2xl font-bold ">Basic Plan</p>
              <p className="border border-primary-color px-8 py-3">Save 20%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
