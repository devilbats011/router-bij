import "./styles.scss";

import React from 'react'

export default function Shape({children,...p}) {



    return (
        <div {...p} >
            {children}
        </div>
    )
}

