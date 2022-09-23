Yida Chen
# Content
- index.js: The main javascript file of the application
- views/doodle.ejs: The views (layout) of the application
- models/calendar.js: The schema of the calendarCard objects that we use to store the pollee's availability on each date.
- public/stylesheets/style.css: The css file that we use to style the element in this doodle app
- .env: The file that stored all environmental variables, such as the connection string to the MongoDB

# How to interact with the Doodle App
1. Go to the page: https://doodle-chen.herokuapp.com/
2. The page shows your a list of available date & times at top. At the bottom of each date card, there is a count of how many people have responded "available" or "available if need be" for that date.
3. Under the date & time option cards, there are color-coded availability responded from each individual pollee. For the date & time when they are available, corresponding card will be marked in green with a check mark. For the date & time when they are available if need be, corresponding card will be marked in orange with a check mark surrounded by parentheses. For the date & time when they are unavailable, corresponding card will be marked in grey with a cross mark.
4. Enter your availability by selecting the availability radio buttons in the date cards at the top. Once you finish selecting availability on each date, enter your name in the input box at the top and click the submit button on the right.
5. Your response will be recorded and updated to the poll. 

# References:
The creation of this doodle app adopt the code from the following website and my previous implementation of Todo app in node.js:
[https://github.com/yc015/DOODLE-NODEJS-MONGODB](https://github.com/yc015/DOODLE-NODEJS-MONGODB)

[1] "Simple To-do List App with Node.js and MongoDB — Chapter 1," Diogo Pinheiro, [https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-1-c645c7a27583](https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-1-c645c7a27583)  
[2] "Simple To-do List App with Node.js and MongoDB — Chapter 2," Diogo Pinheiro, [https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-2-3780a1c5b039](https://medium.com/@diogo.fg.pinheiro/simple-to-do-list-app-with-node-js-and-mongodb-chapter-2-3780a1c5b039)

# Key distinguishing characteristics identified and implemented 
1. Doodle only shows respondents a curated set of dates & times selected by the event creator. The when2meet instead shows a contiguous map of dates and times.
2. Doodle gives users three options when marking a time slot: available, unavailable, and available if need be. When2Meet only allows two states: available or unavailable.
3. Doodle organizes each available time slot into a small calendar card that shows the date & time and the number of respondents who are available during that time slot. When2meet uses a heatmap to illustrate the group's availability between some time points, and it gives users an overview of the group's availability without too much detail. The exact time & date and number of available people during a time slot, though can be inferred from the When2Meet's legends, are less obvious than those on Doodle. 
4. Doodle shows each individual pollee's availability on a date. However, When2Meet does not reveal this detail. Its heatmap only show the general group's availability but not the individual's availability.
