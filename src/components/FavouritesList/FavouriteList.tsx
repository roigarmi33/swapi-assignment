import { useAtom, useAtomValue } from "jotai"
import { favouriteCharactersAtom } from "../../services/appState/SearchResultsAtom"
import { IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { DeleteForeverOutlined } from "@mui/icons-material"
import { useFavouritesCharactersActions } from "../hooks/favourites"

export const FavouriteList = (): JSX.Element => {
    const { toggleCharacterFromFavourites } = useFavouritesCharactersActions();
    const favouriteCharacters = useAtomValue(favouriteCharactersAtom);
    return favouriteCharacters.size > 0 ? (
        <List>
            {Array.from(favouriteCharacters).map((character) => {
                return (
                    <ListItem key={character.name}>
                        <ListItemText>
                            {character.name}
                        </ListItemText>
                        <ListItemButton onClick={() => toggleCharacterFromFavourites(character)}>
                            <IconButton>
                                <DeleteForeverOutlined />
                            </IconButton>
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>
    )
        : <></>
}