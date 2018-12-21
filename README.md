# Burger Time
A web app that tracks a list of burgers waiting to be eaten or already eaten.

## Features
  * This web app allows a user to add burgers to a burger wishlist to be eaten. The  user can also update the list to show which burgers have been eaten.
  * The web app utilizes the Model-View-Controller architecture pattern, including the use of a homemade ORM and MySQL to query the database.
  * When the user first visits the page, the controller (via Express) sends a GET request to the Model. The Model then calls a function for the ORM to query the database and return all the burger information listed. The controller then sends the results back to the View (via Handelbars). The list of burgers already in the database appears, sorted into two lists according to whether they've been eaten or not.
  * When the user adds a burger, a POST request is sent to the Model via the controller. The ORM is then used to add the new burger to the database, and the View is updated to show the new burger in the list of uneaten burgers.
  * When the user clicks the "Devour!" button, a PUT request is sent to the Model via the controller. The ORM is then used to change the value of the burger in the database. The View is then updated to show that the burger has moved to the eaten list.
  * The web app utilizes jQuery, Node, Express, MySQL and Handlebars.
***
## Demonstartion
![Demonstration](https://github.com/edcourtney74/Burger/blob/master/public/assets/images/burger_time.gif "Demonstration")

## Mobile view
![Mobile view](https://github.com/edcourtney74/Burger/blob/master/public/assets/images/mobile.png "Mobile view")