1. What is the primary reason to use a nested route?

`Whenever we have some shared UI between routes in our app.`


2. What is a "Layout Route"?

`It's the parent route of some nested routes that contains just
the portion of the UI that will be shared. It will use an Outlet
component.`


3. What does the <Outlet /> component do? When do you use it?

`We use it anytime we have a parent Route that's wrapping 
children routes. It renders the matching child route's
`element` prop given in its route definition`


4. What is an "Index Route"?

`It's the "default route" we want to render when the path
of the parent route matches. It gives us a chance to render
an element inside the parent's <Outlet /> at the same path
as the parent route.`

5. What is the difference between Link and NavLink ?

`So, the difference is that in <Link /> there is a prop called '(to='')' which is used to give you the URL of the page and it does not take any CSS property in it but,`

`In <NavLink /> it allow a (isActive) property in className={ (isActive) => {condition}} or style={(isActive) => {condition}} by Which you can add styling to your Link or path described like, About,Home,Contact,etc.`


6. When does the code in a loader function run?

`Before the route change happens and the component for that route loads`


7. What are some benefits of using a data loader function
   instead of fetching our data in a useEffect in a component?
    
    * Don't need to worry about handling loading state in the 
      component
    * Don't need to have lengthy/confusing useEffect code in our
      component
    * Don't need to handle error state in the component
   
   
8. What change do we need to make to our BrowserRouter before
   we can use loaders (or any of the new data-layer API features)
   in our app?
   
  ` Get rid of the BrowserRouter component and use 
   createBrowserRouter() instead. Can use 
   createRoutesFromElements() to make the transition a bit easier`
   
   
   
9. What are the steps we need to take in order to use
   a loader on any given route?
   
   1. Define and export a loader function

   2. Import the loader and pass it to the route we're wanting
      to fetch data for

   3. Use the useLoaderData() hook to get the data from the loader
      function.