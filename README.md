# Tours

This simple application a paractice for useEffect, conditional rendering and useState
it simply lists an array of data that's fetched from an API and display it in a list with some functionalities

### Components

- App component: This is main component, I fetch the data here with useEffect hook when the data is being fetched I render the Loading component and the data fetching is complete i render the Tours component. if the user removes all tours from the list then I render 'No more tours' and a button to refetch the data

- Loading component: is a simple component that just indicates the data is being fetched

- Tours component: Here I render a list of Tour components

- Tour component: this component is called by the Tours components with information about each tour passed as props and a function to remove this tour as well.
