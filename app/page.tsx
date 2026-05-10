import About from "@/components/honey/about";
import Achievements from "@/components/honey/achievements";
import BlogPreview from "@/components/honey/blog-preview";
import Contact from "@/components/honey/contact";
import Features from "@/components/honey/features";
import Footer from "@/components/honey/footer";
import Hero from "@/components/honey/hero";
import Journey from "@/components/honey/journey";
import Navbar from "@/components/honey/navbar";
import NaturalMixesSection from "@/components/honey/natural-mixes-section";
import NutsSection from "@/components/honey/nuts-section";
import ProductsSection from "@/components/honey/products-section";
import TestimonialsSlider from "@/components/honey/testimonials-slider";
import VisionMission from "@/components/honey/vision-mission";
import WhyChooseUs from "@/components/honey/why-choose-us";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#F6E7C8]">
      <Navbar />
      <div className="home-honey w-full">
        <Hero />
        <Features />
        <About />
        <ProductsSection />
        <NutsSection />
        <NaturalMixesSection />
        <VisionMission />
        <Achievements />
        <Journey />
        <WhyChooseUs />
        <TestimonialsSlider />
        <BlogPreview />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
