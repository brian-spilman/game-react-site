import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { deleteGame, Game, getGameById } from "../api/game-requests";
import { NavBar } from "../components/navbar";


export function GameDetailsPage() {

    const navigate = useNavigate();
    let { gameId } = useParams();
    const { isLoading, isError, data } = useQuery("game", () => getGameById(Number(gameId)));

    if (isLoading) {
        return <p>LOADING</p>
    }
    if (isError || !data) {
        return <p>OH NO THERE WAS A PROBLEM</p>
    }

    let myGame: Game = data;

    async function deleteButton() {
        const works: boolean = await deleteGame(myGame.id);
        console.log(works);
        navigate("/");
    }
    
    function editButton() {
        console.log("EDIT BUTTON");
        navigate(`/gameedit/${myGame.id}`);
    }

    return <>
        <NavBar/>
        <h2>Welcome to the {myGame.title} Page!</h2>
        <h3>Year Released: {myGame.year}</h3>
        <h3>Consoles: (may include bias)</h3>
        {myGame.consoles.map(c => <li>{c}</li>)}
        <button onClick={editButton}>Edit Game Info</button>
        <button onClick={deleteButton}>Delete Game</button>
    </>
}