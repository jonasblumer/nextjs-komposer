# react-komposer Example

## The idea behind the example

Many people seem to be confused about fetching data, as they try to fetch it through getInitialProps to prepopulate the page. It's important to know, that you can also fetch them in components. It makes sense to split the front-end into containers and components, where the containers fetch and prepare data, and the components simply receive them as props and render them.
This example shows how to do that with the help of react-komposer.
