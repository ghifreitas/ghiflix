import { GlobalStyle } from "./components/GlobalStyle";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="App">
        <Header></Header>
      </div>
    </>
    
  );
}

export default App;
