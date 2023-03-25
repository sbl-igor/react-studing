import Cursor from './components/Cursor';
import Align from './components/Align'
import Greetings from './components/Greetings';

function App() {


  return (
    <>
    <Cursor />
    <hr/>
    <Align />
    <hr/>
    <Greetings userName='Igor'/>
    </>
  );
}

export default App;
