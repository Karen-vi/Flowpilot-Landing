import FloatingIcon from "../components/FloatingIcon";
import FloatingText from "../components/FloatingText";
import CtaBtn from "../components/CtaBtn";

export default  function Hero() {
    return (
        <div className="relative flex flex-col p-6 md:p-10">

            
           
            <div className="relative  z-10 w-full min-h-screen overflow-visible   rounded-[32px] mt-20">
                <FloatingIcon />
                
                <FloatingText
                title="Flow Pilot"
                textStyle="text-3xl md:text-4xl max-w-xs"
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
                className="top-[550px] left-4 md:top-[70%] md:left-[15%]"
                />

                 <div className="absolute top-[680px] left-4 right-4 md:top-[80%] md:left-[15%] md:right-auto flex gap-4">
                    <CtaBtn text="See Demo" className="bg-btn-primary whitespace-nowrap text-white px-4 py-2 rounded-lg cursor-pointer" />
                    <CtaBtn text="See Demo" className="bg-btn-secondary whitespace-nowrap text-white px-4 py-2 rounded-lg cursor-pointer" />
                </div>

            
            </div>

            
           


            
            
        </div>
    )
}