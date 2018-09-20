import { connect } from 'react-redux'
import { addItem, toggleModal, clearName, changeName } from '../actions/index';
import NewItemModal from '../components/NewItemModal';

const mapStateToProps = state => 
  ({
    id: generateId(state.items),
    active: state.modalActive,
    name: state.name
  })

const mapDispatchToProps = disptach => 
  ({
    onAddItem(item) {
        disptach (
            addItem(item)
        )
    },
    onCloseModal() {
        disptach (
            toggleModal()
        )
    },
    onClearName() {
        disptach (
            clearName()
        )
    },
    onChangeName(name) {
        disptach (
            changeName(name)
        )
    },
    onClickOutside() {
        disptach (
            toggleModal()
        )
        disptach(
            clearName()
        )
    }
  })
  
const generateId = (items) => (
    (items.length !== 0) ? items[items.length - 1].id + 1: 0
)

export default connect(mapStateToProps, mapDispatchToProps)(NewItemModal)  
