import Button from './Button'
import './App.css';
import ComponenteA from './ComponentA';
import ComponenteB from './ComponentB';

function soma(a,b) {
    alert(a+b)
}

function App() {

  return (
    <div className="App">
      Hello World
      <Button onClick = {()=> soma(10,20)} name="Renan Makiya"/>
      <ComponenteA>
        <ComponenteB>
        <Button onClick = {()=> soma(40,20)} name="Silvia Makiya"/>
        </ComponenteB>
      </ComponenteA>
    </div>
  );
}

export default App;
