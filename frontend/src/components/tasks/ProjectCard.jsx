import { Card, Button } from "../ui";
import { useProjects } from "../../context/ProjectContext";
import { useNavigate } from "react-router-dom";
import { PiTrashSimpleLight } from "react-icons/pi";
import { BiPencil } from "react-icons/bi";

function ProjectCard({ project }) {
  const { deleteProject } = useProjects();
  const navigate = useNavigate();

  return (
    <Card key={project.id_proyecto} className="px-7 py-4 flex flex-col justify-center">
      <div>
        <h1 className="text-2xl font-bold">{project.descripcion}</h1>
        <p>{project.id_proyecto}</p>
        <p>{project.id_area}</p>
        <p>{project.product_owner}</p>
        <p>{project.id_estado}</p>
        <p>{project.supervisor_it}</p>
        <p>{project.fecha_inicio}</p>
        <p>{project.fecha_fin}</p>
      </div>
      <div className="my-2 flex justify-end gap-x-2">
        <Button onClick={() => navigate(`/projects/${project.id_proyecto}/edit`)}>
          <BiPencil className="text-white" />
          Editar
        </Button>
        <Button
          className="bg-red-700 hover:bg-red-600"
          onClick={async () => {
            if (window.confirm("¿Estás seguro de eliminar este proyecto?")) {
              deleteProject(project.id_proyecto);
            }
          }}
        >
          <PiTrashSimpleLight className="text-white" />
          Eliminar
        </Button>

        <Button onClick={() => navigate(`/tareas/tareas_proyecto/${project.id_proyecto}`)}>
          <BiPencil className="text-white" />
          Ver Tareas
        </Button>  

      </div>
    </Card>
  );
}

export default ProjectCard;
