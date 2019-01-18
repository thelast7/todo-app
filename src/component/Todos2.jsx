import React from 'react'

const Todos2 = ({todos}) => {
  const listTodos = todos.length ? (
    todos.map(todo => {
      return (
        <div key={todo.id}>
          <span>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p>kosong</p>
  )
  return (
    <div>
      {listTodos}
    </div>
  )
}

export default Todos2