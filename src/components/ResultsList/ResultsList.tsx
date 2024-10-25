import { Avatar, Checkbox, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import { favouriteCharactersAtom, searchResultsAtom } from "../../services/appState/SearchResultsAtom";

export const ResultsList = (): JSX.Element => {
    const searchResults = useAtomValue(searchResultsAtom);
    const characters = useAtomValue(searchResultsAtom);
    const [favouriteCharacters, setFavouriteCharacters] = useAtom(favouriteCharactersAtom)

    return (<List>
        {characters?.results.map((character) => {
            const imageUrl = `https://picsum.photos/200/300?random=${character.name}`
            return (
                <ListItem key={character.name} secondaryAction={
                    <Checkbox checked={favouriteCharacters.has(character)} onClick={() => {
                        const characterInFavourites = favouriteCharacters.has(character);
                        const updatedSet = new Set(favouriteCharacters.values());
                        characterInFavourites ? updatedSet.delete(character) : updatedSet.add(character);
                        setFavouriteCharacters(updatedSet)
                    }}
                    />
                }>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar src={imageUrl} />
                        </ListItemAvatar>
                        <ListItemText>
                            {character.name}
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            )
        })}
        {searchResults?.next &&
            <ListItem >
                <ListItemButton>
                    <ListItemText>
                        Load more results
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        }
    </List>)
}