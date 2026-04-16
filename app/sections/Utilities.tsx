import LiveClock from "../components/LiveClock";
import Menu from "../components/Menu";
import NotificationStack from "../components/NotificationStack";

export  default function Utilities() {
  return (
   <div className=" top-0 left-0 w-full z-50">
      
      <div className="flex items-center justify-end px-6 md:px-10 py-4 max-w-6xl mx-auto w-full">

        <NotificationStack />
        
        <div className="md:hidden">
          <LiveClock />
        </div>

      </div>

      <div className="hidden md:block fixed top-4 left-[18%] z-50">
        <LiveClock />
      </div>

    </div>
  )
}