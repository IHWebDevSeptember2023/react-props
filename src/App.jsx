import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeroDetails from './components/HeroDetails';
import ListOfHeroes from './components/ListOfHeros';
import ReactPlayer from 'react-player';

function App() {
  const arrayOfHeroes = ["Spiderman", "Thor", "Hulk"];
  /* fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data.results);
    }) */
  return (
    <>
      <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing />
      <Navbar />
      <HeroSection />
      <HeroDetails heroName="Flash" power="Speed" />
      <HeroDetails heroName="Thor" power="Thunder" />
      <ListOfHeroes>
        {
          arrayOfHeroes.map((hero) => {
            return <li>{hero}</li>
          })
        }
      </ListOfHeroes>
    </>
  )
}

export default App
