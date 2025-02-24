import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { ActionSection } from "@/components/ActionSection"
import { TrustedBySection } from "@/components/TrustedBySection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ActionSection />
        <TrustedBySection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;