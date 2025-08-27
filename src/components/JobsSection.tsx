import { Briefcase, MapPin, Clock, DollarSign, Star, Building } from 'lucide-react';

const JobsSection = () => {
  const jobCategories = [
    {
      category: "Renewable Energy",
      color: "bg-accent-yellow",
      jobs: 47,
      icon: "⚡"
    },
    {
      category: "Sustainable Design",
      color: "bg-primary",
      jobs: 23,
      icon: "🎨"
    },
    {
      category: "Environmental Science",
      color: "bg-secondary",
      jobs: 31,
      icon: "🔬"
    },
    {
      category: "Green Finance",
      color: "bg-nature-green",
      jobs: 18,
      icon: "💰"
    }
  ];

  const featuredJobs = [
    {
      title: "Senior Sustainability Consultant",
      company: "EcoTech Solutions",
      location: "Remote • San Francisco, CA",
      type: "Full-time",
      salary: "$85K - $120K",
      category: "Consulting",
      featured: true,
      urgent: false
    },
    {
      title: "Renewable Energy Engineer",
      company: "SolarWind Corp",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$95K - $140K",
      category: "Engineering",
      featured: true,
      urgent: true
    },
    {
      title: "Environmental Data Analyst",
      company: "GreenData Inc",
      location: "Remote • Portland, OR",
      type: "Contract",
      salary: "$70K - $95K",
      category: "Analytics",
      featured: false,
      urgent: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-nature-green/10 rounded-full px-6 py-2 mb-6">
            <Briefcase className="w-5 h-5 text-nature-green" />
            <span className="font-semibold text-nature-green">Green Careers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Find Your Dream
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-nature-green to-accent">
              Sustainability Job
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover meaningful career opportunities with companies 
            committed to environmental and social impact.
          </p>
        </div>

        {/* Job Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {jobCategories.map((category, index) => (
            <div key={index} className="card-playful bg-white text-center group cursor-pointer">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="font-bold text-foreground text-lg mb-2">
                {category.category}
              </h3>
              <div className={`${category.color} text-white px-3 py-1 rounded-full text-sm font-bold inline-block mb-3`}>
                {category.jobs} Open Positions
              </div>
              <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`h-full ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Jobs */}
        <div className="space-y-6 mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Featured Opportunities
          </h3>
          
          {featuredJobs.map((job, index) => (
            <div key={index} className="card-playful bg-white group relative overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Job Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    {job.featured && (
                      <div className="bg-accent text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-white" />
                        Featured
                      </div>
                    )}
                    {job.urgent && (
                      <div className="bg-destructive text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                        Urgent
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Building className="w-4 h-4" />
                    <span className="font-medium">{job.company}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span className="font-semibold">{job.salary}</span>
                    </div>
                  </div>
                </div>

                {/* Category Badge & Apply Button */}
                <div className="flex flex-col items-end gap-4">
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                    {job.category}
                  </div>
                  <button className="btn-nature opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
            </div>
          ))}
        </div>

        {/* Job Stats */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-center text-white mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-xl font-medium opacity-90">Active Jobs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-xl font-medium opacity-90">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-xl font-medium opacity-90">Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="btn-hero">
            <span className="flex items-center gap-3">
              <Briefcase className="w-5 h-5" />
              View All Green Jobs
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;