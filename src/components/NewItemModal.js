import { Component } from 'react';

export class NewItemModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''
      }

      this.submit = this.submit.bind(this);
      this.inputChanged = this.inputChanged.bind(this);
    }
    
    submit(e) {
      e.preventDefault()
      this.props.closeModal();
      this.props.addItem({
        name: this.state.name
      });
      
      this.setState({name: ''});
    }

    inputChanged(e) {
      this.setState({name: e.target.value});
    }
    render() {
      return (
        <div className = { this.props.active ? 'is-visible ' + 'modal-wrap js-modal': 'modal-wrap js-modal' }>
          <div className="modal js-modal-inner">
            <h2>Create a task today:</h2>
            <form action onSubmit={this.submit}>
              <div className="field-wrap">
                <input className="field" type="text" placeholder="Title.." required 
                      value={this.state.name} onChange={this.inputChanged}/>
              </div>
              <div className="btn-wrap align-right">
                <input className="btn" type="submit" defaultValue="Create" 
                      disabled={!this.state.name}/>
              </div>
            </form>
          </div>
        </div>)
    }
}