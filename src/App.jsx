import { useState } from 'react'

function App() {
  const [name, setName] = useState("Ceren")
  const [coffee, setCoffee] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  const textColor = darkMode ? '#a687a5' : '#0d83f9'
  const backgroundColor = darkMode ? '#242424' : '#faf8f5'

  return (
    <>
      <div style={{
        backgroundColor: backgroundColor, 
        minHeight: '100vh',
        transition: 'all 0.3s ease', 
        textAlign: 'center', 
        paddingTop: '50px',
        fontFamily: 'sans-serif'
      }}>

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: darkMode ? '#fff' : '#333',
            color: darkMode ? '#0055ff' : '#fff',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Night Mode'}
        </button>

        <h1 style={{ color: textColor, marginBottom: '20px' }}>
          Welcome {name} to our World
        </h1>

        <button 
          onClick={() => setName("You're amazing!")}
          style={{
            backgroundColor: '#3498db',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Click on me!!
        </button>

        <hr style={{ margin: '40px auto', width: '30%', opacity: '0.15' }} />

        <h2 style={{ color: textColor }}>
          CoffeeCounter: {coffee}
        </h2>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '15px' }}>
          <button 
            onClick={() => setCoffee(coffee + 1)}
            style={{
              backgroundColor: darkMode ? '#fff' : '#242424',
              color: darkMode ? '#242424' : '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            add(+)
          </button>
          
          <button 
            onClick={() => setCoffee(coffee - 1)}
            style={{
              backgroundColor: darkMode ? '#fff' : '#242424',
              color: darkMode ? '#242424' : '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            remove(-1)
          </button>
        </div>

      </div> 
    </>
  )
}

export default App