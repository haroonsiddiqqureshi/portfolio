export default function Education() {
  return (
    <section className="mx-30 text-text">
      <div className="flex flex-col mt-14 lg:mt-18">
        <div className="flex flex-col justify-center items-center mx-auto w-full">
          <p className="flex justify-center text-4xl font-bold">Education</p>
          <div className="flex flex-col space-y-1">
            <span className="mt-2 bg-primary w-1 h-12 rounded"></span>
            <span className="bg-primary w-1 h-1 rounded"></span>
          </div>
          <div className="mt-1 border-4 border-primary w-100 h-fit rounded-2xl bg-secondary">
            <div className="flex flex-col m-4 opacity-80">
              <div className="flex justify-between">
                <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
                <span className="ml-2 font-semibold">University Project</span>
                </div>
                <span className="text-sm text-gray-500 flex justify-end items-center">2022 - Present</span>
              </div>
              <div className="mt-6 flex flex-col space-y-1">
                <span className="">Khon Kean University</span>
                <span className="">Interdisciplinary Studies</span>
                <span className="">Computer and Information Science</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
