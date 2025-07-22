import { ActionSection, CustomerSection, FeatureSection, HeroSection, SupportSection } from "@/templates/sections";

export function LandingPage() {
  return (
    <article className="flex flex-col gap-5">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerSection />
      <ActionSection />
    </article>
  );
}
