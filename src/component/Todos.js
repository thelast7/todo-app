import React from 'react'

const Todos = ({todos, hapusTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => {hapusTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">Gak ada kerjaan! All beres bos!</p>
  )
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos