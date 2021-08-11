import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import Header from './components/header/Header';

function App() {

  const [category, setCategory] = useState('en');
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);

  useEffect(() => {
    dictionaryAPI();
  }, []);

  const dictionaryAPI = async () => {
    try {
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello');
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App" style={{backgroundColor: '#282c34', color: 'white', height: '100vh'}}>
      <Container maxWidth="md" style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} />
      </Container>
    </div>
  );
}

export default App;
