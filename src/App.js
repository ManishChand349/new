import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import List from './components/List';
import Person from './components/Person';

function App() {
  function handleclick() {
    alert("Hello PWSkills")
  }
  const items= ["Item Job", "Item Job"]
  return (
    <div className="App">
     <Person name="Manish" age="21"/>
    <Button text="Click me" onClick={handleclick}/>
    <Header title="This is Header Component"/>
    
      <List items={items}/>
    </div>
  );
}

export default App;
