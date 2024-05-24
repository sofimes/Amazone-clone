import { useContext, useEffect } from "react";
import "./App.css";
import Routing from "./Routing";
import { DataContext } from "./components/Dataproider/Dataprovider";
import { auth } from "./Utility/Firebase";
import { Type } from "./Utility/Actiontype";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: Type.SET_USER, user: authUser });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });
  }, []);
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
