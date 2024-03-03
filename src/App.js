import { Routes, Route } from 'react-router-dom';
import Session from '../src/routes/Session/index.js'

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/session" element={<Session />} />
       </Routes>
    </>
 );
};

export default App;