import styles from './Text.module.css';

function Text({title, titleSize = '64px', subtitle, subtitleSize = '16px'}) {
    return (
        <>
            <h1 className={`${styles.title} ${titleSize && styles.titleCustom}`}
                style={{fontSize: titleSize}}>
                {title}
            </h1>
            <h2 className={`${styles.subtitle} ${subtitleSize && styles.subtitleCustom}`} 
                style={{fontSize: subtitleSize}}>
                {subtitle}
            </h2>
        </>
    )
}

export default Text;