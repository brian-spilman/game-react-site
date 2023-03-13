import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { createGame, GameForm } from "../api/game-requests"
import { NavBar } from "../components/navbar";



export function CreateGamePage() {

    const [form, setForm] = useState<GameForm>({
        title: "",
        year: 0,
        consoles: []
    })

    const navigate = useNavigate();
    const [cName, setCName] = useState('');

    async function buttonHandler() {
        //setForm({ ...form, consoles: consoles });
        //console.log(consoles);
        console.log(form.consoles);
        const newGame = await createGame(form);
        console.log(newGame);
        navigate("/");
    }


    return <>

        <NavBar/>
    
        <h3>Game Creation Form: </h3>

        <label htmlFor="title">Game Title:</label>
        <input id="title" type="text" placeholder="Super Mario Bros." onChange={e => setForm({ ...form, title: e.target.value })}/>

        <label htmlFor="year">Year:</label>
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



        <button onClick={buttonHandler}>Add Game</button>

    </>
}