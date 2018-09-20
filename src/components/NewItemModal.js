import { Component } from 'react';

class NewItemModal extends Component {
    
    submit = (e) => {
      e.preventDefault();
      this.props.onCloseModal();
      this.props.onAddItem({
        id: this.props.id,
        name: this.props.name
      });
      
      this.props.onClearName();
    };

    inputChanged = (e) => {
      this.props.onChangeName(e.target.value);
    };

    componentDidMount = () => {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  
    componentWillUnmount = () => {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  
    setWrapperRef = (node) => {
      this.wrapperRef = node;
    }
  
    handleClickOutside = (event) => {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.props.onClickOutside();
      }
    }

    render() {
      return (
        <div className = { this.props.active ? 'is-visible ' + 'modal-wrap js-modal': 'modal-wrap js-modal' }>
          <div className="modal js-modal-inner" ref={this.props.active ? this.setWrapperRef : null}>
            <h2>Create a task today:</h2>
            <form action onSubmit={this.submit}>
              <div className="field-wrap">
                <input className="field" type="text" placeholder="Title.." required 
                      value={this.props.name} onChange={this.inputChanged}/>
              </div>
              <div className="btn-wrap align-right">
                <input className="btn" type="submit" defaultValue="Create" 
                      disabled={!this.props.name}/>
              </div>
            </form>
          </div>
        </div>
      )
    }
}

export default NewItemModal;