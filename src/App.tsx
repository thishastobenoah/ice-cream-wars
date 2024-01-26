import './App.css';
import { Header } from './Header';
import { AdDesigner } from './AdDesigner';
import { Votes } from './Votes';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export { App };
