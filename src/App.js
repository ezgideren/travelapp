import TravelPack from './components/TravelPack';
import Travels from './components/Travels';

function App() {
  const travels =[
    {
      id: 't1',
      place: 'Germany',
      period: '15 days',
      description:"Let's explore Germany together!",
      price: 1000

    },
    {
      id: 't2',
      place: 'California',
      period: '21 days',
      description:"Wanna hang around the beautiful beaches?",
      price: 2000
    },
    {
      id: 't3',
      place: 'London',
      period: '10 days',
      description:"You'll love the set of Harry Potter!",
      price: 3000
    }
  ]
  
  return (
    <div className="App">
    <Travels items={travels}></Travels>  
    </div>
  );
}

export default App;
