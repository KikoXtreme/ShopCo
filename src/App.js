import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Main/Home/Home';
import { Products } from './components/Main/Products/Products';


function App() {
  return (
    <div className="App">
      <Header />
      <main id="main">
        <Routes >
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
