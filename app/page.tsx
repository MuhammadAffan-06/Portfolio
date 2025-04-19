import Navbar from "@/components/ui/navbar/navbar"
import Introduction from "@/components/ui/introduction/introduction"
import StarryBackground from "@/components/ui/starry-background/stars"

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      <StarryBackground /> {/* z-0, absolute */}
      
      <div className="relative z-10">
        <Navbar />
        <Introduction />
      </div>
    </main>
  )
}
