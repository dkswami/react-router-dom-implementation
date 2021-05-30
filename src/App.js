import logo from './logo.svg';
import { Route, Link } from 'react-router-dom';
import './App.css';

const HomePage = (props) => {
	console.log(props);
	return (
		<div>
			<h1>HOMEPage</h1>
			<Link to='/topics' >Go to topics</Link>
			<button onClick={ () => props.history.push('/topics') }>Go to topics using button</button>
		</div>
	);
};

const TopicsList = (props) => {
	console.log(props);
	return (
		<div>
			<h1>TOPIC  LIST Page</h1>
		</div>
	);
};

const TopicDetail = (props) => {
	console.log(props);
	return (
		<div>
			<h1>TOPIC  DETAIL Page</h1>
		</div>
	);
};

function App() {
  return (
    <div>
	    <Route  path='/' component={ HomePage } />
	    <Route exact path='/topics' component={ TopicsList } />
	    <Route  path='/topics/:topicId' component={ TopicDetail } />
    </div>
  );
}

export default App;
