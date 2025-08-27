import { Lightbulb, Users, Leaf, Target, Heart, Globe } from 'lucide-react';

const AboutSection = () => {
  const timeline = [
    {
      year: "2020",
      title: "The Spark",
      description: "Founded with a vision to make sustainability accessible to everyone",
      icon: Lightbulb,
      color: "gradient-warm"
    },
    {
      year: "2021",
      title: "Community Growth",
      description: "Reached 1,000+ active members sharing green initiatives",
      icon: Users,
      color: "gradient-nature"
    },
    {
      year: "2022",
      title: "Product Launch",
      description: "Launched our first eco-friendly product marketplace",
      icon: Leaf,
      color: "gradient-ocean"
    },
    {
      year: "2023",
      title: "Global Impact",
      description: "Expanded to serve communities in 15+ countries worldwide",
      icon: Globe,
      color: "gradient-hero"
    },
    {
      year: "2024",
      title: "The Future",
      description: "Building the ultimate platform for sustainable living",
      icon: Target,
      color: "gradient-warm"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in the power of collective action and shared knowledge"
    },
    {
      icon: Leaf,
      title: "Planet Positive",
      description: "Every decision we make considers environmental impact first"
    },
    {
      icon: Target,
      title: "Action Oriented",
      description: "We turn awareness into meaningful, measurable action"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-6 py-2 mb-6">
            <Heart className="w-5 h-5 text-secondary" />
            <span className="font-semibold text-secondary">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary ml-3">
              Sustainly Green
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building a global community where sustainability isn't just a choice—
            it's a way of life. Join us in creating a future where people, planet, and progress thrive together.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white mb-20">
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-2xl font-light leading-relaxed max-w-4xl mx-auto">
            "To democratize sustainability by connecting people with the knowledge, 
            products, and community they need to live eco-consciously and create 
            lasting positive impact on our planet."
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Journey
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="card-playful bg-white group">
                      <div className="flex items-center gap-4 mb-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                          style={{ background: `var(--${item.color})` }}
                        >
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{item.year}</div>
                          <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-lg">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-2/12 flex justify-center">
                    <div 
                      className="w-6 h-6 rounded-full border-4 border-white shadow-lg z-10"
                      style={{ background: `var(--${item.color})` }}
                    ></div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-nature-light rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Meet Our Team
          </h3>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're a diverse group of environmental enthusiasts, tech innovators, 
            and community builders working together to make sustainability mainstream.
          </p>
          
          {/* Coming Soon for Team */}
          <div className="bg-white rounded-3xl p-12 shadow-soft">
            <div className="text-8xl mb-6">🌱</div>
            <h4 className="text-2xl font-bold text-foreground mb-4">
              Team Profiles Coming Soon!
            </h4>
            <p className="text-muted-foreground text-lg mb-8">
              We're excited to introduce you to the amazing people behind Sustainly Green.
            </p>
            <button className="btn-nature">
              <span className="flex items-center gap-3">
                <Users className="w-5 h-5" />
                Get Notified
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;