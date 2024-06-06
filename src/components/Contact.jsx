const Contact = () => {
  return (
    <section className="bg-[#161E2F] py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-100 text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Discover answers to common inquiries in our Frequently Asked Questions
          section, providing clarity and guidance for all users.
        </p>
        <div className="shadow-md rounded-lg p-6 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-gray-100 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Kathryn Murphy"
                className="w-full px-4 py-4 rounded-lg focus:outline-none focus:ring focus:ring-primary-color bg-[#070C16]"
              />
            </div>
            <div>
              <label className="block text-gray-100 font-medium mb-2">
                Phone
              </label>
              <input
                type="text"
                placeholder="(907) 555-0101"
                className="w-full px-4 py-4 rounded-lg focus:outline-none focus:ring focus:ring-primary-color bg-[#070C16]"
              />
            </div>
            <div>
              <label className="block text-gray-100 font-medium mb-2">
                E-mail
              </label>
              <input
                type="email"
                placeholder="info@gmail.com"
                className="w-full px-4 py-4 rounded-lg focus:outline-none focus:ring focus:ring-primary-color bg-[#070C16]"
              />
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-gray-100 font-medium mb-2">
                Messages
              </label>
              <textarea
                placeholder="Type your messages..."
                className="w-full h-32 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-primary-color bg-[#070C16] text-gray-400"
              />
            </div>
            <div className="text-right">
              <button className="bg-primary-color px-6 py-4 text-white font-bold rounded-lg">
                Submit Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
