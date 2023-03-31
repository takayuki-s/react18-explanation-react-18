import type { Task } from './Transition'

type Props = {
  taskList: Task[]
}

export const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.map((task) => (
        <div
          key={task.id}
          style={{
            width: '300px',
            margin: 'auto',
            background: 'lavender',
          }}
        >
          <p>タイトル: {task.title}</p>
          <p>担当者: {task.assignee}</p>
        </div>
      ))}
    </>
  )
}
