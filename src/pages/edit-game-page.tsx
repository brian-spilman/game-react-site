import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Game, getGameById, updateGame } from "../api/game-requests";
import { NavBar } from "../components/navbar";

// type EditGamePageProps = {
//     game: Game
// }

export function EditGamePage() {
    
    const navigate = useNavigate();
    let { gameId } = useParams();

    const [cName, setCName] = useState('');

    const { isLoading, isError, data } = useQuery("game", () => getGameById(Number(gameId)));

    const [form, setForm] = useState<Game>({
        id: 0,
        title: "",
        year: 0,
        consoles: []
    });

    useEffect(() => {
        async function aFunction() {
            setForm(await getGameById(Number(gameId)));
        }

        aFunction();
    }, []);

    async function submitEdit() {
        
        let gameRefresh: Game = {
            id: form.id,
            title: form.title,
            year: form.year,
            consoles: [...form.consoles]
        }
        // if(gameRefresh.title === "") {
        //     gameRefresh.title = data.title;
        // }
        // if(gameRefresh.year === 0) {
        //     gameRefresh.year = data.year;
        // }

        let returnedGame = await updateGame(gameRefresh);
        console.log(returnedGame);

        navigate("/");
    }
    
    return <>
        <NavBar/>
        <h2>Welcome to the {form.title} Edit Page</h2>
        <h3>Year Released: {form.year}</h3>

        <label htmlFor="title">Edit Title:</label>
        <input id="title" type="text" placeholder="Super Mario Bros." onChange={e => setForm({ ...form, title: e.target.value })}/>

        <label htmlFor="year">Edit Year:</label>
        <input id="year" type="text" placeholder="1985" onChange={e => setForm({ ...form, year: Number(e.target.value) })}/>

        <label htmlFor="console">Consoles:</label>
        <input id="console" onChange={e => setCName(e.target.value)} />
        <button onClick={() => {
            setCName('');
            //consoles.push(cName);
            setForm({ ...form, consoles: [...form.consoles, cName] });
        }} >Add</button>
        <ul>
            {form.consoles.map(c => (<li>{c} <button onClick={() => {
                //setConsoles(consoles.filter(x => x !== c));
                setForm({ ...form, consoles: [...form.consoles.filter(x => x !== c)] });
            }}>Delete</button></li>))}
        </ul>
        <button onClick={submitEdit}>Done Editing</button>
    </>
}