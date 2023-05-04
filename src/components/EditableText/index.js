import {Component} from 'react'

import './index.css'

class EditableTextInput extends Component {
  state = {
    isSaved: false,
    textInput: '',
  }

  onClickSave = () => {
    this.setState({isSaved: true})
  }

  onClickEdit = () => {
    this.setState({isSaved: false})
  }

  onChangeText = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {isSaved, textInput} = this.state

    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="main-heading">Editable Text Input</h1>
          {isSaved ? (
            <div className="input-container">
              <p className="input-para">{textInput}</p>
              <button
                type="button"
                onClick={this.onClickEdit}
                className="button"
              >
                Edit
              </button>
            </div>
          ) : (
            <div className="input-container">
              <input
                value={textInput}
                onChange={this.onChangeText}
                type="text"
                className="card-input"
              />
              <button
                type="button"
                onClick={this.onClickSave}
                className="button"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EditableTextInput
