In this exercise you will create a back end for your todo app

1. pasete your create-react-app project you worked on last class in here as the `client` folder
2. add `"proxy": "http://localhost:3001/"` to your client folder's **package.json**
3. There are three comments in the backend code beginning with `// TODO:`. If you do a global search (`ctrl + shift + f`) you'll find all the instruction for implementing the backend
4. The backend has tests you can run using `npm run test`. You can find the tests in the 'test' folder. Use these to make sure your routes are implemented correctly. Only a couple of tests are written for you. Write more for all the routes you will create.
5. Once your routes are functioning and tested thoroughly, you're ready to modify the client to digest your routes.
6. create a `utils/API.ts` file and use axios to fetch the data from your api.
7. replace everywhere you performed CRUD using state to now use the API and persist your data.

Good LUCK!!