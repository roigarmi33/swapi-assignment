import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Character } from "../../modules/Character";

interface CharacterModalProps {
  character: Character;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const CharacterModal = ({ character }: CharacterModalProps) => {
  return (
    <Box sx={style}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h2">{character.name}</Typography>
          <List>
            <ListItem>
              <ListItemText>
                <Typography>Height: {character.height}</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography>Mass: {character.mass}</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography>Birth Year: {character.birthYear}</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography>
                  Number of Films: {character.amountOfFilmAppearances}
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography variant="h5">Homeworld Details</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography>Name: {character.homeworld.name}</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography>Terrain: {character.homeworld.terrain}</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography>Climate: {character.homeworld.climate}</Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography>
                  Population: {character.homeworld.population}
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};
