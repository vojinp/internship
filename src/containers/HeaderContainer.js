import { connect } from 'react-redux';
import { toggleModal } from '../actions/index'
import Header from '../components/Header';
import quotes from '../data/quotes.json';

const quote = quotes[Math.floor(Math.random() * quotes.length)];

const mapStateToProps = state => 
  ({
    randomQuote: quote,
    date: new Date()
  })

const mapDispatchToProps = disptach => 
  ({
    onOpenModal() {
        disptach (
            toggleModal()
        )
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(Header)  