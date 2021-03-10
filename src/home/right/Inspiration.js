import React from 'react'

import { Button } from 'primereact/button'

const Inspiration = ()  => {

   

    return (
        <div>
            <Toast ref={toast} />
            <div>
                <h5>Inspiration</h5>
                <Button onClick={showToast} label="Inspiration" className="p-button-success" />
            </div>
        </div>
    )
}

export default Inspiration