import React from 'react'
import RenderTask from './RenderTask';


function ContainerTasks({arrTask, onClose, onStatus}) {
  return (
    <>
      {arrTask ? arrTask.map((task) => (
        <RenderTask 
        key={self.crypto.randomUUID()}
        id={task.id}
        task={task.nombre}
        onClose={onClose}
        onStatus={onStatus}
        status={task.estado}
        />
      )): ""}
    </>
  );
}

export default ContainerTasks