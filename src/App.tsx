import './App.css';
import { FavouriteList } from './components/FavouritesList/FavouriteList';
import { SearchableUserList } from './components/SearchableUserList/SearchableUserList';

function App() {
  return (
    <div className="App">
      <div className="search-users-area">
        <SearchableUserList />
      </div>
      <div className="favourites-list-area">
        <FavouriteList />
      </div>
    </div>
  );
}

export default App;
