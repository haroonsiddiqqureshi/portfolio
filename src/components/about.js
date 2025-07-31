export default function About() {
  return (
    <section className="mx-30 text-text">
      <div className="flex flex-col mt-14 lg:mt-18">
        <div className="flex flex-col lg:flex-row lg:gap-20 justify-between mx-auto lg:mx-0">
          {/* left panel */}
          <div className="flex flex-row lg:flex-col flex-none space-x-2 lg:space-x-0 lg:space-y-2 mx-auto lg:mx-0">
            {/* webdev */}
            <div className="flex flex-col lg:flex-row items-center justify-start max-w-30 lg:max-w-none">
              <span className="bg-primary w-full lg:w-1 h-1 lg:h-16 rounded mb-5 lg:mb-0 lg:mr-10"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>
              <span className="border-t-2 lg:border-t-0 lg:border-l-2 border-secondary lg:ml-3 lg:pl-3 text-center w-full mt-2 lg:mt-0 pt-2 lg:pt-0">
                Website Development
              </span>
            </div>
            {/* dot */}
            <span className="bg-primary w-1 h-1 rounded"></span>
            {/* mobiledev */}
            <div className="flex flex-col lg:flex-row items-center justify-start max-w-30 lg:max-w-none">
              <span className="bg-primary w-full lg:w-1 h-1 lg:h-16 rounded mb-5 lg:mb-0 lg:mr-10"></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              <span className="border-t-2 lg:border-t-0 lg:border-l-2 border-secondary lg:ml-3 lg:pl-3 text-center w-full mt-2 lg:mt-0 pt-2 lg:pt-0">
                Mobile Development
              </span>
            </div>
          </div>
          {/* right panel */}
          <div className="flex flex-col items-center lg:items-start mt-10 lg:mt-0 lg:max-w-200">
            <h2 className="text-4xl font-bold border-b-2 border-secondary">
              About me
            </h2>
            <p className="mt-2 flex text-justify lg:text-justify">
              I am a Computer Science student from Khon Kaen University,
              specializing in Frontend Development with strong skills in HTML,
              CSS, and JavaScript. I can design beautiful and user-friendly
              interfaces, and I have experience developing with Tailwind CSS. I
              possess excellent teamwork skills and am committed to continuously
              learning and adapting to new technologies. I am ready to apply my
              knowledge and skills to create innovations and grow within this
              field alongside your company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
