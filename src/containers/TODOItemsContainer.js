import { connect } from 'react-redux'
import TODOItems from '../components/TODOItems';
import { removeItem } from '../actions/index';

const mapStateToProps = state => 
  ({
    items: state.items
  })

const mapDispatchToProps = disptach => 
  ({
    onRemoveItem(itemsId) {
        setTimeout(() => {
            disptach (
                removeItem(itemsId)
            )
        }, 1000)
    }
  })  

export default connect(mapStateToProps, mapDispatchToProps)(TODOItems)  