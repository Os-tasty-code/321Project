# 321Project

## SET UP DEPENDENCIES
After cloning the project, please set up the dependencies for the project by following these commands.

`cd backend                                             `
`npm init                                               ` (hit enter until back to prompt)

`npm install --save express cors ws mongodb dotenv colors concurrently        `



`cd ../my-app                                           `
`npm init                                               `


`npm install --save react axios concurrently            `


## RUN THE PROGRAM
The code needs to be run on two separate terminals in order to display the product. 
### Terminal 1
In order to run the file pathing and file accessing part (Express Code), please move into the backend folder and run the program.
Here are the commands to put into the terminal (starting from the 321 Project folder):

`cd backend`
`node expressapp.js`

The message should state:

Running on port 9000.
http://localhost:9000/
connected

### Terminal 2
In order to run the frontend (React Code), please move into the my-app folder and run the program. 
Here are the commands to put into the terminal (starting from the 321 Project folder):
`cd my-app`
`npm start`

Please wait 1-2 minutes for the page to pop up on your web browser.
