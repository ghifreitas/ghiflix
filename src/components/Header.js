import { Button } from "./Button";
import logo from "../logo.png"

export function Header() {
    return <header>
        <img src={logo}/>
        <Button text="Novo Vídeo"></Button>
    </header>
}