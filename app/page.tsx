export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'system-ui, sans-serif',
        background: '#FAFAF7',
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          marginBottom: 32,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 84" width="80" height="67">
          <path
            d="M50 2 C75 2, 92 12, 96 35 C100 58, 90 75, 65 80 C40 85, 15 80, 8 58 C1 36, 10 15, 30 6 C36 3, 43 2, 50 2 Z"
            fill="#FFC200"
          />
          <g transform="translate(50, 44)">
            <rect x="-14" y="-22" width="7" height="22" rx="3.5" fill="#0A0A0A" />
            <rect x="-3.5" y="-26" width="7" height="26" rx="3.5" fill="#0A0A0A" />
            <rect x="7" y="-22" width="7" height="22" rx="3.5" fill="#0A0A0A" />
            <path
              d="M-18 -4 C-20 -1, -22 3, -20 8 C-18 14, -14 18, -10 20 C-4 23, 4 23, 10 20 C14 18, 18 14, 20 8 C22 3, 20 -1, 18 -4 C14 -6, 10 -5, 6 -4 L-6 -4 C-10 -5, -14 -6, -18 -4 Z"
              fill="#0A0A0A"
            />
          </g>
        </svg>
      </div>
      <h1
        style={{
          fontSize: 48,
          fontWeight: 700,
          letterSpacing: '-0.03em',
          margin: 0,
          color: '#0A0A0A',
        }}
      >
        <span style={{ fontWeight: 800 }}>Yellow</span>
        <span style={{ fontWeight: 500, color: '#3A3A3C' }}>Halal</span>
      </h1>
      <p
        style={{
          fontSize: 18,
          color: '#8E8E93',
          marginTop: 16,
        }}
      >
        Coming soon
      </p>
    </main>
  );
}
