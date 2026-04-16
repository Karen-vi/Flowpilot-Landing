import FloatingIcon from "../components/FloatingIcon";
import FloatingText from "../components/FloatingText";
import CtaBtn from "../components/CtaBtn";
import Menu from "../components/Menu";
import MacWindowMockup from "../components/MacWindowMockup";
import TextDescription from "../components/TextDescription";

export default  function Hero() {
    return (
        <div className="flex flex-col p-6 md:p-10">

            
            <div className="relative  z-10 w-full min-h-screen overflow-visible   rounded-[32px] mt-20">
                <Menu/>
                <FloatingIcon />
                
                <FloatingText
                title="Flow Pilot"
                textStyle="text-3xl md:text-4xl max-w-xs text-title"
                description="Bring your entire team's workflow into a single, unified space."
                className="top-4 left-4 md:top-[10%] md:left-[15%]"
                />

               
                <FloatingText
                title="Embedded knowledge"
                textStyle="text-2xl max-w-xs"
                description="Capture and preserve your team's decisions."
                className="top-40 right-4 md:top-[45%] md:right-[10%]"
                />

                
                <FloatingText
                title="Complete Agentic control"
                textStyle="text-2xl max-w-xs"
                description="Harness the power of AI without losing human oversight."
                className="top-[65%] left-4 md:top-[70%] md:left-[15%]"
                />

                 <div className="absolute top-[82%] left-4 right-4 md:top-[85%] md:left-[15%] md:right-auto flex gap-4">
                    <CtaBtn text="See Demo" className="bg-btn-primary whitespace-nowrap text-white px-4 py-2 rounded-lg cursor-pointer" />
                    <CtaBtn text="How it Works" className="bg-btn-secondary whitespace-nowrap text-white px-4 py-2 rounded-lg cursor-pointer" />
                </div>

            
            </div>

            
           <div className="flex flex-col md:flex-row items-center gap-5 md:gap-16 w-full mt-8 md:mt-0">
            <div className="w-full md:w-1/2   flex justify-center">
              <TextDescription  styles="w-full md:w-1/2 flex-col  gap-6 px-4 md:px-0" title="All in one app" description="FlowPilot brings your entire teams workflow into a single, unified platform. Stop jumping between tools and losing context. Capture decisions, preserve knowledge, and automate repetitive tasks—all in one place. Built for teams that move fast, think deeply, and need to stay aligned. FlowPilot turns your scattered work into organized progress." />
            </div>
            <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
              <MacWindowMockup></MacWindowMockup>
            </div>
           </div>
            
            
        </div>
    )
}