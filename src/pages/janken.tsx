import { useState } from 'react';

const Janken: React.FC = () => {
  const choices: Array<'グー' | 'チョキ' | 'パー'> = ['グー', 'チョキ', 'パー'];
  const [userChoice, setUserChoice] = useState<'グー' | 'チョキ' | 'パー' | null>(null);
  const [computerChoice, setComputerChoice] = useState<'グー' | 'チョキ' | 'パー' | null>(null);
  const [result, setResult] = useState<{ message: string; image?: string } | null>(null);

  const playJanken = (userSelection: 'グー' | 'チョキ' | 'パー') => {
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(userSelection);
    setComputerChoice(computerSelection);

    if (userSelection === computerSelection) {
      setResult({ message: '引き分け' });
    } else if (
      (userSelection === 'グー' && computerSelection === 'チョキ') ||
      (userSelection === 'チョキ' && computerSelection === 'パー') ||
      (userSelection === 'パー' && computerSelection === 'グー')
    ) {
      setResult({ message: '勝ち' });
    } else {
      setResult({ message: '負け', image: '/images/lose.png' });
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
          <h2>結果: {result?.message}</h2>
          {result?.image && (
            <div style={{ marginTop: '20px' }}>
              <img
                src={result.image}
                alt="負け画像"
                style={{ maxWidth: '300px', height: 'auto' }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Janken;
