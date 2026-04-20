import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import HomepageFooter from "@/components/HomepageFooter";
import HomepageViewDashboardCTA from "@/components/HomepageViewDashboardCTA";
import LandingHeader from "@/components/LandingHeader";
import NumbersSection from "@/components/NumbersSection";
import { createFileRoute } from "@tanstack/react-router";

const LandingPage = () => {
  return (
    <div className="relative flex w-full flex-col overflow-x-clip">
      <LandingHeader />
      <HeroSection />
      <FeaturesSection />
      <NumbersSection />
      <HomepageViewDashboardCTA />
      <HomepageFooter />
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: LandingPage,
});
