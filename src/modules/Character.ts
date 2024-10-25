import { IPeople, Planets } from "swapi-ts"
import { Homeworld } from "./Homewrold"

export interface Character {
    name: string
    height: string
    mass: string
    birthYear: string
    amountOfFilmAppearances: number
    homeworld: Homeworld
}

// const fromIPeopls = (people: IPeople): Character => {
//     const homeworld = Planets.findBySearchpeople.homeworld
//     return {
//         name: people.name,
//         height: people.height,
//         mass: people.mass,
//         birthYear: people.birth_year,
//         amountOfFilmAppearances: people.films.length,
//         homeworld:
//     }
// }