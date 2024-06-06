import { FaMagic, FaSave, FaTools, FaUserPlus } from "react-icons/fa";

const HowToCreate = () => {
  return (
    <section>
      <div className="text-center font-bold space-y-5">
        <p className="text-5xl text-gray-200">How to Create MAZALA.AI</p>
        <p className="text-gray-400">
          Mazala.AI is crafted by blending cutting-edge technology with a
          passion for creativity, fostering a limitless realm of imagination.
        </p>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="relative flex flex-col items-start space-y-8 lg:space-y-0 lg:flex-row lg:space-x-16 lg:items-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center lg:text-left">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mb-4">
                <FaUserPlus size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Create account
              </h3>
              <p className="text-gray-400 max-w-xs">
                To create an account on Mazala.AI, the platform for unleashing
                your creativity and exploring the depths of imagination.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center lg:text-left mt-8 lg:mt-16">
              <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mb-4">
                <FaTools size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Choose a tool
              </h3>
              <p className="text-gray-400 max-w-xs">
                After signing up on Mazala.AI, delve into various creative tools
                to spark inspiration and realization.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center lg:text-left mt-16 lg:mt-32">
              <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mb-4">
                <FaMagic size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Generate a dream
              </h3>
              <p className="text-gray-400 max-w-xs">
                In Mazala.AI, input your desires and watch dreams unfold,
                igniting imagination and creative exploration.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center lg:text-left mt-24 lg:mt-48">
              <div className="bg-green-700 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold mb-4">
                <FaSave size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Save and share
              </h3>
              <p className="text-gray-400 max-w-xs">
                Preserve your creations and spread inspiration by easily saving
                and sharing your imaginative endeavors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToCreate;
