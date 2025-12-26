
const About = () => {
  return (
    <div className="min-h-screen pt-16 pb-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">About PackWave</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
              Our journey began with hard work, integrity, and a simple belief: do honest work and take care of people.
            </p>
            <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
              Built by a father-and-son team, our business grew from hands-on effort, long hours, and a deep commitment to our customers and employees. Rooted in strong Indian values, we focused on trust, quality, and long-term relationships rather than quick wins.
            </p>
            <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
              Today, we continue to grow with the same principles, carrying our values forward as we expand beyond India and work with clients globally.
            </p>
          </div>
          
          <div className="rounded-lg h-48 sm:h-64 overflow-hidden">
            <img 
              src="/lovable-uploads/c8eb6e7a-8190-4e9b-b63b-e7029672302f.png" 
              alt="PackWave Industries - Our Team" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <div className="lg:col-span-2 mt-4 sm:mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-card p-4 sm:p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-lg sm:text-xl font-medium text-accent mb-2">Integrity</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  We believe in honest work, transparency, and keeping our commitments. Trust is at the core of everything we do.
                </p>
              </div>
              
              <div className="bg-card p-4 sm:p-6 rounded-lg shadow-md border border-border">
                <h3 className="text-lg sm:text-xl font-medium text-accent mb-2">Customer & People First</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  We care deeply about our customers and our employees. Building long-term relationships and treating people with respect guides every decision.
                </p>
              </div>
              
              <div className="bg-card p-4 sm:p-6 rounded-lg shadow-md border border-border sm:col-span-2 lg:col-span-1">
                <h3 className="text-lg sm:text-xl font-medium text-accent mb-2">Hard Work & Quality</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
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
