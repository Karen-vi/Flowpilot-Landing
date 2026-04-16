import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-20 bg-black/40 backdrop-blur-xl">
      
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row justify-between gap-10">

        <div className="flex flex-col gap-4 max-w-sm">
          
          <div className="flex items-center gap-3">
            <Image
              src="/iconflow.png"
              alt="FlowPilot"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-white text-lg  tracking-tight">
              FlowPilot
            </span>
          </div>

          <p className="text-sm text-white/60 leading-relaxed">
            Bring your entire team’s workflow into a single, unified space. 
            Automate, organize, and scale with clarity.
          </p>

        </div>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">

          <div className="flex flex-col gap-3">
            <span className="text-sm text-white font-arial">
              Product
            </span>

            <a className="text-sm text-white/60 hover:text-white transition">
              Features
            </a>
            <a className="text-sm text-white/60 hover:text-white transition">
              Docs
            </a>
            <a className="text-sm text-white/60 hover:text-white transition">
              Demo
            </a>
          </div>

          
          <div className="flex flex-col gap-3">
            <span className="text-sm text-white ">
              Social
            </span>

            <a className="text-sm text-white/60 hover:text-white transition">
              Twitter
            </a>
            <a className="text-sm text-white/60 hover:text-white transition">
              Instagram
            </a>
            <a className="text-sm text-white/60 hover:text-white transition">
              GitHub
            </a>
          </div>

        </div>

      </div>

      
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <span className="text-xs text-white/40">
            © {new Date().getFullYear()} FlowPilot. All rights reserved.
          </span>

          <div className="flex gap-6 text-xs text-white/40">
            <span className="hover:text-white transition cursor-pointer">
              Privacy
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Terms
            </span>
          </div>

        </div>
      </div>

    </footer>
  );
}