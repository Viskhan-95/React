import './Subtitle.css';

function Subtitle({text, size = '16px'}) {
    return (
        <h2 className={`subtitle ${size && 'subtitle-custom'}`} 
            style={{fontSize: size}}>
            {text}
        </h2>
    )
}

export default Subtitle;
