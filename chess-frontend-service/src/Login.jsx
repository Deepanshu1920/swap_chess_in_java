import React, { useState, useEffect } from 'react';

const chessPieces = ['♔', '♕', '♖', '♗', '♘', '♙', '♚', '♛', '♜', '♝', '♞', '♟'];

function FloatingPiece({ piece, style }) {
  return (
    <span style={{
      position: 'absolute',
      fontSize: style.size,
      color: style.color,
      opacity: style.opacity,
      top: style.top,
      left: style.left,
      animation: `float ${style.duration} ease-in-out infinite`,
      animationDelay: style.delay,
      pointerEvents: 'none',
      userSelect: 'none',
      filter: 'blur(0.5px)',
    }}>
      {piece}
    </span>
  );
}

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [focused, setFocused] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [boardFlash, setBoardFlash] = useState(false);

  const floaters = Array.from({ length: 14 }, (_, i) => ({
    piece: chessPieces[i % chessPieces.length],
    style: {
      size: `${1.2 + (i % 3) * 0.8}rem`,
      color: i % 2 === 0 ? 'rgba(220,190,130,0.18)' : 'rgba(255,255,255,0.10)',
      opacity: 1,
      top: `${(i * 7 + 5) % 95}%`,
      left: `${(i * 13 + 3) % 95}%`,
      duration: `${5 + (i % 4) * 1.5}s`,
      delay: `${(i * 0.4) % 3}s`,
    }
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setBoardFlash(true);
    setTimeout(() => setBoardFlash(false), 600);
  };

  const board = Array.from({ length: 64 }, (_, i) => {
    const row = Math.floor(i / 8);
    const col = i % 8;
    return (row + col) % 2 === 0;
  });

  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0c0a 0%, #1a1410 40%, #0d1117 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      position: 'relative',
      overflow: 'hidden',
    },
    boardBg: {
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      opacity: boardFlash ? 0.18 : 0.07,
      transition: 'opacity 0.3s ease',
      pointerEvents: 'none',
      zIndex: 0,
    },
    boardCell: (isLight) => ({
      background: isLight ? '#c8a96e' : '#3d2b1f',
    }),
    card: {
      position: 'relative',
      zIndex: 10,
      background: 'linear-gradient(160deg, rgba(30,22,14,0.97) 0%, rgba(20,16,10,0.99) 100%)',
      border: '1px solid rgba(200,169,110,0.3)',
      borderRadius: '4px',
      padding: '56px 52px 48px',
      width: '100%',
      maxWidth: '400px',
      boxShadow: '0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(200,169,110,0.1), inset 0 1px 0 rgba(200,169,110,0.15)',
    },
    cornerTL: {
      position: 'absolute', top: 12, left: 12,
      width: 18, height: 18,
      borderTop: '2px solid rgba(200,169,110,0.6)',
      borderLeft: '2px solid rgba(200,169,110,0.6)',
    },
    cornerTR: {
      position: 'absolute', top: 12, right: 12,
      width: 18, height: 18,
      borderTop: '2px solid rgba(200,169,110,0.6)',
      borderRight: '2px solid rgba(200,169,110,0.6)',
    },
    cornerBL: {
      position: 'absolute', bottom: 12, left: 12,
      width: 18, height: 18,
      borderBottom: '2px solid rgba(200,169,110,0.6)',
      borderLeft: '2px solid rgba(200,169,110,0.6)',
    },
    cornerBR: {
      position: 'absolute', bottom: 12, right: 12,
      width: 18, height: 18,
      borderBottom: '2px solid rgba(200,169,110,0.6)',
      borderRight: '2px solid rgba(200,169,110,0.6)',
    },
    icon: {
      display: 'block',
      textAlign: 'center',
      fontSize: '2.8rem',
      marginBottom: '4px',
      filter: 'drop-shadow(0 0 12px rgba(200,169,110,0.5))',
    },
    title: {
      textAlign: 'center',
      color: '#c8a96e',
      fontSize: '1.65rem',
      fontWeight: 'normal',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      marginBottom: '4px',
    },
    subtitle: {
      textAlign: 'center',
      color: 'rgba(200,169,110,0.4)',
      fontSize: '0.7rem',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      marginBottom: '40px',
    },
    divider: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '32px',
    },
    dividerLine: {
      flex: 1,
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.25), transparent)',
    },
    dividerDot: {
      color: 'rgba(200,169,110,0.4)',
      fontSize: '0.5rem',
    },
    label: {
      display: 'block',
      color: 'rgba(200,169,110,0.7)',
      fontSize: '0.65rem',
      letterSpacing: '0.25em',
      textTransform: 'uppercase',
      marginBottom: '8px',
    },
    inputWrap: {
      position: 'relative',
      marginBottom: '24px',
    },
    input: (isFocused) => ({
      width: '100%',
      background: isFocused ? 'rgba(200,169,110,0.05)' : 'rgba(255,255,255,0.02)',
      border: `1px solid ${isFocused ? 'rgba(200,169,110,0.6)' : 'rgba(200,169,110,0.18)'}`,
      borderRadius: '2px',
      color: '#e8d5a8',
      fontSize: '0.95rem',
      padding: '13px 16px',
      outline: 'none',
      transition: 'all 0.25s ease',
      boxSizing: 'border-box',
      fontFamily: 'inherit',
      boxShadow: isFocused ? '0 0 0 3px rgba(200,169,110,0.07), inset 0 1px 0 rgba(200,169,110,0.05)' : 'none',
    }),
    btn: {
      width: '100%',
      padding: '14px',
      background: hovered
        ? 'linear-gradient(135deg, #c8a96e 0%, #a8883e 100%)'
        : 'linear-gradient(135deg, #b89558 0%, #9a7730 100%)',
      border: 'none',
      borderRadius: '2px',
      color: '#0f0c0a',
      fontSize: '0.75rem',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      fontFamily: 'inherit',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginTop: '8px',
      transition: 'all 0.2s ease',
      transform: hovered ? 'translateY(-1px)' : 'translateY(0)',
      boxShadow: hovered
        ? '0 8px 24px rgba(200,169,110,0.35)'
        : '0 4px 12px rgba(200,169,110,0.2)',
    },
    footer: {
      textAlign: 'center',
      marginTop: '28px',
      color: 'rgba(200,169,110,0.35)',
      fontSize: '0.72rem',
      letterSpacing: '0.1em',
    },
    footerLink: {
      color: 'rgba(200,169,110,0.65)',
      textDecoration: 'none',
      borderBottom: '1px solid rgba(200,169,110,0.25)',
      paddingBottom: '1px',
      cursor: 'pointer',
    },
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(5deg); }
        }
        input::placeholder { color: rgba(200,169,110,0.2); }
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 100px #1a1410 inset !important;
          -webkit-text-fill-color: #e8d5a8 !important;
        }
      `}</style>

      <div style={styles.page}>
        {/* Chess board background */}
        <div style={styles.boardBg}>
          {board.map((isLight, i) => (
            <div key={i} style={styles.boardCell(isLight)} />
          ))}
        </div>

        {/* Floating chess pieces */}
        {floaters.map((f, i) => (
          <FloatingPiece key={i} piece={f.piece} style={f.style} />
        ))}

        {/* Login card */}
        <div style={styles.card}>
          <div style={styles.cornerTL} />
          <div style={styles.cornerTR} />
          <div style={styles.cornerBL} />
          <div style={styles.cornerBR} />

          <span style={styles.icon}>♔</span>
          <h1 style={styles.title}>Swap Chess</h1>
          <p style={styles.subtitle}>Enter the board</p>

          <div style={styles.divider}>
            <div style={styles.dividerLine} />
            <span style={styles.dividerDot}>◆</span>
            <div style={styles.dividerLine} />
          </div>

          <form onSubmit={handleSubmit}>
            <div style={styles.inputWrap}>
              <label style={styles.label}>Username</label>
              <input
                type="text"
                placeholder="your handle"
                value={username}
                onChange={e => setUsername(e.target.value)}
                onFocus={() => setFocused('user')}
                onBlur={() => setFocused(null)}
                style={styles.input(focused === 'user')}
                required
              />
            </div>

            <div style={styles.inputWrap}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onFocus={() => setFocused('pass')}
                onBlur={() => setFocused(null)}
                style={styles.input(focused === 'pass')}
                required
              />
            </div>

            <button
              type="submit"
              style={styles.btn}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Make Your Move
            </button>
          </form>

          <div style={styles.footer}>
            No account?{' '}
            <span style={styles.footerLink}>Join the game</span>
            <br /><br />
            <span>Forgot password?{' '}</span>
            <span style={styles.footerLink}>Reset</span>
          </div>
        </div>
      </div>
    </>
  );
}
