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
    <div class="section py-5 position-relative skills-section" style={{ zIndex: 10, overflow: 'visible' }}>
      {/* Blurred edge at top */}
      <div className="skills-top-blur"></div>
      <div class="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row text-center mb-5">
          <div className="col-12">
            <h1 className="mb-3 blue-gradient-text fw-bold portfolio-section-title">MY SKILLS</h1>
            <p className="text-white-50 mb-0 portfolio-section-subtitle">
              My core technical expertise and favorite stacks for building and analyzing geospatial solutions
            </p>
          </div>
        </div>
        <div class="row align-items-stretch mb-5 g-3 g-md-4">
          {SKILLS.map((skill, index) => {
            return (
              <SkillCard
                key={index}
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
