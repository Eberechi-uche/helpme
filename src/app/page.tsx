import HomeHero from "@/components/ui/Hero/HomeHero";
import HomeSectionLayout from "@/components/ui/section/HomeSectionlayout";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeSectionLayout
        heading="Features"
        subHeading="Key highlight of our extention"
      ></HomeSectionLayout>
      <HomeSectionLayout
        heading="How it works"
        subHeading="Key highlight of our extention"
      ></HomeSectionLayout>
    </main>
  );
}
