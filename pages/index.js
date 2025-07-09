import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to Tippkönig 🏆</h1>
      <p>Predict match outcomes below:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><b>Germany vs France</b> <input placeholder="Your prediction" /></li>
        <li><b>Spain vs Italy</b> <input placeholder="Your prediction" /></li>
        <li><b>England vs Netherlands</b> <input placeholder="Your prediction" /></li>
      </ul>
      <button style={{ marginTop: '1rem' }}>Submit Predictions</button>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/leaderboard">View Leaderboard</Link>
      </div>
    </div>
  );
}
