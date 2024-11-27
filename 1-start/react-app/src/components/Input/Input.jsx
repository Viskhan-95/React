import styles from './Input.module.css'

function Input({placeholder, image, padd}) {
    const padding = {
        paddingLeft: padd
    }
    return (
        <>
            {image ? <img className={styles.findIcon} src={image} alt='Иконка поиска' /> : ''}
            <input className={styles.input} placeholder={placeholder} style={padding}/>
        </>
    );
}

export default Input;

