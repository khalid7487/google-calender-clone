import React ,{ useState, useContext, useEffect }from 'react';
import './App.css';
import CalenderHeader from './components/CalenderHeader';
import Month from './components/Month';
import Sidebar from './components/Sidebar';
import { getMonth } from './util';
import GlobalContext from './context/GlobalContext';

function App() {

  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const {monthIndex} = useContext(GlobalContext)

  useEffect(() =>{
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex])

  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <CalenderHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month= {currentMonth}/>
        </div>

      </div>
    </React.Fragment>
  );
}

export default App;
