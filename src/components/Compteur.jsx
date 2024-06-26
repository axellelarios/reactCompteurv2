const Compteur = ({counter, index, tab, setTab}) => {

    return (
        <div className="compteur-wrapper">
            <div className='compteur-main'>

              <span className='compteur-minus'>
                <button style={{opacity: counter == 0 ? "0" : "1"}} onClick={() => {
                     // Bouton décrementation
                    if (counter != 0) {
                        const newTab = [...tab]             
                        // mise à jour du tableau à la position de index
                        newTab[index] = counter - 1
                        // Setting the state avec le nouveau tableau
                        setTab(newTab)  
                    }
                }}>-</button>
              </span>
              <span className='compteur-number'>
                {counter}
              </span>

              <span  className='compteur-plus'> 
                 <button style={{opacity: counter == 10 ? "0" : "1"}} onClick={() => {
                    // Boutton incrémentation
                    if (counter < 10) {
                        const newTab = [...tab]             
                        // mise à jour du tableau à la position de index
                        newTab[index] = counter + 1
                        // Setting the state avec le nouveau tableau
                        setTab(newTab)  
                    }
                    }}>+</button> 
              </span>
            </div>

            <div className='compteur-footer'>
              <button onClick={() => {
                    const newTab = [...tab]             
                    // mise à jour du tableau avec 0 
                    newTab[index] = 0
                    // Setting the state avec le nouveau tableau
                    setTab(newTab)  

                    }}>Reset</button>
            </div>
        </div>

    )
}

export default Compteur; 