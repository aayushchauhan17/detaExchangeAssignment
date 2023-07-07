import { Provider } from "react-redux";
import "./App.css";
import Main from "./components/Main";
import store from "./redux/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
}

export default App;
