import { useQuery } from "react-query"
import { getAllGames } from "../api/game-requests";
import { GamesList } from "../components/games-list";
import { NavBar } from "../components/navbar";



export function HomePage() {

    const { isLoading, isError, data = [] } = useQuery("games", getAllGames);

    if (isLoading) {
        return <p>LOADING</p>
    }
    if (isError) {
        return <p>OH NO THERE WAS A PROBLEM</p>
    }
    

    return <>
        <NavBar/>
        <h2>Welcome to the Home Page!</h2>
        <GamesList games={data} />
    </>
}