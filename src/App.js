import './App.css';
import Ai from './Component/SvgExamples/Ai';
import Polygon from './Component/SvgExamples/Polygon';
import Laptop from './Component/SvgExamples/Laptop';
import Skater from './Component/SvgExamples/Skater';
import Find from './Component/Find';
import girl from './Component/SvgExamples/girl';
import http from './Component/SvgExamples/http';
import react from './Component/SvgExamples/react';
import circle from './Component/SvgExamples/circle';
import xary from './Component/SvgExamples/xary';

function App() {
  return (
    <div className="App">
      <Find SvgElement={Polygon} />
      <Find SvgElement={Laptop} />
      <Find SvgElement={Ai} />
      <Find SvgElement={Skater} />
      <Find SvgElement={girl} />
      <Find SvgElement={http} />
      <Find SvgElement={react} />
      <Find SvgElement={circle} />
      <Find SvgElement={xary} />



    </div>
  );
}

export default App;
