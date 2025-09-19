
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
    "Learn about SymAssist's mission to transform property management with AI automation and 24/7 human oversight. Meet our founder and discover how we're revolutionizing property operations.",
    "About SymAssist - Transforming Property Management with AI"
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
