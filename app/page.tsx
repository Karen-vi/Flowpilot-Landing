

import Feature from "./sections/Feature";
import Hero from "./sections/Hero";
import SignupSection from "./sections/SignupSection";


export default function Home() {
  return (
    <div >
      <main >
        <Hero />
        <Feature/>
        <SignupSection/>
      </main>
    </div>
  );
}
