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
			<Link to={ `${props.match.url}/121`}>open 121 topic</Link><break/>
			<Link to={ `${props.match.url}/144`}>open 144 topic</Link><break/>
			<Link to={ `${props.match.url}/156`}>open 156 topic</Link>

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
	    <Route  exact path='/' component={ HomePage } />
	    <Route exact path='/oldblog/topics' component={ TopicsList } />
	    <Route  path='/oldblog/topics/:topicId' component={ TopicDetail } />
	    <Route exact path='/newblogs/topics' component={ TopicsList } />
	    <Route  path='/newblogs/topics/:topicId' component={ TopicDetail } />
    </div>
  );
}

export default App;
