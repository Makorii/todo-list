import React, { useState } from 'react'
import { Select } from '@chakra-ui/react'


function SelectsTaks({arrTask}) {
  const [completas, setCompletas] = useState("Completas")

  const onSelect = () => {
    console.log("hola hice algo")
    if(setCompletas("Completas")) {
      arrTask.map((task) => [{...task}])
      console.log(arrTask)
    }
  }

  return (
    <Select placeholder="Todas" onChange={(e) => onSelect(e.target.value)}>
      <option value={completas} >Completas</option>
      <option value="Incompletas">Incompletas</option>
    </Select>
  );
}

export default SelectsTaks