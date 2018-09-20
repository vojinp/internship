import Header from '../containers/HeaderContainer';
import Footer from './Footer';
import Main from '../containers/TODOItemsContainer';
import NewItemContainer from '../containers/NewItemContainer';

const App = () => {
    return (
        <div className="page-wrap">
          <Header />
          <Main />
          <NewItemContainer />
          <Footer />
        </div>
    )
};

export default App;