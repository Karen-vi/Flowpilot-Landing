

import Feature from "./sections/Feature";
import Hero from "./sections/Hero";
import Review from "./sections/Review";
import SignupSection from "./sections/Signup";


export default function Home() {
  return (
    <div >
      <main >
        <Hero />
        <Feature/>
        <Review/>
        <SignupSection/>
      </main>
    </div>
  );
}
