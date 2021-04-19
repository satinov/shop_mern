import { useEffect } from "react";
import { Link, Route } from "react-router-dom";

const Foo = (props: any) => {
  console.log(props.match.params.id);
  useEffect(() => {
    console.log("mount");
  }, []);

  return <h1>Hello</h1>;
};

function App() {
  return (
    <div className="App">
      <Link to="/foo/1">1</Link>
      <Link to="/foo/2">2</Link>
      {/* <Route path="/foo/:id">
        <Foo />
      </Route> */}
      <Route path="/foo/:id" component={Foo} />
    </div>
  );
}

export default App;
