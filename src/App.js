import ElevatorSystem from './components/ElevatorSystem'
// import Elevator from './components/Elevator/Elevator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <ElevatorSystem numOfElevators={5} floors={10}/>
        {/* <Elevator/> */}
      </main>
    </div>
  );
}

export default App;
