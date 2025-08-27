import { Users, MessageCircle, Heart, MapPin, Briefcase, Calendar } from 'lucide-react';

const CommunitySection = () => {
  const communityMembers = [
    {
      name: "Sarah Chen",
      role: "Sustainability Consultant",
      location: "San Francisco, CA",
      avatar: "bg-gradient-to-br from-primary to-secondary",
      specialty: "Zero Waste",
      posts: 127,
      followers: "2.3K"
    },
    {
      name: "Marcus Johnson",
      role: "Environmental Engineer",
      location: "Austin, TX",
      avatar: "bg-gradient-to-br from-accent to-accent-yellow",
      specialty: "Renewable Energy",
      posts: 89,
      followers: "1.8K"
    },
    {
      name: "Luna Rodriguez",
      role: "Green Architect",
      location: "Portland, OR",
      avatar: "bg-gradient-to-br from-secondary to-nature-green",
      specialty: "Eco Buildings",
      posts: 156,
      followers: "3.1K"
    },
    {
      name: "David Kim",
      role: "Sustainable Farmer",
      location: "Denver, CO",
      avatar: "bg-gradient-to-br from-nature-green to-primary",
      specialty: "Permaculture",
      posts: 203,
      followers: "2.7K"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-nature-light to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
            <Users className="w-5 h-5 text-accent" />
            <span className="font-semibold text-accent">Professional Community</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Connect with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Green Professionals
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Network with sustainability experts, share knowledge, and 
            collaborate on projects that make a real difference.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-soft mb-4">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary">10,247</div>
            </div>
            <span className="text-muted-foreground font-medium">Active Members</span>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-soft mb-4">
              <MessageCircle className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-3xl font-bold text-secondary">1,856</div>
            </div>
            <span className="text-muted-foreground font-medium">Daily Discussions</span>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-soft mb-4">
              <Briefcase className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-3xl font-bold text-accent">342</div>
            </div>
            <span className="text-muted-foreground font-medium">Green Jobs</span>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-soft mb-4">
              <Calendar className="w-8 h-8 text-nature-green mx-auto mb-2" />
              <div className="text-3xl font-bold text-nature-green">28</div>
            </div>
            <span className="text-muted-foreground font-medium">Events/Month</span>
          </div>
        </div>

        {/* Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityMembers.map((member, index) => (
            <div key={index} className="card-playful bg-white group relative overflow-hidden">
              {/* Avatar */}
              <div className={`w-20 h-20 ${member.avatar} rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-2">
                  {member.role}
                </p>
                <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{member.location}</span>
                </div>

                {/* Specialty Badge */}
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {member.specialty}
                </div>

                {/* Stats */}
                <div className="flex justify-between text-sm">
                  <div className="text-center">
                    <div className="font-bold text-foreground">{member.posts}</div>
                    <div className="text-muted-foreground">Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-foreground">{member.followers}</div>
                    <div className="text-muted-foreground">Followers</div>
                  </div>
                </div>
              </div>

              {/* Hover Actions */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex gap-2">
                  <button className="flex-1 bg-white/20 text-white py-2 rounded-lg font-medium hover:bg-white/30 transition-colors">
                    Connect
                  </button>
                  <button className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="btn-warm">
            <span className="flex items-center gap-3">
              <Users className="w-5 h-5" />
              Join Professional Network
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;