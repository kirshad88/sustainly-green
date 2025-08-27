import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import LearningSection from '@/components/LearningSection';
import CommunitySection from '@/components/CommunitySection';
import JobsSection from '@/components/JobsSection';
import BlogSection from '@/components/BlogSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <LearningSection />
      <CommunitySection />
      <JobsSection />
      <BlogSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
