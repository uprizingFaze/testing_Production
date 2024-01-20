
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Image from "next/image";
import Footer from "@/components/footer";
import LeftPanel from "@/components/left-panel";
import RightPanel from "@/components/right-panel";
import Cards from "@/components/second/Cards";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Cards />
          <div className="container relative z-20 flex flex-col w-full h-full px-6 gap:6 xl:gap-10 xl:flex-row">
            {/* Left Panel */}
            <LeftPanel />
            {/* Right Panel */}
            <RightPanel />
            {/* Footer for Mobile */}
            <div className="flex pb-6 xl:hidden">
              <Footer />
            </div>
          </div>
        <Projects />
      </div>
    </main>
  );
}
