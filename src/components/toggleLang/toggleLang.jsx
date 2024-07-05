import React from 'react';

const ToggleLang = (props) => {
    return (
        <div>
            <button onClick={() => props.setSpanish((prev) => !prev)}>{props.isSpanish ? "EN" : "ES"}</button>
        </div>
    );
}

export default ToggleLang;
