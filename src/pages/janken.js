// pages/janken.js
import { useState } from 'react';

const Janken = () => {
  const choices = ['グー', 'チョキ', 'パー'];
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const playJanken = (userSelection) => {
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(userSelection);
    setComputerChoice(computerSelection);

    if (userSelection === computerSelection) {
      setResult('引き分け');
    } else if (
      (userSelection === 'グー' && computerSelection === 'チョキ') ||
      (userSelection === 'チョキ' && computerSelection === 'パー') ||
      (userSelection === 'パー' && computerSelection === 'グー')
    ) {
      setResult('勝ち');
    } else {
      setResult('負け');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>じゃんけんゲーム</h1>
      <div>
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => playJanken(choice)}
            style={{
              margin: '10px',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            {choice}
          </button>
        ))}
      </div>
      {userChoice && (
        <div style={{ marginTop: '20px' }}>
          <p>あなたの選択: {userChoice}</p>
          <p>コンピュータの選択: {computerChoice}</p>
          <h2>結果: {result}</h2>
        </div>
      )}
    </div>
  );
};

export default Janken;
