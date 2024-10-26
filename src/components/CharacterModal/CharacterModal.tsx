import { Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material"
import { Character } from "../../modules/Character"

interface CharacterModalProps {
    character: Character
}
export const CharacterModal = ({ character }: CharacterModalProps) => {
    return <Card variant="outlined">
        <CardContent>
            <Typography variant="h2">
                {character.name}
            </Typography>
            <List>
                <ListItem>
                    <ListItemText>
                        <Typography>
                            Height: {character.height}
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
        </CardContent>
    </Card>
}