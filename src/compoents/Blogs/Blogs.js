import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="blogs">
      <div className="questions">
        <div className="ques-ans">
          <h1>How React works?</h1>
          <p>
            In most cases, React is written using JSX instead of standard
            JavaScript to simplify components and keep code clean.A React app
            usually has a single root DOM node. Rendering an element into the
            DOM will change the user interface of the page.Whenever a React
            component returns an element, the Virtual DOM will update the real
            DOM to match.
          </p>
          <p>
            React uses a declarative paradigm that makes it easier to reason
            about your application and aims to be both efficient and flexible.
            It designs simple views for each state in your application, and
            React will efficiently update and render just the right component
            when your data changes
          </p>
        </div>
        <div className="ques-ans">
          <h1>What are the differences between props and state ?</h1>
          <p>
            Props are known as properties it can be used to pass data from one
            component to another. Props cannot be modified, read-only, and
            Immutable.The state represents parts of an Application that can
            change. Each component can have its State. The state is Mutable and
            It is local to the component only.
          </p>
          <p>
            Props are used to pass data from one component to another. The state
            is a local data storage that is local to the component only and
            cannot be passed to other components. The this.setState property is
            used to update the state values in the component.
          </p>
        </div>
        <div className="ques-ans">
          <h1>Where useEffect is used beside Api data load?</h1>
          <p>
            useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data,
            directly updating the DOM, and timers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
