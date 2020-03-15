const path = require("path");

module.exports = function(app, path) {
    // Route to Home page
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // Route to Exercise page
    app.get("/exercise", function(req, res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    // Route to Stats page
    app.get("/stats", function(req, res){
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });
};