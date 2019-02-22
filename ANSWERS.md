## What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes allow us in React to ensure the correct type of data is being passed to components via props. React will check props passed to your components against definitions provided, and warn in development if they don’t match.

Because JavaScript is a weakly-typed language, values can be converted between different types through implicit type coercion. This might hide bugs when the wrong type of data is passed in.

## Describe a life-cycle event in React?

The methods that you are able to use on React components are called lifecycle events. These methods can be called during the lifecycle of a component, and they allow you to update the UI and application states at that particular point.

## Explain the details of a Higher Order Component?

Higher Order Components (HOCs) take in a component as an argument and then add some functionality to that supplied component and return it. This is just a pattern that emerges from React’s compositional nature.

Not only can we use HOCs for the sharing of information and functionality, we can use them to act as a container for other components, and perform some logic checks to conditionally render a component.

## What are three different ways to style components in React? Explain some of the benefits of each.

You can use vanilla CSS files, imported to the react JavaScript file with the relevant component. This keeps the JavaScript clean and separate from the styling for readability.

Inline styling is another option. You can make a variable that stores style properties as an object whose key is the camelCased version of the style name, and whose value is the style’s value in a string. This could be useful to add a few select styles requiring high specificity.

You can write the CSS within JS using the styled-components library. This allows you to create specific styled components saved in a variable, before returning the variable name in the JSX as a wrapper. Because the properties of the styled object you’re selecting to save in your variable are actually methods, you can pass a string with your styles to it using the back-tick notation that invokes the function. The advantage of this method is that you have full access to the power of Javascript functions and variables etc, and you can neatly package styles directly alongside your React components.
