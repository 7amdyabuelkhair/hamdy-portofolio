import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";


const projectData = [
  {
    id: 1,
    image: card1,
    category: "Front-End Development",
    title: "School Website",
    description:
      "Designed and developed a fully responsive school website that centralizes resources, enhances communication, and provides an intuitive experience for students, teachers, and parents across all devices.",
    link: "https://stem-bns.github.io/official-website/",
  },
  {
    id: 2,
    image: card2,
    category: "Front-End Development",
    title: "Al-Attar",
    description:
      "Developed a user-friendly website for Al-Attar, a renowned Egyptian brand, featuring a responsive design, intuitive navigation, and optimized performance across devices.",
    link: "https://7amdyabuelkhair.github.io/Al-Attar/",
  },

  {
    id: 4,
    image: card4,
    category: "Full-Stack Development",
    title: "Amplyopia",
    description:
      "Developed an interactive platform that leverages technology to enhance accessibility and visual engagement, featuring a responsive design, intuitive navigation, and optimized performance across devices. (ISEF Project)",
    link: "https://amplyopia.com/",
  },
 
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/7amdyabuelkhair"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
