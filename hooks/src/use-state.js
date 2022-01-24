import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <HookSwitcher/>
    </div>
  );
};

const HookSwitcher = () => {
  const [color, setColor ] = useState('white');
  const [fontSize, setFontSize ] = useState(14);
  
  return(
    <div style={{padding: '10px', backgroundColor: color, fontSize: `${fontSize}px`}}>
      Hello world!
      <button onClick={() => setColor('grey')}>Dark</button>
      <button onClick={() => setColor('white')}>Light</button>
      <button onClick={() => setFontSize((s) => s + 4)}>Bigger font</button>
      <button onClick={() => setFontSize((s) => s - 4)}>Smoller font</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


