import { debounce, TextField } from "@mui/material";
import { useSetAtom } from "jotai";
import { useEffect, useRef } from "react";
import { searchResultsAtom } from "../../services/appState/SearchResultsAtom";
import { userService } from "../../services/usersService";
import "./SearchBar.css";

export const SearchBar = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchResults = useSetAtom(searchResultsAtom);
  const handleChange = debounce(async () => {
    if (inputRef.current) {
      const characterName = inputRef.current.value;
      const pageResults = await userService.searchCharacter(characterName);
      setSearchResults(pageResults);
    }
  }, 500);
  useEffect(() => {
    handleChange();
  }, []);

  return (
    <div className="search-bar">
      <TextField
        inputRef={inputRef}
        onChange={handleChange}
        placeholder="Search Characters"
        variant="outlined"
        sx={{ width: "80%" }}
      />
    </div>
  );
};
