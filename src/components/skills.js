import Marquee from "react-fast-marquee";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind",
  "NextJS",
  "ReactJS",
  "Python",
  "Laravel",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section className="flex justify-center w-full h-20 bg-secondary z-20">
      <Marquee className="mx-30" speed={100} aria-label="Skills Marquee">
        <ul
          className="flex space-x-12 lg:space-x-24 2xl:space-x-36 text-text text-base lg:text-xl 2xl:text-2xl font-bold"
          role="list"
        >
          {skills.map((skill, idx) => (
            <li
              key={skill}
              className={`cursor-default transition-all duration-300 opacity-30 hover:opacity-100 hover:text-primary hover:scale-120 ${
                idx === skills.length - 1 ? "mr-12 lg:mr-24 2xl:mr-36" : ""
              }`}
              role="listitem"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Marquee>
    </section>
  );
}
