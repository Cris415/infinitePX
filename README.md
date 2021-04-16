# infinitePx

infinitePx is a clone of 500px, a website for photographers to showcase their portfolio to others.

[infinitePx live](https://infinitepx.herokuapp.com/)

## Features

* Users can select and upload a photo
  * Add a title and description to the photo
* Users can follow other users and view their photos in a separate feed
* Users can view photos posted by all users in a separate feed
* Latest photos are at the top of the feed
* Users have a profile where their photos are displayed

## Technologies

**Frontend**

* React/Redux, Javascript, Webpack
  * Manage information and create an interactive interface.

* SCSS/HTML
  * Structure information on the page for usability and attractiveness.

**Backend**

* Ruby on Rails
  * Manage user authentication 
  * Secure user passwords with BCrypt
  * Enable API deliver post and user data to frontend

* PostgreSQL
  * Store posts and user information

**Deployment**

* Heroku to deliver infinitePx
* AWS to store uploaded photos
