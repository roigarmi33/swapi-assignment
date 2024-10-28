import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Modal,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Character } from "../../modules/Character";
import { CharacterModal } from "../CharacterModal/CharacterModal";
import { useFavouritesCharactersActions } from "../hooks/favourites";

interface CharacterListItemProps {
  character: Character;
}

const CARD_STYLE = { margin: 1, width: "30%", justifyContetnt: "center" };
const CARD_CONTENT_SX = { textAlign: "center", height: 75 };
const CHARACTER_NAME_SX = { alignContent: "center" };
const CARD_ACTIONS_SX = { justifyContent: "center" };

export const CharacterListItem = ({ character }: CharacterListItemProps) => {
  const { toggleCharacterFromFavourites, isFavouriteCharacter } =
    useFavouritesCharactersActions();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const handleClose = () => {
    setModalOpen(false);
  };
  const handleOpen = () => {
    setModalOpen(true);
  };
  const handleFavouriteClick = () => {
    toggleCharacterFromFavourites(character);
  };
  const imageUrl = `https://picsum.photos/200/300?random=${character.name}`;
  return (
    <>
      <Card sx={CARD_STYLE}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia component="img" height="140" image={imageUrl} />
          <CardContent sx={CARD_CONTENT_SX}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={CHARACTER_NAME_SX}
            >
              {character.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={CARD_ACTIONS_SX}>
          <Checkbox
            checked={isFavouriteCharacter(character)}
            onClick={handleFavouriteClick}
          />
        </CardActions>
      </Card>
      <Modal open={isModalOpen} onClose={handleClose}>
        <CharacterModal character={character} />
      </Modal>
    </>
  );
};
