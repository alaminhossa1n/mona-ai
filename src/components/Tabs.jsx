import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4">
      <div className="flex border-b border-gray-200">
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "Tab1"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Tab1")}
        >
          Tab 1
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "Tab2"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Tab2")}
        >
          Tab 2
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "Tab3"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("Tab3")}
        >
          Tab 3
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "Tab1" && <div>Content for Tab 1</div>}
        {activeTab === "Tab2" && <div>Content for Tab 2</div>}
        {activeTab === "Tab3" && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
};

export default Tabs;
