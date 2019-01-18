import React, { Component } from 'react'

class AddTodo extends Component {
  constructor(props){
    super(props)
    this.state = {
      content: ''
    }
    this.inputRef = React.createRef()
  }

  componentDidMount(){
    this.inputRef.current.focus()
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.tambahTodo(this.state)
    this.setState({
      content: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Tambah Daftar</label>
          <input type="text" ref={this.inputRef} onChange={this.handleChange} value={this.state.content}/>
        </form>
      </div>
    )
  }
}

export default AddTodo