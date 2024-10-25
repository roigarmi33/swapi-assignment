import { IPeople, People, Planets } from "swapi-ts";
import { Character } from "../modules/Character";

/**
 * Utility to demonstrate swapi-ts getPage return value
 */
interface GetPageResult<T> {
    count: number
    next?: string
    previous?: string
    results: Array<T>
}

/**
 * The relevant data of a search result
 */
export interface PageSearchResults<T> {
    results: Array<T>;
    next?: string;
    page: number;
    search: string;
}

const searchCharacter = async (search: string, page: number = 1): Promise<PageSearchResults<Character>> => {
    const searchResultsData: GetPageResult<IPeople> = await People.getPage(page, search);
    const { results } = searchResultsData;
    const characters: Array<Character> = await Promise.all(results.map(async (people) => {
        const homeworld = (await Planets.find((planet) => people.homeworld === planet.url)).resources[0].value;
        const character: Character = {
            name: people.name,
            amountOfFilmAppearances: people.films.length,
            birthYear: people.birth_year,
            height: people.height,
            homeworld: homeworld,
            mass: people.mass
        }
        return character
    }))
    const pageResults: PageSearchResults<Character> = {
        next: searchResultsData.next,
        results: characters,
        search,
        page
    }
    return pageResults
}

export const userService = {
    searchCharacter
}