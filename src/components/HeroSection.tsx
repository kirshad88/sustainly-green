import { useState } from 'react';
import { ArrowRight, Sparkles, Users, Leaf } from 'lucide-react';
import heroImage from '@/assets/hero-eco-community.jpg';

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Leaf className="absolute top-20 left-20 text-primary-glow w-8 h-8 animate-float" />
        <Sparkles className="absolute top-32 right-32 text-accent-yellow w-6 h-6 animate-bounce-soft" />
        <Users className="absolute bottom-40 left-16 text-secondary-light w-10 h-10 animate-float" />
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 animate-fade-in-up">
          <Sparkles className="w-5 h-5 text-accent-yellow animate-pulse" />
          <span className="font-semibold text-lg">Coming Soon!</span>
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
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-accent-yellow mb-2">10K+</div>
            <div className="text-lg font-medium">Community Members</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-primary-glow mb-2">500+</div>
            <div className="text-lg font-medium">Eco Products</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-secondary-light mb-2">50+</div>
            <div className="text-lg font-medium">Partner Companies</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;