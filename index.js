// Load the express module
const express = require("express");
const app = express();

// Load the dotenv module that allows us to load environmental variables from .env file
const dotenv = require("dotenv");

// Load the model for calendar card
const CalendarCard = require("./models/calendar");

// Load the content from the .env file
dotenv.config();

// Load in the mongoose module that allows us to interact with the mongodb
const mongoose = require("mongoose");

// Connect to the mongodb using the credentials
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    // Output connection success message if successfully connected
    console.log("Conection to Mongodb database is successful!");
    // Host the app on port 3000 of the local server
    app.listen(process.env.PORT || 5000);
});

// Link with the resource under public
app.use("/static", express.static("public"));

// urlencoded allow us to extract data from the submitted form
// The data can be found from the body attribute of the request
app.use(express.urlencoded({ extended: true }));

// Load the view (the layout of the doodle schedule app) from the ejs files under the views folder
app.set("view engine", "ejs");

// GET method for rendering the doodle schedule app page using the view (layout) in doodle.ejs 
app.get("/",async (req, res) => {
    CalendarCard.find({}, (err, card) => {
        var avail_count = []
        for (let day = 0; day < 4; day++) {
            var count = 0
            for (let index=0; index < card.length; index++) {
                if (card[index].content[day] != "0") {
                    count += 1
                }
            }
            avail_count.push(count)
        }
        // pass the calendard cards and availability count as arguments calendardCard and counts to the ejs file
        res.render("doodle.ejs", { calendarCard: card, counts: avail_count });
    });
 });

// POST method for entering availability into the mongodb database
app.post('/',async (req, res) => {
    // Variable for storing availability
    var availability = []
    // Interate through the radio buttons
    for (let index = 0; index < 4; index++) {
        // Get the input availability from the checkboxes
        availability.push(parseInt(req.body["date-" + (index + 1)]))
    }

    // Create the new availability object that will be inserted into the mongodb database
    const calendarCard = new CalendarCard({
        content: availability,
        name: req.body.name
    });


    // If insertion request is successful delivered
    // Try waiting for the insertion complete and redirect to the main page
    try {
        console.log("saving data...")
        // Wait for the new availability object to be inserted in the database
        await calendarCard.save();
        console.log("data saved")
        res.redirect("/");
    } catch (err) {
    // If error happened, redirect to the main page
        res.redirect("/");
    }
});
