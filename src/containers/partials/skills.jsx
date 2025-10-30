import React from "react";
import SkillCard from "../../components/SkillCard";

const Skills = () => {
  const SKILLS = [
    {
      source: "/img/tech/fullstack.png",
      title: "Full Stack Web",
      description:
        "End‑to‑end application delivery: responsive UIs, secure APIs, relational/NoSQL databases, authentication/authorization, CI/CD, and cloud deployments with monitoring.",
      backColor: "#B4D8E72e",
      shadowColor: "#B4D8E7",
      direction: 'top-left'
    },
    {
      source: "/img/tech/react.png",
      title: "React & Next.js",
      description:
        "Modern SPA/SSR frontends using component‑driven architecture, state management (Context/Redux), routing, accessibility, code‑splitting, and performance tuning.",
      backColor: "#E3B7D22e",
      shadowColor: "#E3B7D2",
      direction: 'top'
    },
    {
      source: "/img/tech/map.png",
      title: "Web GIS & Mapping",
      description:
        "Interactive mapping with Mapbox/Leaflet: vector tiles, geocoding, routing, clustering, heatmaps, and rich spatial visualization integrated with real‑time data.",
      backColor: "#F2E6B12e",
      shadowColor: "#F2E6B1",
      direction: 'top-right'
    },
    {
      source: "/img/tech/gis.png",
      title: "GIS Analysis",
      description:
        "Comprehensive spatial analysis and geoprocessing: projections, buffering/overlay, raster‑vector workflows, spatial joins, and cartography best practices for clear maps.",
      backColor: "#CBE6D72e",
      shadowColor: "#CBE6D7",
      direction: 'bottom-left'
    },
    {
      source: "/img/tech/python.png",
      title: "AI/ML for Geospatial",
      description:
        "Remote sensing ML: feature extraction, semantic segmentation, land‑cover classification, change detection, and model serving pipelines for production.",
      backColor: "#FAD4B12e",
      shadowColor: "#FAD4B1",
      direction: 'bottom'
    },
    {
      source: "/img/tech/node.png",
      title: "Node.js & REST APIs",
      description:
        "Scalable backend services: REST/GraphQL design, authentication, caching, background jobs, automated testing, logging/observability, and performance optimization.",
      backColor: "#D0B7E62e",
      shadowColor: "#D0B7E6",
      direction: 'bottom-right'
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
                shadowColor={skill.shadowColor}
                direction={skill.direction}
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
