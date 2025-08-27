import { ShoppingBag, Recycle, Zap, Droplets, Wind, Leaf } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      icon: ShoppingBag,
      title: "Eco Marketplace",
      description: "Discover sustainable products from verified green brands",
      color: "gradient-nature",
      delay: "0ms"
    },
    {
      icon: Recycle,
      title: "Zero Waste Solutions",
      description: "Complete guides to reduce, reuse, and recycle effectively",
      color: "gradient-ocean",
      delay: "100ms"
    },
    {
      icon: Zap,
      title: "Clean Energy Tools",
      description: "Solar panels, wind turbines, and energy-efficient devices",
      color: "gradient-warm",
      delay: "200ms"
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Smart systems to monitor and reduce water consumption",
      color: "gradient-hero",
      delay: "300ms"
    },
    {
      icon: Wind,
      title: "Air Purification",
      description: "Natural and tech solutions for cleaner indoor air",
      color: "gradient-nature",
      delay: "400ms"
    },
    {
      icon: Leaf,
      title: "Green Living Kits",
      description: "Everything you need to start your sustainable journey",
      color: "gradient-warm",
      delay: "500ms"
    }
  ];

  return (
    <section className="py-20 bg-nature-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">Products & Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sustainable Solutions for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Every Lifestyle
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From everyday essentials to cutting-edge green technology, 
            find everything you need to live sustainably.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="card-gradient relative group cursor-pointer"
              style={{ 
                background: `var(--${product.color})`,
                animationDelay: product.delay
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 text-6xl">
                  <product.icon className="w-16 h-16" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {product.title}
                </h3>
                
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="flex items-center text-white/80 font-medium group-hover:text-white transition-colors">
                  <span>Coming Soon</span>
                  <div className="ml-2 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="btn-hero">
            <span className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" />
              Notify Me When Available
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;