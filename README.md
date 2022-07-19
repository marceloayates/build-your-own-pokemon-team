# build-your-own-pokemon-team

Running project locally

1. Please run "npm run start" from the "indeed-assessment" folder to spin up the server
2. Please run "npm run start" fomr the "client" folder to run React app
3. App can be viewed on localhost:3000/pokemon-team

Using App

1. Select pokemon type from dropdown list to populate the adjacent pokemon list
2. Once pokemon list is populated, select pokemon you would like to see
3. Submit choice
4. View the stats of the selected pokemon
5. Click the Catch Pokemon button to add pokemon to list on the right
6. You can only add up to 6 pokemon. If you try to add more, you will receive an alert
7. Click the Release Team button if you would like to start over

Routes

GET - This route retrieves the pokemon team store in the json data file. It will persist when page refreshes.

POST - This route adds the caught pokemon to the json data file by overwritting the file with the input added to the json data.

DELETE - This route allows users to release their team by overwritting the file with an empty array
