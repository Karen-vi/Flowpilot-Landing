import LiveClock from "../components/LiveClock";
import Menu from "../components/Menu";

export  default function Header() {
  return (
   <div className="fixed top-0 left-0 w-full z-50">
      
      <div className="flex items-center justify-between px-6 md:px-10 py-4 max-w-6xl mx-auto w-full">
        
        <Menu />

        {/* Mobile */}
        <div className="md:hidden">
          <LiveClock />
        </div>

      </div>

      {/* Desktop clock aligned with hero */}
      <div className="hidden md:block fixed top-4 left-[18%] z-50">
        <LiveClock />
      </div>

    </div>
  )
}