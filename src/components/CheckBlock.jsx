import { useState } from "react";

export default function CheckBlock() {
    const [checked, setChecked] = useState(false);
    function getStyle(checked) {
        return checked ? '0.3rem solid red' : '0.3rem dotted grey';
    }
    function toggleChecked() {
        setChecked(!checked);
    }
    return <div 
            style={{ 
                border: getStyle(checked), 
                padding: '2rem 3rem', 
                margin: '3rem'
            }}>
                <h3>The checked value is {checked ? 'true' : 'false'}</h3>
                <input 
                 style={{
                    width: '3rem', 
                    height: '3rem',
                    cursor: 'pointer'
                 }} 
                 data-test-checkblock-input
                 type="checkbox"
                 value={checked}
                 onChange={toggleChecked}
                />
    </div>
}