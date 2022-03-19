export interface IAdnModel{
    adn : string[]
}

export interface IResponseModel{
    mutation: boolean | null,
    message: string | object | null
}

export interface ICountModel{
    count_mutation: number,
    count_noMutation: number
}