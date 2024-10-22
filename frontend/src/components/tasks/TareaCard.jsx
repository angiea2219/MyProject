import { Card, Button } from "../ui";
import { useTareas } from "../../context/TareaContext";
import { useNavigate } from "react-router-dom";
import { PiTrashSimpleLight } from "react-icons/pi";
import { BiPencil } from "react-icons/bi";

function TareasCard({ tarea }) {
  const { deleteTarea } = useTareas();
  const navigate = useNavigate();

  return (
    <Card key={tarea.id_tarea} className="px-7 py-4 flex flex-col justify-center">
      <div>
        <h1>pruebas 1</h1>
        <h1 className="text-2xl font-bold">{tarea.descripcion}</h1>
        <p>{tarea.id_tarea}</p>
        <p>{tarea.id_proyecto}</p>
        <p>{tarea.id_user}</p>
        <p>{tarea.id_estado}</p>
        <p>{tarea.fecha_inicio}</p>
        <p>{tarea.fecha_fin}</p>
      </div>
      <div className="my-2 flex justify-end gap-x-2">
        <Button onClick={() => navigate(`/tareas/${tarea.id_tarea}/edit`)}>
          <BiPencil className="text-white" />
          Editar
        </Button>
        <Button
          className="bg-red-700 hover:bg-red-600"
          onClick={async () => {
            if (window.confirm("¿Estás seguro de eliminar esta tarea?")) {
              deleteTarea(tarea.id_tarea);
            }
          }}
        >
          <PiTrashSimpleLight className="text-white" />
          Eliminar
        </Button>
      </div>
    </Card>
  );
}

export default TareasCard;
