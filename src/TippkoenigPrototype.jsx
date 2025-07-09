import React from "react";

export default function TippkoenigPrototype() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', color: 'white', padding: '1.5rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>MyDealz Tippkönig 🏆</h1>
        <p style={{ marginTop: '0.5rem', color: '#d1d5db' }}>Predict Bundesliga matches. Climb the leaderboard. Glory awaits.</p>
      </header>

      <main style={{ maxWidth: '768px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#1f2937', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Bayern Munich vs Borussia Dortmund</h2>
              <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Saturday, 17 Aug 2025 - 18:30 CET</p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input type="number" min="0" max="9" style={{ width: '3rem', textAlign: 'center', borderRadius: '0.25rem', backgroundColor: '#111827', border: '1px solid #374151' }} placeholder="1" />
              <span style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>:</span>
              <input type="number" min="0" max="9" style={{ width: '3rem', textAlign: 'center', borderRadius: '0.25rem', backgroundColor: '#111827', border: '1px solid #374151' }} placeholder="2" />
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#1f2937', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.5rem' }}>Bonus Question</h3>
          <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: '#d1d5db' }}>Who will finish the first weekend top of the table?</p>
          <input type="text" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.25rem', backgroundColor: '#111827', border: '1px solid #374151', color: 'white' }} placeholder="Enter team name" />
        </div>

        <div style={{ textAlign: 'center' }}>
          <button style={{ backgroundColor: '#16a34a', padding: '0.5rem 1.5rem', borderRadius: '9999px', color: 'white', border: 'none' }}>Submit Predictions</button>
        </div>
      </main>
    </div>
  );
}