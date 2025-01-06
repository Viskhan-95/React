import styles from './FindBlock.module.css';

function FindBlock({ children }) {
    return (
        <div className={styles.findBlock}>
            {children}
        </div>
    );
}

export default FindBlock;