import { useState } from 'react';
import './Votes.css';

function Votes() {
  const [voteCounts, setVoteCounts] = useState<Record<string, number>>({
    Vanilla: 0,
    Chocolate: 0,
    Strawberry: 0,
  });

  const flavorColors: Record<string, string> = {
    Vanilla: '#cbc0ac',
    Chocolate: '#4f2c2c',
    Strawberry: '#de8c91',
  };

  const totalVotes: number = Object.values(voteCounts).reduce((total, count) => total + count, 0);

  const handleVote = (flavor: string) => {
    setVoteCounts((prevCounts) => ({
      ...prevCounts,
      [flavor]: prevCounts[flavor] + 1,
    }));
  };

  return (
    <div className="votes">
      <h2>Votes</h2>
      <div className="vote-buttons">
        {Object.keys(voteCounts).map((flavor) => (
          <div key={flavor} className="vote-item">
            <button onClick={() => handleVote(flavor)}>{flavor}</button>
          </div>
        ))}
      </div>
      <div className="vote-bars">
        {Object.keys(voteCounts).map((flavor) => (
          <div key={flavor} className="vote-bar">
            <div className="bar-header">
              <div className="flavor-color" style={{ backgroundColor: flavorColors[flavor] }}></div>
              <div className="flavor-name">{flavor}</div>
            </div>
            <div className="bar-graph">
              <div className="bar" style={{ backgroundColor: flavorColors[flavor], width: `${(voteCounts[flavor] / totalVotes) * 100}%` }}>
                <div className="vote-count">{voteCounts[flavor]}</div>
                <div className="percentage">
                  {totalVotes === 0 ? '0%' : `${((voteCounts[flavor] / totalVotes) * 100).toFixed(2)}%`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Votes };
