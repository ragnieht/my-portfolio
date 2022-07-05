import React from "react";
import HomeArea from "../Components/Areas/HomeArea";
import ProjectsArea from "../Components/Areas/ProjectsArea";
import SkillsArea from "../Components/Areas/SkillsArea";

export default function MainPage() {
  return (
    <div>
      <HomeArea />
      <SkillsArea />
      <ProjectsArea />
    </div>
  );
}
