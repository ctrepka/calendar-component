import React from 'react';
import './App.css';

import Calendar from './components/Calendar'

function App() {
  
  
  return (
    <React.Fragment>

      <Calendar data={{ 
        '2020-6-16': { 
          'events': [
            {
              'name': 'event1',
              'location': 'location1',
              'time': '3:00pm CST'
            },
            {
              'name': 'event1',
              'location': 'location1',
              'time': '3:00pm CST'
            }
          ]
        }
      }} />  
    </React.Fragment>
  );
}

export default App;
