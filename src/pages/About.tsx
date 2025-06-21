
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import FounderSection from "@/components/about/FounderSection";
import AdvisoryBoard from "@/components/about/AdvisoryBoard";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AboutHero />
      <FounderSection />
      <AdvisoryBoard />
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default About;
