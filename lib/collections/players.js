Players = new Mongo.Collection('players');

Meteor.methods({
  'insertPlayer': function (newPlayer) {
    Players.insert(newPlayer);
  },
  'updatePlayer': function (playerId, playerAttributes) {
    Players.update(playerId, {$set: playerAttributes});
  },
  'incrementScore': function (playerId) {

  },
  'decrementScore': function (playerId) {
    
  }
});