import ReviewCard from "../components/ReviewCard";
import TextDescription from "../components/TextDescription";

export default function Review() {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20"> 

        <ReviewCard
            quote="Outflame turned our branding into a powerful growth tool. Their framework gave us clarity, identity, and confidence to scale across 14 countries."
            name="Slava"
            title="CEO at Oxi Trade"
            avatarId={32} 
        />

        {/* <TextDescription title="The Compound Effect of Unified Intelligence" styles="text-center break-words "></TextDescription> */}
        
        <ReviewCard
        quote="Outflame turned our branding into a powerful growth tool. Their framework gave us clarity, identity, and confidence to scale across 14 countries."
        name="Karen"
        title="CEO at Oxi Trade"
        avatarId={47} 
      />

        <ReviewCard
        quote="Outflame turned our branding into a powerful growth tool. Their framework gave us clarity, identity, and confidence to scale across 14 countries."
        name="Damian"
        title="CEO at Oxi Trade"
        avatarId={8} 
      />

    </div>

    </>
    )}