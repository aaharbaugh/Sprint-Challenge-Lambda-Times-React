 What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    proptypes are used to verify the data structures and types of the information being passed through components via props. Its important to check your data because if you do not check your data you will eventually have malicious data, incorrect data, or even data that could break your app. 

 Describe a life-cycle event in React?

    the lifecycle in react is the entire loop from rendering the component, mounting the component on the screen, to updating state, to rerendering the component. 
    a single event in the lifecycle would be any of these points. You can add specific functions to trigger on any of these specific events, allowing for important changes to code depending on the location in the lifecycle.

 Explain the details of a Higher Order Component?

    A HOC, is a componenet that passes other components through it as parameters. By doing this, all the components passed through the HOC, can share behavior and information and logic. So you can have conditional statements that affect sibling components. 

 What are three different ways to style components in React? Explain some of the benefits of each.
    
    THe first way to style a component is using regular CSS files and className attributes on jsx elements and components. 

    The second way is to use a library called Styled Components, which allows you to write CSS for specicfic component names inside of your Javascript files, and then create new components without having JSX elements with Classnames. 

    The third way is to use a librarys like ReactStrap, which come with prebuilt components, similarly to Styled Components. These ReactStrap components can be inserted into your own components and modified based on specific prebuilt attributes. 