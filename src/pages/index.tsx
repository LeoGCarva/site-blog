import { ActionSection } from "@/components/ActionSection";
import { CustomerSection } from "@/components/CustomerSection";
import { FeatureSection } from "@/components/FeatureSection";
import { HeroSection } from "@/components/HeroSection";
import { SupportSection } from "@/components/SupportSection";

export default function Home() {
  return (
    <>
      <article className="flex flex-col gap-5">
        <HeroSection />
        <FeatureSection />
        <SupportSection />
        <CustomerSection />
        <ActionSection />
      </article>
    </>
  );
}
