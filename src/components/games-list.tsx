import { Link } from "react-router-dom"
import { Game } from "../api/game-requests"

type GamesListProps = {
    games: Game[]
}

export function GamesList(props: GamesListProps) {
    return <>

        {props.games.map(g => <li key={g.id}><Link to={`/gamedetails/${g.id}`}>{g.title}</Link> </li>)}
    
    </>
}