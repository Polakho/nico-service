import React, { useState } from 'react'

function Home() {
    const [clicked, setClicked] = useState(false)

    const toggleClicked = () => {
        setClicked(clicked => !clicked )
    }

     return (
        <div>
            <p>{ clicked ? 'oui' : 'non' }</p>
            { clicked
                ? <div>
                    toute une pqge
                </div>
                : <div>
                    erreur
                </div>
            }
            <button onClick={() => toggleClicked() }>CLIQUE</button>
        </div>
    )
}

export default Home