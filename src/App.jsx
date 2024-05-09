import './App.css';
import AnimatedBackgroundShapesDark from './components/AnimatedBackgroundShapesDark';
import AnimatedBackgroundShapesLight from './components/AnimatedBackgroundShapesLight';

function App() {
  return (
    <div className='app'>
      <AnimatedBackgroundShapesLight />
      <AnimatedBackgroundShapesDark />
    </div>
  );
}

export default App;
