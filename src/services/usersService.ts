import { IPeople, People } from "swapi-ts";

export interface GetPageResult<T> {
    count: number
    next?: string
    previous?: string
    results: Array<T>
}

const searchCharacter = async (characterName: string, page: number = 1): Promise<GetPageResult<IPeople>> => {
    const searchResultsData: GetPageResult<IPeople> = await People.getPage(page, characterName);
    return searchResultsData
}

export const userService = {
    searchCharacter
}