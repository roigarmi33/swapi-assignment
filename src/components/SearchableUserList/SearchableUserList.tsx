import { ResultsList } from "../ResultsList/ResultsList";
import { SearchBar } from "../SearchBar/SearchBar";
import "./SearchableUserList.css";

export const SearchableUserList = (): JSX.Element => {
  return (
    <div className="searchable-user-list">
      <SearchBar />
      <ResultsList />
    </div>
  );
};
