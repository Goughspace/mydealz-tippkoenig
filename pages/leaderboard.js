
const leaderboard = [
  { name: 'Alice', score: 12 },
  { name: 'Bob', score: 10 },
  { name: 'Charlie', score: 8 }
];

export default function Leaderboard() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Leaderboard</h1>
      <ol>
        {leaderboard.map((user, index) => (
          <li key={index}>{user.name}: {user.score} pts</li>
        ))}
      </ol>
    </div>
  );
}
