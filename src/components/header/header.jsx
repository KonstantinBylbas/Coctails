import './header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/coctails">Coctails</Link>
        </header>
    )
}