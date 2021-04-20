import { Provider, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import PrimaryTemplate from "./components/PrimaryTemplate";
import store from "./store";

const Foo = () => {
  const { count } = useSelector((state: any) => state.counter);

  return <h1>Hello {count}</h1>;
};

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PrimaryTemplate />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
