import Navbar from "@/components/ui/navbar/navbar";
import Introduction from "@/components/ui/introduction/introduction";
import StarryBackground from "@/components/ui/starry-background/stars";
import TechStack from "@/components/ui/techstack/tech-stack";
import Developments from "@/components/ui/developments/developments";
export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      <StarryBackground />
      <div className="relative z-10">
        <Navbar />
        <Introduction />
        <TechStack />
        {/* <Developments /> */}
      </div>
    </main>
  );
}
