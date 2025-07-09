
import Link from 'next/link';
import { useState } from 'react';
import fixtures from '../data/fixtures.json';

export default function Home() {
  const [predictions, setPredictions] = useState({});

  const handleChange = (matchId, value) => {
    setPredictions({ ...predictions, [matchId]: value });
  };

  const handleSubmit = () => {
    console.log('Predictions submitted:', predictions);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Welcome to Tippkönig 🏆</h1>
      <p>Predict match outcomes below:</p>
      <ul>
        {fixtures.map((match) => (
          <li key={match.id}>
            {match.home} vs {match.away}
            <input
              type="text"
              placeholder="Your prediction"
              value={predictions[match.id] || ''}
              onChange={(e) => handleChange(match.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit Predictions</button>
      <br/><br/>
      <Link href="/leaderboard">View Leaderboard</Link>
    </div>
  );
}
