import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function HomePage() {
  const [user, setUser] = useState("");
  const history = useHistory();

  function handlePesquisa() {
    axios.get(`http://api.github.com/users/${user}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) =>{
        repositoriesName.push(repository.name)
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      history.push('/repositories')
    });
  }

  return (
    <>
      <input
        placeholder="Usuario"
        className="input"
        onChange={(e) => setUser(e.target.value)}
        value={user}
      />
      <button type="button" onClick={handlePesquisa}>
        Pesquisar
      </button>
    </>
  );
}

export default HomePage;
