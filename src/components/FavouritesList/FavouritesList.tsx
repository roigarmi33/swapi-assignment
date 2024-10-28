import { DeleteForeverOutlined } from "@mui/icons-material";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { Character } from "../../modules/Character";
import { favouriteCharactersAtom } from "../../services/appState/SearchResultsAtom";
import { useFavouritesCharactersActions } from "../hooks/favourites";
import { PopoverColorPicker } from "../PopoverColorPicker/PopoverColorPicker";
import "./FavouritesList.css";

export const FavouriteList = (): JSX.Element => {
  const favouriteCharacters = useAtomValue(favouriteCharactersAtom);
  const [color, setColor] = useState<string>("#fff");

  return (
    <div className="favourites-list-container">
      <Typography variant="h2">Favourite Characters</Typography>
      {favouriteCharacters.size > 0 && (
        <div
          style={{ height: "70vh", overflowY: "auto", backgroundColor: color }}
        >
          <List>
            {Array.from(favouriteCharacters).map(([name, character]) => (
              <>
                <FavouriteListItem character={character} key={name} />
                <Divider />
              </>
            ))}
          </List>
        </div>
      )}
      {favouriteCharacters.size > 0 && (
        <PopoverColorPicker color={color} setColor={setColor} />
      )}
    </div>
  );
};

interface FavouriteListItemProps {
  character: Character;
}

const FavouriteListItem = ({
  character,
}: FavouriteListItemProps): JSX.Element => {
  const { toggleCharacterFromFavourites } = useFavouritesCharactersActions();
  const handleDeleteClick = (): void =>
    toggleCharacterFromFavourites(character);
  return (
    <ListItem key={character.name}>
      <ListItemText sx={{ width: "100%" }}>
        <Typography variant="h6">{character.name}</Typography>
      </ListItemText>
      <ListItemButton onClick={handleDeleteClick}>
        <DeleteForeverOutlined />
      </ListItemButton>
    </ListItem>
  );
};
