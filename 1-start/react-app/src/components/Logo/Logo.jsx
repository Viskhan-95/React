import './Logo.css'

function Logo({ image }) {
    return (
        <img className='logo' src={image} alt='Логотип' />
    );
}

export default Logo;