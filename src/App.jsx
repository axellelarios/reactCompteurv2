import { useState } from 'react'
import './App.css'
import Compteur from './components/Compteur'
 
function App() {
  // Je créé mon state qui va récupérer mes numéro de compteurs
  const [tab, setTab] = useState([]) 
  // Je créé ma constante pour la limitation des compteurs
  const limit = 3
  return (
    <>
      <main>
        <div className='container'>
            <div className='top-wrapper'>
              <button style={{display: tab.length == limit ? "none" : "flex"}} onClick={() => {
                // Je copie mon tableau tab dans un nouveau tableau
                if (tab.length < limit) {
                  const newTab = [...tab]             
                  // mise à jour du state avec la copie avec la valeur 0 car le compteur est initialisé
                  newTab.push(0)
                  // Setting the state avec le nouveau tableau
                  setTab(newTab) 
                  }            
              }}>Ajouter un compteur</button> 
            </div>
            <div className="compteur">
                {tab.map((compteurNumber,index) => {
                    return <Compteur key={index} setTab={setTab} tab={tab} index={index} counter={compteurNumber} />
                })}
            </div>
        </div>
      </main>
    </>
  )
}

export default App
