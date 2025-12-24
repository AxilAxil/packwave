
const About = () => {
  return (
    <div className="min-h-screen pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">About PackWave</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-[#1a365d] mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Our journey began with hard work, integrity, and a simple belief: do honest work and take care of people.
            </p>
            <p className="text-gray-600 mb-4">
              Built by a father-and-son team, our business grew from hands-on effort, long hours, and a deep commitment to our customers and employees. Rooted in strong Indian values, we focused on trust, quality, and long-term relationships rather than quick wins.
            </p>
            <p className="text-gray-600 mb-4">
              Today, we continue to grow with the same principles, carrying our values forward as we expand beyond India and work with clients globally.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <span className="text-gray-500">Company Image Placeholder</span>
          </div>
          
          <div className="md:col-span-2 mt-8">
            <h2 className="text-2xl font-semibold text-[#1a365d] mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-[#f97316] mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We believe in honest work, transparency, and keeping our commitments. Trust is at the core of everything we do.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-[#f97316] mb-2">Customer & People First</h3>
                <p className="text-gray-600">
                  We care deeply about our customers and our employees. Building long-term relationships and treating people with respect guides every decision.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-[#f97316] mb-2">Hard Work & Quality</h3>
                <p className="text-gray-600">
                  We value dedication, discipline, and consistent effort. Quality is never compromised, and we take pride in work done right.
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
