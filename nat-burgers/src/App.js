import './App.css';
import {useState} from 'react'
// import Ingredients from './Ingredients';


function App() {

let starterData = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
];

const[ingredients, setIngredients] = useState(starterData)
const[arr, setArr] = useState([])

const addToArr = (item) => {
  setArr({...arr, item})
}

const pushToArr = (item) => {
  let newArr = [...stack]
  newArr.shift(item)
  setStack({newArr})
}

const addToArr2 = (item) => {
  let newArr = [...arr]
  newArr.push(item)
  setArr(newArr)
}

return (
  <div className="App">
    <h1>Burger Stack</h1>
    <div className="content">
      <div className="ingredientList">
        <h1> Ingredient List</h1>
        {ingredients.map((item, i) =>
        <div className="ingredient"style={backgroundColor:item.color}}
           onClick={() => pushToArr(item)}key={i}>
            {item.name}</div>
          )}
        </div>
        <div>
              <div className="stackContainer">
          <h1>My Stack</h1>
          {stack.map((item, i) => (
            <div style={{backgroundColor: item.color}} >
              {item.name}</div>
          ))}
        </div>
      </div>
    </div>

);
}


export default App
