import HeaderContainer from '../containers/HeaderContainer';
import Footer from './Footer';
import TODOItemsContainer from '../containers/TODOItemsContainer';
import NewItemContainer from '../containers/NewItemContainer';

const App = () => {
    return (
        <div className="page-wrap">
          <HeaderContainer />
          <TODOItemsContainer />
          <NewItemContainer />
          <Footer />
        </div>
    )
};

export default App;