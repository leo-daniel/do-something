const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Event
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Event
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Event
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Event
      .findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Event
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.deleteOne())
      .then(dbModel => res.send(dbModel))
      .catch(err => res.status(422).json(err));
  },
  register: function(req, res) {
    db.Event
      .findByIdAndUpdate(req.params.id, { $push: { registeredUsers: req.body.userId}}, {new: true})
      .then(dbModel => { console.log("success")
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  unregister: function(req, res) {
    db.Event
      .findByIdAndRemove({_id: req.params.id}, { $pull: { registeredUsers: 
      req.params.userId }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  // register: function (req, res) {
  //   db.Event.findByIdAndUpdate(req.body.eventId, { $push: { registeredUsers: req.body.userId } })
  //     .then(function (dbEvent) {
  //       db.User.update({ _id: dbEvent.registeredUsers }, { $push: { registeredEvents: req.body.eventId } })
  //         .then(function (dbUser) {
  //           res.json(dbUser);
  //         })
  //         .catch(function (err) {
  //           res.status(422).json(err)
  //         })
  //     })
  //     .catch(function (err) {
  //       res.status(422).json(err)
  //     })
  // },
  // unregister: function (req, res) {
  //   db.Event.findByIdAndRemove(req.params.id, { $pull: { registeredUsers: req.params.userId } })
  //     .then(function (dbEvent) {
  //       db.User.update({ _id: dbEvent.registeredUsers }, { $pull: { registeredEvents: req.params.eventId } })
  //         .then(function (dbUser) {
  //           res.json(dbUser);
  //         })
  //         .catch(function (err) {
  //           res.status(422).json(err)
  //         })
  //     })
  //     .catch(function (err) {
  //       res.status(422).json(err)
  //     })
  // }
}