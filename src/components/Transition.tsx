type Task = {
  id: number
  title: string
  assignee: string
}

const member = {
  a: 'A',
  b: 'B',
  c: 'C',
}

const generateDummyTasks = (): Task[] => {
  return Array(10000)
    .fill('')
    .map((_, index) => {
      const addedIndex = index + 1
      return {
        id: addedIndex,
        title: `タスク${addedIndex}`,
        assignee:
          addedIndex % 3 === 0
            ? member.a
            : addedIndex % 2 === 0
            ? member.b
            : member.c,
      }
    })
}

const tasks = generateDummyTasks()

export const Transition = () => {
  return (
    <div>
      <p>Transition</p>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{ width: '300px', margin: 'auto', background: 'lavender' }}
        >
          <p>タイトル: {task.title}</p>
          <p>担当者: {task.assignee}</p>
        </div>
      ))}
    </div>
  )
}
