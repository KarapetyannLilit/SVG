import logo from './logo.svg';
import './App.css';
import Main from './Component/Main';
import Svg from './Component/Svg';
import Ai from './Component/Ai';
import Star from './Component/Star';
import Polygon from './Component/Polygon';
import Laptop from './Component/Laptop';
import People from './Component/People';
import Skater from './Component/Skater';
import ComplexSvgs from './Component/ComplexSvgs';
import Find from './Component/Find';
import girl from './Component/girl';

function App() {
  return (
    <div className="App">
      {/* <Main SvgElement={Svg} /> */}
      {/* <Main SvgElement={Ai} /> */}
      <Find SvgElement={Polygon} />
      <Find SvgElement={Laptop} />
      <Find SvgElement={Ai} />
      <Find SvgElement={Skater} />
      <Find SvgElement={girl} />


    </div>
  );
}

export default App;
