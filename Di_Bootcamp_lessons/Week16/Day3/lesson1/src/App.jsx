import Event from '../components/Events';
import Test from '../components/Test'
import SetTitle from '../components/SetTitle';
import Counter from '../components/Counter';
import './App.css'

function App() {
  return (
    <>
      <Test status={"loading"}/>
      <Test status={"ready"}/>
      <Test status={"error"}/>
      <Event/>
      <SetTitle />
      <Counter />
    </>
  );
}

export default App;
