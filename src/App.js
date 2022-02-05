import logo from './logo.svg';
import './App.scss';
import Navigation from './Components/Navigation';
import LeftSidebar from './Components/LeftSidebar';
import RighSidebar from './Components/RightSidebar';
import Article from './Components/Article';

function App() {
  return (
    <>
      <Navigation />

      <main className='main-container'>
        <LeftSidebar />
        <Article />
        <RighSidebar />
      </main>

    </>
  );
}

export default App;
