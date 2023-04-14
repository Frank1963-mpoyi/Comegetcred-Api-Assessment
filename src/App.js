import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/header/Header'
import HomePage from './components/pages/HomePage'
import {DataProvider} from './GlobalState'


function App() {
  return (
    <DataProvider>
        <Router>
          <Header/>
          <HomePage/>
      </Router>
    </DataProvider>
   
  );
}

export default App;
