import { BookOpen, Calendar, Clock, ArrowRight, Star, Zap } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "10 Simple Ways to Reduce Your Carbon Footprint Today",
      excerpt: "Practical tips that anyone can implement immediately to start making a positive environmental impact.",
      category: "Lifestyle",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      isNew: true,
      isFeatured: true,
      gradient: "gradient-nature"
    },
    {
      title: "The Future of Renewable Energy: Solar Innovations",
      excerpt: "Exploring breakthrough technologies that are revolutionizing solar power efficiency and accessibility.",
      category: "Technology",
      readTime: "8 min read",
      date: "Dec 12, 2024",
      isNew: true,
      isFeatured: false,
      gradient: "gradient-warm"
    },
    {
      title: "Building Sustainable Communities: A Global Perspective",
      excerpt: "How cities worldwide are implementing green initiatives to create more livable, sustainable urban spaces.",
      category: "Community",
      readTime: "12 min read",
      date: "Dec 10, 2024",
      isNew: false,
      isFeatured: true,
      gradient: "gradient-ocean"
    },
    {
      title: "Circular Economy: Transforming Waste into Resources",
      excerpt: "Understanding how circular business models are reshaping industries and reducing environmental impact.",
      category: "Business",
      readTime: "10 min read",
      date: "Dec 8, 2024",
      isNew: false,
      isFeatured: false,
      gradient: "gradient-hero"
    }
  ];

  const books = [
    {
      title: "The Green Revolution Handbook",
      author: "Dr. Sarah Martinez",
      description: "Complete guide to sustainable living in the modern world",
      rating: 4.8,
      reviews: 1247,
      price: "$24.99",
      isNewRelease: true
    },
    {
      title: "Climate Action Now",
      author: "Marcus Thompson",
      description: "Urgent strategies for environmental recovery and prevention",
      rating: 4.9,
      reviews: 892,
      price: "$19.99",
      isNewRelease: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-nature-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">Knowledge Hub</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest Insights &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Expert Knowledge
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest research, trends, and practical 
            advice from sustainability experts worldwide.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className={`card-gradient relative group cursor-pointer ${
                post.isFeatured ? 'lg:col-span-1' : ''
              }`}
              style={{ background: `var(--${post.gradient})` }}
            >
              {/* Badges */}
              <div className="absolute top-4 right-4 flex gap-2">
                {post.isNew && (
                  <div className="bg-accent text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 animate-pulse">
                    <Zap className="w-3 h-3" />
                    New!
                  </div>
                )}
                {post.isFeatured && (
                  <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Category */}
                <div className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  {post.category}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-white/80 text-sm mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Books Section */}
        <div className="bg-white rounded-3xl p-8 shadow-soft">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Recommended Reading
            </h3>
            <p className="text-muted-foreground text-lg">
              Curated books from leading sustainability experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {books.map((book, index) => (
              <div key={index} className="flex gap-6 group">
                {/* Book Cover Placeholder */}
                <div className="w-24 h-32 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-2xl relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <BookOpen className="w-8 h-8" />
                  {book.isNewRelease && (
                    <div className="absolute -top-2 -right-2 bg-accent text-white text-xs px-2 py-1 rounded-full font-bold">
                      New
                    </div>
                  )}
                </div>

                {/* Book Info */}
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {book.title}
                  </h4>
                  <p className="text-muted-foreground font-medium mb-2">
                    by {book.author}
                  </p>
                  <p className="text-foreground mb-4">
                    {book.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent-yellow text-accent-yellow" />
                        <span className="font-bold">{book.rating}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">
                        ({book.reviews} reviews)
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {book.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-hero mr-4">
            <span className="flex items-center gap-3">
              <BookOpen className="w-5 h-5" />
              Browse All Articles
            </span>
          </button>
          <button className="btn-warm">
            <span className="flex items-center gap-3">
              <BookOpen className="w-5 h-5" />
              Shop Books
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;