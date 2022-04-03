import logo from './logo.svg';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { DisplayItem } from './components/DisplayItem';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <DisplayItem />
    </div>
  );
}

export default App;
