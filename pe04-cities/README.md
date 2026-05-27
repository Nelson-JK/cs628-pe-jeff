## Input
The input for the Cities app for PE04 is from a user adding city information to the app form. The users adds the city name, the country, and city population. The user can interact by adding more cities or seeing a list of the cities already added. When a city is selected from the list, it displays the details of the city by the app accepting the city ID from the URL parameters. 

## Process
The application process runs under React and React Router. The details of the cities entered are stored using the useState hook. The React Router allows navigation between the cities list page, the add city page, and the city details page. The useParams hooks provides the City ID from the URL and locates the data for the selected city. Once a new city is added, the app redirects the user back to the cities list page using useNavigate. 

## Output
The output of the application is the web interface that shows the list of cities, and the details entered about the city selected. Users can add additional cities and detail (City Name, Country, Population) and the details are upated immediately. 