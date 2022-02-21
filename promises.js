
const myAsyncFunc = async () => {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await userResponse.json()
    console.log(users)
}
import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import "./App.css";
import { Homepage } from "./pages/homepage.component";


const MyHomePage = (props) => {
  console.log(props)
  return (
    <div>
    <button onClick={()=> props.history.push('/topics')}>My topics</button><br/>
    <Link to='/topics'>Topics</Link>
    <h1>My Home Page</h1>
    </div>
  )
}

const TopicPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Topics Page</h1>
      <Link to={`${props.match.url}/15`}>Topic 15</Link><br/>
      <Link to={`${props.match.url}/135`}>Topic 135</Link><br/>
      <Link to={`${props.match.url}/17`}>Topic 17</Link>
    </div>
  )
}

const TopicsDetail = (props) => {
console.log(props)
  return (
    <div>
      <h1>Topic Detail Page {props.match.params.topicId}</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route  exact path='/' component={MyHomePage} />
        <Route exact path='/topics' component={TopicPage} />
        <Route  exact path='/topics/:topicId' component={TopicsDetail} />
      </Switch>
    </div>
  );
}

export default App;
