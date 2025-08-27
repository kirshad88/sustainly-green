import { BookOpen, Award, Users, Play, Trophy, Star } from 'lucide-react';

const LearningSection = () => {
  const learningCategories = [
    {
      icon: BookOpen,
      title: "Sustainability 101",
      description: "Learn the basics of eco-friendly living",
      badge: "Beginner",
      badgeColor: "bg-accent-yellow",
      students: "2.5K",
      rating: 4.9
    },
    {
      icon: Award,
      title: "Zero Waste Mastery",
      description: "Advanced strategies for waste reduction",
      badge: "Advanced",
      badgeColor: "bg-primary",
      students: "1.8K",
      rating: 4.8
    },
    {
      icon: Users,
      title: "Community Leadership",
      description: "Build and lead green initiatives",
      badge: "Expert",
      badgeColor: "bg-secondary",
      students: "950",
      rating: 5.0
    }
  ];

  const achievements = [
    { icon: Trophy, label: "Eco Warrior", color: "text-accent-yellow" },
    { icon: Star, label: "Green Leader", color: "text-primary" },
    { icon: Award, label: "Planet Protector", color: "text-secondary" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-6 py-2 mb-6">
            <BookOpen className="w-5 h-5 text-secondary" />
            <span className="font-semibold text-secondary">Learning Hub</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Learn, Grow, and
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Make Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of learners on their sustainability journey with 
            interactive courses, expert guidance, and community support.
          </p>
        </div>

        {/* Learning Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {learningCategories.map((category, index) => (
            <div key={index} className="card-playful bg-white group relative overflow-hidden">
              {/* Badge */}
              <div className={`absolute top-4 right-4 ${category.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                {category.badge}
              </div>

              {/* Icon */}
              <div className="bg-gradient-to-br from-muted to-nature-light w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <category.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {category.title}
              </h3>
              
              <p className="text-muted-foreground text-lg mb-6">
                {category.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="font-medium">{category.students} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-accent-yellow text-accent-yellow" />
                  <span className="font-bold">{category.rating}</span>
                </div>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-8 h-8 text-primary fill-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Badges Preview */}
        <div className="bg-white rounded-3xl p-8 shadow-soft">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Earn Achievement Badges
            </h3>
            <p className="text-muted-foreground">
              Complete courses and challenges to unlock special recognition
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className="bg-gradient-to-br from-muted to-nature-light w-20 h-20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <achievement.icon className={`w-10 h-10 ${achievement.color}`} />
                </div>
                <span className="font-semibold text-foreground text-center">
                  {achievement.label}
                </span>
                <div className="w-2 h-2 bg-primary rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-nature">
            <span className="flex items-center gap-3">
              <BookOpen className="w-5 h-5" />
              Start Learning Journey
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;