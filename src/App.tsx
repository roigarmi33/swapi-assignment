import "./App.css";
import { FavouriteList } from "./components/FavouritesList/FavouritesList";
import { SearchableUserList } from "./components/SearchableUserList/SearchableUserList";

function App() {
  return (
    <div className="App">
      <div className="box">
        <SearchableUserList />
      </div>
      <div className="box">
        <FavouriteList />
      </div>
    </div>
  );
}

export default App;
