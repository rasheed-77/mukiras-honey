import About from "@/components/honey/about";
import Achievements from "@/components/honey/achievements";
import BlogPreview from "@/components/honey/blog-preview";
import Contact from "@/components/honey/contact";
import Features from "@/components/honey/features";
import Footer from "@/components/honey/footer";
import Gallery from "@/components/honey/gallery";
import Hero from "@/components/honey/hero";
import Journey from "@/components/honey/journey";
import Navbar from "@/components/honey/navbar";
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
        <VisionMission />
        <Achievements />
        <Journey />
        <WhyChooseUs />
        <Gallery />
        <TestimonialsSlider />
        <BlogPreview />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
