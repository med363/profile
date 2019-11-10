import React from 'react';
import Profile from './components/Profile';


const obj = {
	photo:"/p.png",
	Name:{firstName:"med amine", lastName:"blibech"},
	profileLink:"https://www.facebook.com/medamine.blibech"
}


function App() {
  return (
    <div>
      <p>test</p>
      <Profile amine={obj} />
    </div>
  );
}

export default App;
