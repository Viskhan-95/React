import styles from './Subtitle.module.css';

function Subtitle({text, size = '16px'}) {
    return (
        <h2 className={`${styles.subtitle} ${size && styles.subtitleCustom}`} 
            style={{fontSize: size}}>
            {text}
        </h2>
    )
}

export default Subtitle;
