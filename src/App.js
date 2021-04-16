import NavigationBar from './components/NavigationBar';
import Section from './components/Section';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Section padded={true} backgroundColor="#69cd37" />
      <Section />
      <Section backgroundColor="#69cd37" />
      <Section />
    </div>
  );
}

export default App;
