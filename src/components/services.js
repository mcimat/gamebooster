function Services() {
    return (
      <section className="bg-gray-100 mt-8">
        <div className="container mx-auto py-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold">Our Services</h3>
            <p className="text-gray-600 mt-2">
              Discover top-notch game enhancement, expert guidance, or simply a great gaming experience – your desires are our expertise.
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl text-center font-semibold mb-4">Boosting</h4>
              <p className="text-gray-600">Navigate your journey to success effortlessly, enjoying a stress-free path towards progress with ease and peace of mind.</p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl text-center font-semibold mb-4">Coaching</h4>
              <p className="text-gray-600">Level up with elite player coaching for peak performance. Gain tailored strategies and insights from the best in the game.</p>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl text-center font-semibold mb-4">Quality</h4>
              <p className="text-gray-600">Enhance your gaming with inclusive, premium experiences. Hire skilled companions for quality adventures everyone can enjoy.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;
  