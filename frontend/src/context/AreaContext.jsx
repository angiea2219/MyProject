import { createContext, useState, useContext } from "react";
import {
  getAllAreasRequest,
  deleteAreaRequest,
  createAreaRequest,
  getAreaRequest,
  updateAreaRequest,
} from "../api/areas.api";

const AreaContext = createContext();

export const useAreas = () => {
  const context = useContext(AreaContext);
  if (!context) {
    throw new Error("useTasks debe estar dentro del proveedor TaskProvider");
  }
  return context;
};

export const AreaProvider = ({ children }) => {
  const [areas, setAreas] = useState([]);
  const [errors, setErrors] = useState([]);

  const loadTasks = async () => {
    const res = await getAllAreasRequest();
    setAreas(res.data);
  };

  const loadTask = async (id) => {
    const res = await getTaskRequest(id);
    return res.data;
  };

  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      setAreas([...areas, res.data]);
      return res.data;
    } catch (error) {
      if (error.response) {
        setErrors([error.response.data.message]);
      }
    }
  };

  const deleteArea = async (id_area) => {
    const res = await deleteAreaRequest(id_area);
    if (res.status === 204) {
      setAreas(areas.filter((task) => area.id_area !== id_area));
    }
  };

  const updateArea = async (id_area, area) => {
    try {
      const res = await updateAreaRequest(id_area, area);
      return res.data;
    } catch (error) {
      if (error.response) {
        setErrors([error.response.data.message]);
      }
    }
  };

  return (
    <AreaContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        loadTask,
        errors,
        updateTask
      }}
    >
      {children}
    </AreaContext.Provider>
  );
};
