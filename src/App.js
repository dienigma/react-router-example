import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = props => {
  return <h1>Home Page</h1>;
};

const About = props => {
  return <h1>About</h1>;
};

const Topic = ({ match }) => {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
};

const Topics = ({ match }) => {
  return (
    <div>
      <h2>topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering With React</Link>
        </li>
        <li>
          <Link to={`${match.url}/Components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props V. state</Link>
        </li>
      </ul>
      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic</h3>}
      />
    </div>
  );
};
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default App;
