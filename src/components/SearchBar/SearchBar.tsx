import { debounce, TextField } from "@mui/material";
import { useSetAtom } from "jotai";
import { useRef } from "react";
import { searchResultsAtom } from "../../services/appState/SearchResultsAtom";
import { userService } from "../../services/usersService";


export const SearchBar = (): JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null);
    const setSearchResults = useSetAtom(searchResultsAtom)
    const handleChange = debounce(async () => {
        if (inputRef.current) {
            const characterName = inputRef.current.value;
            const pageResults = await userService.searchCharacter(characterName)
            setSearchResults(pageResults)
        }
    }, 500);

    return <TextField inputRef={inputRef} onChange={handleChange} placeholder="Search Characters" sx={{ width: "85%" }} variant="outlined" />
}