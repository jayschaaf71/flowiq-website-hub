
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import FounderSection from "@/components/about/FounderSection";
// import AdvisoryBoard from "@/components/about/AdvisoryBoard";
import AboutCTA from "@/components/about/AboutCTA";
import { useMetaDescription } from "@/hooks/useMetaDescription";
import { StructuredData } from "@/components/StructuredData";

const About = () => {
  useMetaDescription(
    "Learn about FlowIQ's mission to transform professional practices with AI automation. Meet our founder and discover how we're revolutionizing healthcare, dental, legal, and professional service operations.",
    "About FlowIQ - Transforming Professional Practices with AI"
  );

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="about" />
      <Navigation />
      <AboutHero />
      <FounderSection />
      {/* <AdvisoryBoard /> */}
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default About;
