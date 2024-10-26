import { DeleteForeverOutlined } from "@mui/icons-material"
import { Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import { useAtomValue } from "jotai"
import { Character } from "../../modules/Character"
import { favouriteCharactersAtom } from "../../services/appState/SearchResultsAtom"
import { useFavouritesCharactersActions } from "../hooks/favourites"

export const FavouriteList = (): JSX.Element => {
    const favouriteCharacters = useAtomValue(favouriteCharactersAtom);
    return (
        <>
            <Typography variant="h2">
                Favourite Characters
            </Typography>
            <List>
                {Array.from(favouriteCharacters).map(([name, character]) => (
                    <>
                        <FavouriteListItem character={character} key={name} />
                        <Divider />
                    </>
                ))}
            </List>
        </>
    )
}

interface FavouriteListItemProps {
    character: Character
}

const FavouriteListItem = ({ character }: FavouriteListItemProps): JSX.Element => {
    const { toggleCharacterFromFavourites } = useFavouritesCharactersActions();
    return (
        <ListItem key={character.name}>
            <ListItemText sx={{ width: "100%" }}>
                <Typography variant="h6">
                    {character.name}
                </Typography>
            </ListItemText>
            <ListItemButton onClick={() => toggleCharacterFromFavourites(character)}>
                <IconButton>
                    <DeleteForeverOutlined />
                </IconButton>
            </ListItemButton>
        </ListItem>
    )
}