// STATE
// React components have a built in state object. The state object is where property values that belong to the component are stored. When the state object changes, the component re-renders.

// The following import must be included at the beginning of any file that has a component using the the useState function (AKA Any component using the useState hook)
import { useState } from 'react';

const State = () => {
  // The useState function sets the starting state value to the argument that is passed into the useState function
  // The useState function returns an array of two items: The first item is a reference to the value passed into the useState function. The second item a function that can be used to update the value passed into the useState function.
  // Destructuring is used to set the these values to variables which are used in the component. Also, it is common practice to use the variable name that is set to the first item to create the variable name for the 2nd item with "set" preceding it (Example: [chickens, setChickens]).
  const [daysLeft, setDaysLeft] = useState(4);
  const [isFavorite, setIsFavorite] = useState(true);
  const toggleFavorite = () => setIsFavorite(!isFavorite);

  return(
    <div>
      <h1>This is the State Component</h1>
      <h1>{daysLeft} class left</h1>
      {/* When the setDaysLeft function is executed/run it uses the value that is passed to set the new value for daysLeft and then re-renders the component */}
      <button onClick={() => setDaysLeft(daysLeft - 1)}>Subtract A Day</button>
      {/* NOTE: Unlike If Statements, Ternaries return a value */}
      <h1>React {isFavorite ? 'IS' : 'IS NOT'} my favorite</h1>
      <button onClick={toggleFavorite}>CHANGE MIND</button>
    </div>
  );
}

export default State;