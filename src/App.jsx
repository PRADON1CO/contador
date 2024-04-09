import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Informacion from "./components/Informacion";

function App() {
  return (
    <>
      <main className="container my-5">
        <h1>Primer proyecto con React</h1>
        <Informacion comision="c89i"></Informacion>
        {/* <Informacion comision="c89i"/> */}
      </main>
    </>
  );
}

export default App;
