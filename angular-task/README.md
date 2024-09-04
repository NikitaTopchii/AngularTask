Explanation of the code:

Good code needs no explanation!

The main concept of the test task was that we have an interaction between a parent and a child component

The main concept of the test task was that we have an interaction between parent and child components. To update the state of the components, a data randomization service was used, in fact, it simply returns a random number or a random name from an array of names, this was necessary to create simple data such as numbers and complex data (such as the Person interface)

If we consider the basic concepts of the test case, namely the change strategy and the logic of dependency injection, I suggest starting with the change strategy.

Here we use the onPush component in the child. Here are a couple of cases of updating components.

With updating the properties of complex data (the injection does not work, because there is an update of the properties and not the object itself (the data in the child component will be updated only after the child component is updated and will not be delayed by the event of the parent component)

With updating complex data (the init works)

With updating simple data (the init works)

Now for the dependency injection:

We have three use cases:

root (all components of the application have access to the properties of the service )

parent (if we inject here, then the internal service scopes will be available for this component and child, everything that will be stored there will be only for perents and children)


child (if we inject here, then the internal scopes of the service will be available only for this child and everything that will be stored there will be stored only for the child)