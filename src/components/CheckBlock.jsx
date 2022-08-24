export default function CheckBlock({ setIsDisabled, isDisabled }) {
    function getStyle(isDisabled) {
        return isDisabled ? '0.3rem solid red' : '0.3rem dotted grey';
    }
    return <div 
            style={{ 
                border: getStyle(isDisabled), 
                padding: '2rem 3rem', 
                margin: '3rem',
                borderRadius: '1rem',
                minWidth: '30vw'
            }}>
                <h3>The button is {isDisabled ? 'disabled' : 'enabled'}</h3>
                <input 
                 style={{
                    width: '3rem', 
                    height: '3rem',
                    cursor: 'pointer'
                 }} 
                 data-test-checkblock-input
                 type="checkbox"
                 value={isDisabled}
                 onChange={() => setIsDisabled(!isDisabled)}
                />
    </div>
}