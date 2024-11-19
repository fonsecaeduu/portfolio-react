import React, { useState } from 'react';

// Função para gerar uma combinação aleatória de 4 números
const generateRandomCombination = () => {
  let combination = [];
  while (combination.length < 4) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (!combination.includes(randomNumber)) {
      combination.push(randomNumber);
    }
  }
  return combination;
};

// Função para calcular os Bulls e Cows
const calculateBullsAndCows = (guess, secret) => {
  let bulls = 0;
  let cows = 0;
  guess.forEach((num, index) => {
    if (num === secret[index]) {
      bulls++;
    } else if (secret.includes(num)) {
      cows++;
    }
  });
  return { bulls, cows };
};

function BullAndCows() {
  const [secretCombination, setSecretCombination] = useState(generateRandomCombination()); // Geração da combinação secreta
  const [guess, setGuess] = useState(''); // Adivinhação do usuário
  const [attempts, setAttempts] = useState([]); // Armazenar tentativas anteriores

  const handleGuessChange = (e) => {
    setGuess(e.target.value); // Atualiza o valor da tentativa
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Converte a tentativa para um array de números
    const guessArray = guess.split('').map(Number);
    const { bulls, cows } = calculateBullsAndCows(guessArray, secretCombination);
    setAttempts([{ guess, bulls, cows }, ...attempts]); // Adiciona a tentativa à lista
    setGuess(''); // Limpa o campo de input após a tentativa
  };

  const revealCombination = () => {
    alert(`A combinação secreta era: ${secretCombination.join('')}`);
  };

  return (
    <section id="bulls-and-cows">
      <h1 className="emphasis">Jogo Bulls and Cows</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="guess">Tente adivinhar a combinação (4 números): </label>
        <input
          type="text"
          id="guess"
          value={guess}
          onChange={handleGuessChange}
          maxLength={4}
          pattern="[0-9]{4}"
          required
        />
        <button type="submit">Submeter Tentativa</button>
      </form>

      <h2>Histórico de Tentativas:</h2>
      <ul>
        {attempts.map((attempt, index) => (
          <li key={index}>
            Tentativa {index + 1}: {attempt.guess} - {attempt.bulls} Bulls, {attempt.cows} Cows
          </li>
        ))}
      </ul>

      <button onClick={revealCombination}>Revelar Combinação</button>
    </section>
  );
}

export default BullAndCows;
