import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Front-End Development",

    description:
      "I create responsive and interactive interfaces using modern technologies, ensuring a smooth, user-friendly experience across all devices.",
  },
  {
    id: 2,
    title: "Back-End Development",
    description:
      "I develop robust server-side logic and APIs, managing application workflows, authentication, and data processing efficiently.",
  },
  {
    id: 3,
    title: "Database Management", 
    description:
      "I design and maintain scalable databases, ensuring data integrity, optimized queries, and seamless interaction with both frontend and backend systems.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in designing user experiences, crafting engaging
            interfaces, and developing full-stack web applications that are
            functional, scalable, and visually appealing.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines creativity with technical expertise, delivering
            solutions that are both intuitive for users and robust on the
            backend.
          </p>
        </div>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hamdyabuelkhair@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
