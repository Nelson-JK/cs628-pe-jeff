**Input**
The Recipe Finder application accepts input from users through the web interface. Users can add, edit, view, or delete recipes.
Users can add ingredients and cooking instructions to the receipes. The information entered is sent from the React frontend to the Express 
backend through HTTP requests and stored in a MongoDB Atlas database.

**Process**
The Recipe application uses React and React Router to navigate between the Recipe List, Add Recipe, and Edit Recipe pages. The frontend communciation 
with the Backend API uses fetch requests. The Express server processes CRUD operations and interacts with the MongoDB database using a Node.js driver.
When users add or change recipe information the backend performs the requested database operation and returns the information to the frontend.

**Output**
The application displays a list of recipes and details about each one such as ingredients and prep instructions. Users can navigate between pages, view recipes,
and add new recipes. The output is a user friendly web interface and all data is stored and managed in MongoDB. 