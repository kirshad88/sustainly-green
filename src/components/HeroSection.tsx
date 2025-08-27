import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Users, Leaf } from 'lucide-react';


const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [stars, setStars] = useState<Array<{id: number, x: number, y: number, delay: number, size: number}>>([]);

  // Generate random stars on component mount
  useEffect(() => {
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 100; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 60, // Only in upper 60% of screen for sky effect
          delay: Math.random() * 3,
          size: Math.random() * 3 + 1
        });
      }
      setStars(starArray);
    };
    generateStars();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Twinkling Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-primary rounded-full opacity-70"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${2 + star.delay}s ease-in-out infinite alternate`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <Leaf className="absolute top-20 left-20 text-primary w-8 h-8 animate-float" />
        <Sparkles className="absolute top-32 right-32 text-accent-yellow w-6 h-6 animate-bounce-soft" />
        <Users className="absolute bottom-40 left-16 text-secondary w-10 h-10 animate-float" />
      </div>

      <div className="container mx-auto px-6 text-center text-foreground relative z-20">
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
          <Sparkles className="w-5 h-5 text-accent-yellow animate-pulse" />
          <span className="font-semibold text-lg text-primary">Coming Soon!</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="block">Sustainly Green</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-accent-yellow">
            Connecting People, Planet & Progress
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in-up">
          Join our vibrant community where sustainability meets innovation. 
          Discover eco-friendly products, learn with us, and shape a greener future together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
          <button
            className="btn-hero relative overflow-hidden group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="flex items-center gap-3">
              Explore Products
              <ArrowRight className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>

          <button className="btn-warm">
            <span className="flex items-center gap-3">
              <Users className="w-5 h-5" />
              Join Community
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="bg-primary/5 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-3xl font-bold text-accent-yellow mb-2">10K+</div>
            <div className="text-lg font-medium text-foreground">Community Members</div>
          </div>
          <div className="bg-primary/5 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-lg font-medium text-foreground">Eco Products</div>
          </div>
          <div className="bg-primary/5 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
            <div className="text-3xl font-bold text-secondary mb-2">50+</div>
            <div className="text-lg font-medium text-foreground">Partner Companies</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;