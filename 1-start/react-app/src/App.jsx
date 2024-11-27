import './App.css'
import Button from './components/Button/Button'
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Subtitle from './components/Subtitle/Subtitle';
import Title from './components/Title/Title'
import FindBlock from './layouts/FindBlock';
import {data} from './assets/db';

function App() {

	return (
    	<>
      		<Header />
			<FindBlock>
				<Title text='Поиск'/>
				<Subtitle text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.' />
				<Input placeholder='Введите название' image='./findIcon.svg' padd='56px'/>
				<Button title='Искать'/>
        	</FindBlock>
			<CardList data={data}/>
      	</>
  	)
}

export default App;
