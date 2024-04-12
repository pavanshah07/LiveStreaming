import {Routes , Route} from "react-router-dom"
import Home from './components/Home/Home';
import Room from './components/Room/Room';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/room/:roomid' element={<Room />} />

    </Routes>
    </>
  );
}

export default App;
