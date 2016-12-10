# WDI_PROJECT_4
Final Project of WDI 18 course.

In short, this is a Tinder for musicians in order to find other artists and/or producers for collaboration that I built in a week. You have to have a Soundcloud account in order to participate as a security measure for alleviating spam. 

The website is: https://studiovibes.herokuapp.com/


Unfortunately, Soundcloud changed the way they run their API while I was in development mode. So, this project can only be run locally. In order to do this, follow the steps below:

1. Fork repo
2. Once you've `npm intall mongod`, run `mongod`
3. Once you've `npm intall nodemon`, run `nodemon`
4. Open localhost:8000 in your browser after it says `listening on port 8000` in the terminal. 


it may have to be run locally on localhost:8000 after express is listening on port 8000 (run nodemon in the terminal to make this happen) and mongo is running (mongod/sudo mongod in the terminal).
