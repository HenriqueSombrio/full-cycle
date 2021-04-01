import './App.css';
import Form from './components/Form/Form';
import { Title } from './components/Title';

function App() {
  

  return (
    <div className="App">
      <Title color="green" onClick={() => alert('Clicou')}>
        Exemplo React
      </Title>
      <Title>
        Exemplo React
      </Title>
      <Form />
    </div>
  );
}

export default App;
