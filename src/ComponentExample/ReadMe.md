
Components are the basic building blocks of react apps. So react app will be a "Component tree".
Always App component is the root component. Each component should return or render some JSX code.
There are two types of Components

1) Functional Components
this also be reffered to as "dump components", "presentational components", "stateless components". You can use either ES6 or ES5 notations to define functions. See the Person.js for an example. 

2) Class-Based Components
also reffered to as "containers", "smart components" or "stateful components".

## Use Dynamic content
We can use props (properties to handle dynamic content inside a component). <Person name="Bob" age="25"> and then we can get these data from the component as {props.name} or {props.age}.

### Use children HTML via props
<Person name="Bob">This is the children code</Person>
use it from the component via props as {props.children}