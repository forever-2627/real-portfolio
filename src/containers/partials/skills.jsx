import React from "react";
import SkillCard from "../../components/SkillCard";

const Skills = () => {
  const SKILLS = [
    {
      source: "/img/tech/qgis.png",
      title: "FULL STACK",
      description:
        "Objectively productivate interoperable process improvements after team building testing procedures.",
      backColor: "#B4D8E7 ",
    },
    {
      source: "/img/tech/qgis.png",
      title: "FULL STACK",
      description:
        "Objectively productivate interoperable process improvements after team building testing procedures.",
      backColor: "#E3B7D2 ",
    },
    {
      source: "/img/tech/qgis.png",
      title: "FULL STACK",
      description:
        "Objectively productivate interoperable process improvements after team building testing procedures.",
      backColor: "#F2E6B1 ",
    },
    {
      source: "/img/tech/qgis.png",
      title: "FULL STACK",
      description:
        "Objectively productivate interoperable process improvements after team building testing procedures.",
      backColor: "#CBE6D7 ",
    },
    {
      source: "/img/tech/qgis.png",
      title: "FULL STACK",
      description:
        "Objectively productivate interoperable process improvements after team building testing procedures.",
      backColor: "#FAD4B1 ",
    },
    {
      source: "/img/tech/qgis.png",
      title: "FULL STACK",
      description:
        "Objectively productivate interoperable process improvements after team building testing procedures.",
      backColor: "#D0B7E6 ",
    },
  ];

  return (
    <div class="section bg-transparent py-5 position-relative">
      <img
        src="img/title-back.png"
        alt=""
        class="position-absolute"
        style={{ top: "-15rem", right: "0", zIndex: "-999" }}
      ></img>
      <div class="container">
        <div className="row text-center">
          <h1 className="mb-4 blue-gradient-text fw-bold">MY SKILLS</h1>
        </div>
        <div class="row align-items-end mb-5">
          {SKILLS.map((skill) => {
            return (
              <SkillCard
                source={skill.source}
                title={skill.title}
                description={skill.description}
                backColor={skill.backColor}
              />
            );
          })}
        </div>

        <div class="row gutter-50 mb-5 align-items-stretch"></div>
      </div>

      <div class="clear"></div>
    </div>
  );
};

export default Skills;
