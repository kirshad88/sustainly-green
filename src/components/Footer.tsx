import { useState } from 'react';
import { Heart, Leaf, Mail, MessageCircle, Twitter, Linkedin, Instagram, Check } from 'lucide-react';

const Footer = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleTypeToggle = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const userTypes = [
    { id: 'businesses', label: 'Businesses', icon: '🏢' },
    { id: 'academics', label: 'Academics', icon: '🎓' },
    { id: 'individuals', label: 'Individuals', icon: '👥' }
  ];
  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "Products", href: "#products" },
        { name: "Learning", href: "#learning" },
        { name: "Community", href: "#community" },
        { name: "Jobs", href: "#jobs" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Books", href: "#books" },
        { name: "Guides", href: "#guides" },
        { name: "Research", href: "#research" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#help" },
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: MessageCircle, href: "#", label: "Discord" }
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-primary to-secondary w-12 h-12 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Sustainly Green</h3>
                <p className="text-sm opacity-70">Coming Soon</p>
              </div>
            </div>
            
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              Building the ultimate platform where sustainability meets community. 
              Join us in creating a greener, more connected world.
            </p>
            
            {/* Early Access CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="font-bold text-lg mb-3">Get Early Access</h4>
              <p className="opacity-80 mb-4">Be among the first to experience our platform.</p>
              
              {/* User Type Selection */}
              <div className="mb-4">
                <p className="text-sm opacity-90 mb-3">I'm interested as:</p>
                <div className="space-y-2">
                  {userTypes.map((type) => (
                    <label 
                      key={type.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <div 
                        className={`w-5 h-5 rounded border-2 border-white/40 flex items-center justify-center transition-all duration-200 ${
                          selectedTypes.includes(type.id) 
                            ? 'bg-primary border-primary' 
                            : 'group-hover:border-white/60'
                        }`}
                        onClick={() => handleTypeToggle(type.id)}
                      >
                        {selectedTypes.includes(type.id) && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="flex items-center gap-2 text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                        <span className="text-lg">{type.icon}</span>
                        {type.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Email Input */}
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button 
                  className="bg-primary hover:bg-primary-light px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                  disabled={selectedTypes.length === 0}
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden sm:inline">Join</span>
                </button>
              </div>
              
              {selectedTypes.length === 0 && (
                <p className="text-xs opacity-60 mt-2">Please select at least one category</p>
              )}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="font-bold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200 flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-white/20 pt-12 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <span className="opacity-80">Follow our journey:</span>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Status */}
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm">Platform in Development</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-black/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm opacity-80">
              <span>© 2024 Sustainly Green. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm opacity-80">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-destructive fill-destructive animate-pulse" />
              <span>for our planet</span>
              <Leaf className="w-4 h-4 text-primary animate-bounce-soft" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;