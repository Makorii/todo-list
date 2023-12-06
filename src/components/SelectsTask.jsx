import React, { useState } from 'react'
import { Select } from '@chakra-ui/react'


function SelectsTaks({tasksLocal, setTasks}) {

  const onSelect = (value) => {
    if (value === "Completas") {
      const taskCompletes = tasksLocal.filter((task) => task.estado === true);
      setTasks(taskCompletes);
    } else if (value === "Incompletas") {
      const taskIncompletes = tasksLocal.filter((task) => task.estado === false);
      setTasks(taskIncompletes);
    } else if (value === "Todas") {
      setTasks(tasksLocal);
    }
  };

  return (
    <Select placeholder="Seleccione" onChange={(e) => onSelect(e.target.value)}>
      <option value="Todas">Todas</option>
      <option value="Completas" >Completas</option>
      <option value="Incompletas">Incompletas</option>
    </Select>
  );
}

export default SelectsTaks