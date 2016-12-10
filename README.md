# WDI_PROJECT_4
Final Project of WDI 18 course.

In short, this is a Tinder for musicians in order to find other artists and/or producers for collaboration that I built in a week. You have to have a Soundcloud account in order to participate as a security measure for alleviating spam. 

The website is: https://studiovibes.herokuapp.com/


Unfortunately, Soundcloud changed the way they run their API while I was in development mode and the redirect uri is stuck on localhost. So, this project can only be run locally. In order to do this, follow the steps below:

1. Fork repo
2. Once you've `npm intall mongod`, run `mongod` (if there's trouble running mongod, try sudo mongod and enter your computer's password)
3. Once you've `npm intall nodemon`, run `nodemon`
4. Open localhost:8000 in your browser after it says `listening on port 8000` in the terminal. 


Here is the link [link] (studiovibes.herokuapp.com "Studio Vibes") to the app, but it doesn't go past the sign in page since the redirect uri won't match the url. 