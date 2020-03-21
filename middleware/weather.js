const axios = require("axios").default;
require("dotenv").config();
const DARK_API = process.env.DARK_API;
const GOOGLE_API = process.env.GOOGLE_API;

const getData = (req, res) => {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?components=locality:${req.body.locality}|country:${req.body.country}&key=${GOOGLE_API}`
    )
    .then(result => {
      if (result.data.results.length) {
        let lat = result.data.results[0].geometry.location.lat;
        let lng = result.data.results[0].geometry.location.lng;
        axios
          .get(`https://api.darksky.net/forecast/${DARK_API}/${lat},${lng}`)
          .then(response => {
            if (response) {
              console.log(response.data);
              res.status(200).json([response.data]);
            } else {
              res.json({ dataExists: "false" });
            }
          })
          .catch(error => {
            console.log(error);
            res.status(400).json({ apiError: "api error" });
          });
      } else {
        res.json({ dataExists: "false" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(400).json({ apiError: "api error" });
    });
};

const getLocations = (req, res, db) => {
  db.find()
    .then(items => {
      if (items.length) {
        res.json(items);
      } else {
        res.json({ dataExists: "false" });
      }
    })
    .catch(err => res.status(400).json({ dbError: err }));
};

const getUserLocations = (req, res, db) => {
  const { id } = req.params;
  db.find({ user: id })
    .then(items => {
      if (items) {
        res.json(items);
      } else {
        res.json({ dataExists: "false" });
      }
    })
    .catch(err => res.status(400).json({ dbError: err }));
};

const postLocation = (req, res, db) => {
  const { country, locality, user } = req.body;

  // check to see if location even exists!
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?components=locality:${locality}|country:${country}&key=${GOOGLE_API}`
    )
    .then(result => {
      if (result.data.status !== "OK") {
        res.status(400).json({
          err: `No results found for your request, please make sure to fill out both locality and country fields and that the place you are searching for actually exists`
        });
      } else {
        db.create({ country, locality, user }, (err, result) => {
          if (err) {
            res.status(400).json({ dbError: "db error", err: err });
          } else {
            res.json(result);
          }
        });
      }
    });
};

const deleteLocation = (req, res, db) => {
  const { id } = req.params;
  db.findOne({ _id: id }, (err, item) => {
    if (err) {
      res.status(400).json({ dbError: "cannot find that item", err: err });
    } else {
      item.remove(err => {
        if (err) {
          res.status(400).json({ dbError: "remove error", err: err });
        } else {
          res.json({ delete: "true" });
        }
      });
    }
  });
};

module.exports = {
  getLocations,
  getUserLocations,
  postLocation,
  getData,
  deleteLocation
};
