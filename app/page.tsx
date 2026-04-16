

import Feature from "./sections/Feature";
import Hero from "./sections/Hero";
import Review from "./sections/Review";
import SignupSection from "./sections/Signup";
import Utilities from "./sections/Utilities";


export default function Home() {
  return (
    <div >
      <main >
        <Utilities />
        <Hero />
        <Feature/>
        <Review/>
        <SignupSection/>
      </main>
    </div>
  );
}
