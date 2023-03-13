
export type Game = {
    id: number,
    title: string,
    year: number,
    consoles: string[]
}

export type GameForm = {
    title: string,
    year: number,
    consoles: string[]
}

export async function getAllGames(): Promise<Game[]>{

    const httpResponse = await fetch("http://127.0.0.1:8080/games")
    const games: Game[] = await httpResponse.json();
    return games;

}

export async function getGameById(gameId: number): Promise<Game>{

    const httpResponse = await fetch("http://127.0.0.1:8080/games/" + gameId)
    const game: Game = await httpResponse.json();
    return game;
    
}

export async function createGame(newGame: GameForm): Promise<Game> {
    const httpResponse = await fetch("http://127.0.0.1:8080/games", {
        method:"POST",
        body:JSON.stringify(newGame),
        headers: {
            "Content-Type":"application/json"
        }
    });

    const game:Game = await httpResponse.json();
    return game;
}

export async function deleteGame(gameId: number): Promise<boolean>{

    const httpResponse = await fetch("http://127.0.0.1:8080/games/" + gameId, {
        method:"DELETE",
        headers: {
            "Content-Type":"application/json"
        }
    })
    const bool: boolean = await httpResponse.json();
    return bool;
    
}

export async function updateGame(oldGame: Game): Promise<Game> {
    const httpResponse = await fetch("http://127.0.0.1:8080/games", {
        method:"PUT",
        body:JSON.stringify(oldGame),
        headers: {
            "Content-Type":"application/json"
        }
    });

    const game:Game = await httpResponse.json();
    return game;
}