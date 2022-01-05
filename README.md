# Dog Adoption Website
Use the [React Base Template](https://github.com/alchemycodelab/react-base-template) for this lab. You can see an example of a finished live site [here](https://alchemy-react-dog-adoption.netlify.app/).

### Learning Objectives

- Create the illusion of multiple pages in a Single Page Application routes by using react-router.
- Use `props.match.params` or the `useParams` hook to get the `:id` in a path for creating a List/Detail pattern with react-router.
- Use `<Link>` to create links that navigate a Single Page Application.
- Use `.map` to iterate over an array and render elements for each item in an array.
- Use `useState` to manage component state.
- Use `useEffect` to manage component effects.
- Use conditional rendering to dynamically render items to the screen.
- Use CSS modules to manage component-level styling.

### Description

You are building a website for your local animal shelter that displays the dogs available for adoption. The list of dogs is stored in Supabase in a table called `dogs` - the supabase keys are:

```js
REACT_APP_SUPABASE_URL=https://ibfimxopxwngijoyxknw.supabase.co
REACT_APP_SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjY4NDQ3MSwiZXhwIjoxOTUyMjYwNDcxfQ.ewbC-sV1ELppz_IP21q0P7QEX_VoDqbi_ZZ1__Uphvs
```

The `dogs` table has the following columns:

| column     | type            |
| ---------- | --------------- |
| id         | bigint          |
| created_at | timestamptz     |
| name       | varchar         |
| image      | varchar         |
| breeds     | varchar - array |
| bio        | varchar         |

You should build out the following views

- Home page that lists all the dogs in the database
- Dog Detail page that shows the detail for the individual dogs

### Acceptance Criteria

- A user can see a list of dogs on the home page
- A user can click on a dog from the homepage and be taken to a detail view of that dog that shows details about the dog
- Each view should have a test

### Rubric

| Task                                                       | Points |
| ---------------------------------------------------------- | ------ |
| **`<DogList>` component**                                  |
| rendered by home <Route />                                 | 3      |
| calls supabase in a useEffect and sets the result in state | 2      |
| has a loading state                                        | 1      |
| renders list of dogs                                       | 1      |
| styling                                                    | 1      |
| test                                                       | 1      |
| **`<DogDetail>` component**                                |
| rendered by `/dogs/:id` <Route />                          | 3      |
| calls supabase in a useEffect and sets the result in state | 2      |
| has a loading state                                        | 1      |
| renders dog details                                        | 1      |
| styling                                                    | 1      |
| test                                                       | 1      |
| **`<Header />` component** with a link to home page        | 2      |
