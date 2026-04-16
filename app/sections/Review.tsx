import ReviewCard from "../components/ReviewCard";
import TextDescription from "../components/TextDescription";

export default function Review() {
  return (
    <>
    <div className="flex md:mt-16 flex-col md:flex-row items-center justify-center gap-12 md:gap-20"> 

        <ReviewCard
            quote="Before this, our workflows were scattered across multiple tools and barely documented. Now everything is centralized, visible, and actually understandable by the entire team."
            name="Slava"
            title="CEO at Oxi Trade"
            avatarId={32} 
        />

        
        <ReviewCard
        quote="What impressed us most is how quickly an idea turns into a functional system. The platform generated the full workflow—including integrations"
        name="Karen"
        title="Moxie Product Manager"
        avatarId={35} 
      />

        <ReviewCard
        quote="We replaced three automation tools and cut our operational costs by 42% in the first month. Everything is now centralized, faster, and easier to maintain."
        name="Damian"
        title="CTO, Fintech Startup"
        avatarId={8} 
      />

    </div>

    </>
    )}