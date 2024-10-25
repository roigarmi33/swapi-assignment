import { Autocomplete, debounce, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { GetPageResult, userService } from "../../services/usersService";
import { IPeople } from "swapi-ts";

export const SearchBar = (): JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [options, setOptions] = useState<Array<IPeople>>([])
    const handleChange = debounce(async () => {
        if (inputRef.current) {
            const characterName = inputRef.current.value;
            const pageResults = await userService.searchCharacter(characterName)
            setOptions(pageResults.results)
        }
    }, 500);

    return (
        <Autocomplete
            options={options}
            renderInput={(params) =>
                <TextField onChange={handleChange} inputRef={params.InputProps.ref} />
            }
        />
    )
}