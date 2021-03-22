import './App.css';
import'./header/Header';
import Header from './header/Header';
import Nav from './nav/Nav'
import Content from './content/Content'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Content />
    </div>
  );
}

export default App;
