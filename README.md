# Add at least 3 Project features.
# Discuss how you managed the state in your assignment project.
I used `useState` hook to manage local state within a functional component. It allows to initialize and update state variables.
For managing states, I followed the steps given bellow: <br/><br/>
**1. Import the `useState` Hook <br/>
2. Initialize State <br/>
3. Updating State <br/>
4. Using State in component's JSX <br/>**
1) At first, I have imported the `useState` hook from the 'react' library: <br/>
`import React, { useState } from 'react';`
2) Then, I have to call the `useState` hook with an initial value. This hook returns an array with two elements: the current state value and a function to update it. For example, <br/>
In my project, in the 'App.jsx' file, for adding credit hours to the course cart, I have to call `useState` as follows: <br/>
`const [creditHour, setCreditHour] = useState(0);` <br/>
Here, `creditHour` is the current value of the credit hour.
`setCreditHour` is a function for updating the credit hour with the newly added   course credit hour. the initial value is 0.
3) Then, I have to call `setStateFunction` with a new value `hours`. React will then re-render the component with the updated state. 
`const newCreditHours = creditHour + hours;`<br/>
`setCreditHour(newCreditHours);`
4) For displaying the state in cmponent's 'Cart.jsx', I have to reference the `creditHour`. <br/>
`<Cart creditHour={creditHour}></Cart>`
