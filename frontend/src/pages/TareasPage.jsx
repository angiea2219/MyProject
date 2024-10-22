import { useEffect } from "react";
import TareaCard from "../components/tasks/TareaCard";
import { useTareas } from "../context/TareaContext";
//import { useProjects } from "../context/ProjectContext";

function TareasPage() {
  const { tareas, loadTareas } = useTareas();

  //const { projects } = useProjects();

  useEffect(() => {
    loadTareas();
    //loadTareasProyecto(project.id_proyecto);
  }, []);

  console.log(tareas)
  if (tareas.length === 0) return (
    <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
      <h1 className="text-3xl font-bold">No tasks found</h1>
    </div>
  )

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {tareas.map((tarea) => (
        <TareaCard tarea={tarea} key={tarea.id_tarea} />
      ))}
    </div>
  );
}

export default TareasPage;
