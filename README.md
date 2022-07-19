# build-your-own-pokemon-team

Running project locally

Please run "npm run start" from the "indeed-assessment" folder to spin up the server
Please run "npm run start" fomr the "client" folder to run React app
App can be viewed on localhost:3000/pokemon-team
Using App

Select pokemon type from dropdown list to populate the adjacent pokemon list
Once pokemon list is populated, select pokemon you would like to see
Submit choice
View the stats of the selected pokemon
Click the Catch Pokemon button to add pokemon to list on the right
You can only add up to 6 pokemon. If you try to add more, you will receive an alert
Click the Release Team button if you would like to start over
Routes

GET - This route retrieves the pokemon team store in the json data file. It will persist when page refreshes.

POST - This route adds the caught pokemon to the json data file by overwritting the file with the input added to the json data.

DELETE - This route allows users to release their team by overwritting the file with an empty array
