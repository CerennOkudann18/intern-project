import { useState } from 'react'
import NavBar from './components/NavBar'

function App() {
  const [name, setName] = useState("Ceren's")
  const [coffee, setCoffee] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  const textColor = darkMode ? '#e784b5' : '#8ec7ff'
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

        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

        <h1 style={{ color: textColor, marginBottom: '20px', marginTop: '40px' }}>
          Welcome to {name} World
        </h1>

        <button 
          onClick={() => setName("an amazing world")}
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
          CLICK ON ME 
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