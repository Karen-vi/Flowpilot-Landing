"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>

         <div className="mt-12 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Glow background */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-2xl rounded-2xl"></div>

        {/* Floating card */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[340px] md:w-[420px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-400">FlowPilot</p>
            <span className="text-xs text-green-400">● Active</span>
          </div>

          {/* Idea */}
          <div className="mb-5">
            <p className="text-xs text-gray-500">💡 Idea</p>
            <h3 className="text-lg font-medium mt-1">
              Improve onboarding experience
            </h3>
          </div>

          {/* AI Processing */}
          <div className="mb-5">
            <p className="text-xs text-gray-500">🤖 AI processing</p>
            <div className="mt-2 space-y-2">
              <div className="h-2 w-3/4 bg-white/10 rounded"></div>
              <div className="h-2 w-1/2 bg-white/10 rounded"></div>
            </div>
          </div>

          {/* Tasks */}
          <div className="mb-5">
            <p className="text-xs text-gray-500">✅ Tasks generated</p>
            <ul className="mt-2 text-sm text-gray-300 space-y-1">
              <li>• Create welcome email</li>
              <li>• Update onboarding checklist</li>
            </ul>
          </div>

          {/* Decision */}
          <div>
            <p className="text-xs text-gray-500">🎯 Decision</p>
            <h3 className="text-md font-medium mt-1 text-white">
              Launch new onboarding flow
            </h3>
          </div>
        </motion.div>
      </motion.div>

      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 22 21" fill="none" class="logo xxs"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.1807 5C21.1807 5.55228 20.7329 6 20.1807 6H16.7646C16.2124 6 15.7646 6.44772 15.7646 7V8C15.7646 8.55228 16.2124 9 16.7646 9H20.1807C20.7329 9 21.1807 9.44772 21.1807 10V14C21.1807 14.5523 20.7329 15 20.1807 15H11.5908C11.0385 15 10.5908 15.4477 10.5908 16V17C10.5908 17.5523 11.0385 18 11.5908 18H20.1807C20.7329 18 21.1807 18.4477 21.1807 19V20C21.1807 20.5523 20.7329 21 20.1807 21H6.2959C5.74361 21 5.2959 20.5523 5.2959 20V19C5.2959 18.4477 4.84818 18 4.2959 18H1C0.447715 18 0 17.5523 0 17V16C0 15.4477 0.447715 15 1 15H1.64453C2.19682 15 2.64453 14.5523 2.64453 14V13C2.64453 12.4477 2.19682 12 1.64453 12H1C0.447715 12 0 11.5523 0 11V7C0 6.44772 0.447715 6 1 6H6.5625C7.11478 6 7.5625 5.55228 7.5625 5V4C7.5625 3.44772 7.11478 3 6.5625 3H1C0.447715 3 0 2.55228 0 2V1C0 0.447715 0.447715 0 1 0H10.7021C11.2544 0 11.7021 0.447715 11.7021 1V2C11.7021 2.55228 12.1499 3 12.7021 3H20.1807C20.7329 3 21.1807 3.44772 21.1807 4V5ZM7.99902 11C7.99902 11.5523 8.44674 12 8.99902 12H12.1816C12.7339 12 13.1816 11.5523 13.1816 11V10C13.1816 9.44772 12.7339 9 12.1816 9H8.99902C8.44674 9 7.99902 9.44772 7.99902 10V11Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.1807 5C21.1807 5.55228 20.7329 6 20.1807 6H16.7646C16.2124 6 15.7646 6.44772 15.7646 7V8C15.7646 8.55228 16.2124 9 16.7646 9H20.1807C20.7329 9 21.1807 9.44772 21.1807 10V14C21.1807 14.5523 20.7329 15 20.1807 15H11.5908C11.0385 15 10.5908 15.4477 10.5908 16V17C10.5908 17.5523 11.0385 18 11.5908 18H20.1807C20.7329 18 21.1807 18.4477 21.1807 19V20C21.1807 20.5523 20.7329 21 20.1807 21H6.2959C5.74361 21 5.2959 20.5523 5.2959 20V19C5.2959 18.4477 4.84818 18 4.2959 18H1C0.447715 18 0 17.5523 0 17V16C0 15.4477 0.447715 15 1 15H1.64453C2.19682 15 2.64453 14.5523 2.64453 14V13C2.64453 12.4477 2.19682 12 1.64453 12H1C0.447715 12 0 11.5523 0 11V7C0 6.44772 0.447715 6 1 6H6.5625C7.11478 6 7.5625 5.55228 7.5625 5V4C7.5625 3.44772 7.11478 3 6.5625 3H1C0.447715 3 0 2.55228 0 2V1C0 0.447715 0.447715 0 1 0H10.7021C11.2544 0 11.7021 0.447715 11.7021 1V2C11.7021 2.55228 12.1499 3 12.7021 3H20.1807C20.7329 3 21.1807 3.44772 21.1807 4V5ZM7.99902 11C7.99902 11.5523 8.44674 12 8.99902 12H12.1816C12.7339 12 13.1816 11.5523 13.1816 11V10C13.1816 9.44772 12.7339 9 12.1816 9H8.99902C8.44674 9 7.99902 9.44772 7.99902 10V11Z" fill="url(#paint0_linear_79_1465)" fill-opacity="0.2"></path><defs><linearGradient id="paint0_linear_79_1465" x1="10.5903" y1="0" x2="10.5903" y2="21" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="#666666"></stop></linearGradient></defs></svg>
    </div>

         
      </main>
    </div>
  );
}
