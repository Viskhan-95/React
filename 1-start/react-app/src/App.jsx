import './App.css'
import Button from './components/Button/Button'
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Text from './components/Text/Text'
import FindBlock from './layouts/FindBlock/FindBlock';
import {data} from './assets/db';
import Auth from './layouts/AuthBlock/Auth';
import { useReducer } from 'react';
import { authReducer, init } from './layouts/AuthBlock/Auth.state';
import { getDataLocalStorage } from './hooks/use-localstorage.hook';

function App() {
	const users = getDataLocalStorage();

	const [state, dispatch] = useReducer(authReducer, users, init);
	return (
    	<>
			<Header state={state} dispatch={dispatch}/>
			<FindBlock>
				<Text title='Поиск' subtitle='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'/>
				<Input placeholder='Введите название' image='./findIcon.svg' padd='56px'/>
				<Button title='Искать'/>
        	</FindBlock>
			<CardList data={data}/>
			<Auth state={state} dispatch={dispatch}/>
      	</>
  	)
}

export default App;
