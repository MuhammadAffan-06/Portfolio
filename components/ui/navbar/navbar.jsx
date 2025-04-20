import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="bg-black">
      <div className="w-full max-w-screen-xl flex flex-wrap items-center justify-between px-4 py-4 mx-auto">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span style={{ fontFamily: 'Mars' }} className="font-mars self-center text-2xl font-semibold whitespace-nowrap text-white">
            Affan
          </span>
        </a>

        <div className="flex items-center gap-2 md:order-2">
          <Button className="hidden md:flex px-3 py-1.5 text-sm bg-[#5200FF] text-white hover:bg-white">
            Contact Me
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden text-black border-white hover:bg-white hover:text-black"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only text-black">Open main menu</span>
            ☰
          </Button>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-6 md:mt-0 bg-black md:bg-black">
            {['Home', 'About', 'Services', 'Contact'].map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="block px-3 py-1.5 rounded text-white hover:bg-white hover:text-black transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
