import logo from './logo.svg';
import './main.css';

export const Main = () => {
    return (
        <>
            <h1 className='home-title'>Welcome Blaze Fans! <i className="fa-solid fa-house"></i></h1>
            {/* <div>
                Main All Information in the Web Application will be here!
            </div> */}
            <img src={logo} className="App-logo logo" alt="logo" />
        </>
    );
}