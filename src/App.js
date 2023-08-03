import './App.css';
import { UserProvider } from './context/UserContext';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Main />
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
