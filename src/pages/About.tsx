
const About = () => {
  return (
    <div className="min-h-screen pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">About PackWave</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-[#1a365d] mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, PackWave has grown from a small family business into a leading manufacturer of custom corrugated packaging solutions. Our journey began with a simple mission: to provide businesses with high-quality packaging that meets their specific needs.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've invested in cutting-edge technology and skilled craftspeople to ensure that every box we produce meets our exacting standards. Our commitment to quality, innovation, and customer satisfaction has helped us build lasting relationships with clients across various industries.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <span className="text-gray-500">Company Image Placeholder</span>
          </div>
          
          <div className="md:col-span-2 mt-8">
            <h2 className="text-2xl font-semibold text-[#1a365d] mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-[#f97316] mb-2">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Each product undergoes rigorous testing to ensure durability and reliability.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-[#f97316] mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We constantly explore new technologies and methods to improve our products and processes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-[#f97316] mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to environmentally responsible practices, using recycled materials and minimizing waste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
