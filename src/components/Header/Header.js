import './header.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <header className="header">
            <h1>Blaze and the Monster Machines </h1>
            <h2>Fan Page</h2>
            <div className="header-lists">
                {user.accessToken
                    ?
                    <ul className="header-lists-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blaze">Blaze</Link></li>
                        <li><Link to="/create">New Blaze Friends</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                    :
                    <ul className="header-lists-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blaze">Blaze</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                }

                {user.accessToken
                    ?
                    <ul className="header-lists-list">
                        <li><Link to="/users/profile">{user.username}'s Profile</Link></li>
                        <li><Link to="/users/logout">Logout</Link></li>
                    </ul>
                    :
                    <ul className="header-lists-list">
                        <li><Link to="/users/register">Register</Link></li>
                        <li><Link to="/users/login">Login</Link></li>
                    </ul>
                }
            </div>
        </header>
    );
}