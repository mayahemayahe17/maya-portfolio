"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Tower Game",
    description:
      "Tower Game is a fun and addictive Java game where you stack blocks to build the tallest tower possible! Test your skills and timing as the blocks keep coming faster and faster. With simple controls and a playful vibe, it’s a great way to challenge yourself and have some casual fun. ",
    image: "/images/projects/Tower_game.jpg",
    tag: ["All"],
    gitUrl: "https://github.com/mayahemayahe17/towergame",
  },
  {
    id: 2,
    title: "Ship Game",
    description:
      "Ship Game is a super fun two-player battle game played on microcontroller boards! Each player picks 4 secret ships and then takes turns trying to guess where the opponent’s ships are hidden. Using simple navigation buttons and LED lights, you can move around, select targets, and attack like a real sea battle captain! The first player to sink all 4 enemy ships wins the game. It’s a great mix of strategy, guessing, and friendly competition",
    image: "/images/projects/Ship_game.jpg",
    tag: ["All"],
    gitUrl: "https://github.com/mayahemayahe17/shipgame",
  },
  {
    id: 3,
    title: "Recipe Data Lab",
    description:
      "Recipe Dataset Project Lab dives into a tasty dataset from Food.com to uncover some delicious secrets! The main question we’re chasing is: Which ingredient pairs really make a difference between top-rated (above 4 stars) and not-so-loved (below 2 stars) recipes?",
    image: "/images/projects/Recipe_data_lab.jpg",
    tag: ["Data", "All"],
    gitUrl: "https://github.com/mayahemayahe17/Recipe-Dataset",
  },
  {
    id: 4,
    title: "Game Review Website",
    description:
      "Game Review Web is your cozy little corner on the web where you can keep track of all your favorite games! Whether you want to add new games, write reviews, or keep a wishlist of games you dream to own, Game Review Web has got you covered. It’s super easy to sign up, browse games, and manage your own collection",
    image: "/images/projects/Game_review.jpg",
    tag: ["Website", "All"],
    gitUrl: "https://github.com/mayahemayahe17/GameRiveWebsite",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  //const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  // const cardVariants = {
  //   initial: { y: 50, opacity: 0 },
  //   animate: { y: 0, opacity: 1 },
  // };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data"
          isSelected={tag === "Data"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Website"
          isSelected={tag === "Website"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          // <motion.li
          //   key={index}
          //   variants={cardVariants}
          //   initial="initial"
          //   animate={isInView ? "animate" : "initial"}
          //   transition={{ duration: 0.3, delay: index * 0.4 }}>
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
          // </motion.li>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
