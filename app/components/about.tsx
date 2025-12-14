export default function About() {
  return (
    <section className=" flex flex-col items-center text-white py-20 px-6">
      
      {/* MAIN 2-COLUMN CONTENT */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT column */}
        <div className="flex flex-col justify-start">
          <h1 className="text-4xl font-bold mt-4">About Me</h1>
          <div className="w-16 h-[3px] bg-white mt-3"></div>
        </div>

        {/* RIGHT column */}
        <div className="max-w-md text-left space-y-6">
          <h3 className="text-xl font-medium leading-relaxed">
            I'm a Web3 Fullstack Developer with a passion for building
            decentralized applications that are as beautiful as they are
            functional.
          </h3>

          <p className="leading-relaxed text-gray-300">
            With over 5 years of experience in development and 3 years
            dedicated to Web3, I bridge the gap between complex blockchain logic
            and intuitive user interfaces. My approach combines pixel-perfect
            design implementation with robust smart contract integration.
          </p>

          <p className="leading-relaxed text-gray-300">
            What sets my work apart is a deep understanding of user experience
            in the often-confusing world of crypto. I strive to make dApps
            accessible, transparent, and engaging.
          </p>
        </div>
      </div>

      {/* FULL SCREEN LINE */}
      <hr className="w-screen border-t border-gray-500/50 mt-16" />


   </section>
  );
}
