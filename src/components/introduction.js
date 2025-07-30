export default function Introduction() {
  return (
    <section className="mx-30 text-text">
      <div className="flex flex-col xl:flex-row gap-6 justify-between items-center mx-10 mt-14">
        {/* introduction */}
        <div className="flex flex-col w-2/4 text-4xl min-w-118">
          {/* hello */}
          <div className="flex text-4xl justify-center xl:justify-start">
            <h1 className="font-bold">Hello</h1>
            <h1 className="text-primary ml-1 font-black">.</h1>
          </div>
          {/* name */}
          <div className="flex flex-col-reverse xl:flex-row mt-4 xl:mt-6">
            <span className="mx-auto xl:absolute xl:left-0 xl:top-75 mt-1 xl:mt-0 bg-primary w-24 xl:w-46 h-1 rounded"></span>
            <span className="xl:ml-10 flex justify-center">I`m Haroon</span>
          </div>
          {/* job decription */}
          <div className="mt-4 xl:mt-6 font-bold text-5xl">
            <h2>Software Developer</h2>
          </div>
          {/* button */}
          <div className="flex mt-8 xl:mt-16 space-x-8 justify-center xl:justify-start">
            {/* github */}
            <div className="border-3 border-primary w-fit text-2xl font-bold px-6 py-2 text-primary hover:bg-primary hover:text-text transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded">
              <a
                href="https://github.com/haroonsiddiqqureshi?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
            {/* resume */}
            <div className="border-3 border-primary w-fit text-2xl font-bold px-6 py-2 text-primary hover:bg-primary hover:text-text transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded">
              <a
                href="https://drive.google.com/file/d/1uPclOdqerr8DBhlV2Fi8bX4_vHEx4LEa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="static mt-10 xl:mt-0">
          <div className="relative ml-10 w-126 h-126">
            {/* decoration */}
            <span className="decoration left">{"<"}</span>
            <span className="decoration right">{">"}</span>
            {/* background light */}
            <div className="absolute animate-pulse inset-0 rounded-full bg-primary blur-3xl opacity-25 top-10 bottom-10 left-10 right-10 z-0"></div>
            {/* border */}
            <div className="absolute inset-0 rounded-full border-24 border-primary top-10 bottom-10 left-10 right-10 z-5"></div>
            {/* black light */}
            <div className="absolute inset-0 rounded-full bg-black blur-2xl opacity-35 top-65 left-12 w-102 h-64 z-10"></div>
            {/* <img src="images/myself.png" className="absolute inset-0 object-contain w-126 h-126 z-15" /> */}
            <img
              src="images/myself-gen.png"
              className="absolute inset-0 object-contain w-126 h-126 z-15"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
