import { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Text from '../../components/Text/Text';
import styles from './Auth.module.css';

function Auth({state, dispatch}) {
    const [value, setValue] = useState();

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const auth = () => {
        dispatch({type: 'LOGIN_SUCCESS',
            payload: {name: value, isLogined: true}
        })
    }

    return (
        <div className={styles.auth}>
            <Text title = 'Вход' />
            <Input placeholder = 'Ваше имя' padd = '16px' onChange={onChange}/>
            <Button title = 'Войти в профиль' onClick={auth}/>
        </div>
    );
}

export default Auth;