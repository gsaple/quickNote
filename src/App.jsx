import Header from "./components/NotesComponents/Header";
import Notes from "./components/NotesComponents/Notes";
import './components/css/App.css'
import './components/css/Note.css'

function App() {
  return (
    <div className="main">
    <Header/>
    <Notes/>
    </div>
  );
}

export default App;
