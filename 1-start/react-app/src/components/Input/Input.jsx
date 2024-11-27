import './Input.css'

function Input({placeholder, image, padd}) {
    const padding = {
        paddingLeft: padd
    }
    return (
        <>
            {image ? <img className='find-icon' src={image} alt='Иконка поиска' /> : ''}
            <input className='input' placeholder={placeholder} style={padding}/>
        </>
    );
}

export default Input;

