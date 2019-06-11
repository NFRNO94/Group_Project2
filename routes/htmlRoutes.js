let hookahFlavors = require("../models/hookah_flavors.js");
let reservations = require("../models/tables.js");
let waitlist = require("../models/waitlist.js");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {

    res.render("index", {
    });
  });

  // Load table page and pass in a table by id
  app.get("/table/:id", function (req, res) {

    res.render("table", {
      id: req.params.id
    });
  });

  app.get("/reserve", function (req, res) {

    res.render("reserve", {

    });
  });

  app.get("/manager", function (req, res) {

    reservations.all(function (data) {
      waitlist.all(function (data2) {

        let hbsObject = {

          reservationsList: data,
          waitlist: data2
        };
        console.log(hbsObject);
        res.render("manager", hbsObject);
      });
    });

  });

  app.get("/update-flavors", function (req, res) {

    hookahFlavors.all(function (data) {

      let hbsObject = {

        hookahFlavorsList: data
      };
      console.log(hbsObject);
      res.render("update-flavors", hbsObject);
    });
  });

  app.get("/single-reservation", function (req, res) {

    res.render("single-reservation", {

    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
