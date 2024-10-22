import { useEffect } from "react";
import ProjectCard from "../components/tasks/ProjectCard";
import { useProjects } from "../context/ProjectContext";

function ProjectPage() {
  const { projects, loadProjects } = useProjects();

  useEffect(() => {
    loadProjects();
  }, []);

  if (projects.length === 0) return (
    <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
      <h1 className="text-3xl font-bold">No Projects found</h1>
    </div>
  )

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id_proyecto} />
      ))}
    </div>
  );
}

export default ProjectPage;
