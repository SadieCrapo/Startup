const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('plantr');
const userCollection = db.collection('user');
const greenhouseCollection = db.collection('greenhouse');
const taskCollection = db.collection('task');
// const plantInventoryCollection = db.collection('plantInventory');
// const potInventoryCollection = db.collection('potInventory');
// const foodInventoryCollection = db.collection('foodInventory');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(userName) {
  return userCollection.findOne({ userName: userName });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ userName: user.userName }, { $set: user });
}

function deleteToken(token) {
  userCollection.updateOne({ token: token }, { $set: { token: "" } })
}

function getGreenhouse(greenhouse) {
  return greenhouseCollection.findOne({ greenhouseID: greenhouse });
}

async function addGreenhouse(greenhouse) {
  await greenhouseCollection.insertOne(greenhouse);
}

async function addPlant(plant, greenhouseID) {
  greenhouseCollection.updateOne({ greenhouseID: greenhouseID }, { $push: { plants: plant } });
}

async function updatePlants(plantList, greenhouseID) {
  greenhouseCollection.updateOne({ greenhouseID: greenhouseID }, { $set: { plants: plantList } });
}

function getPlants(greenhouseID) {
  return greenhouseCollection.findOne({ greenhouseID: greenhouseID }).plants;
}

// function getPlantInventory(greenhouseID) {
//   return greenhouseCollection.findOne({ greenhouseID: greenhouseID });
//   // return greenhouseCollection.findOne({ greenhouseID: greenhouseID }).plantInventory;
// }

function updatePlantInventory(greenhouseID, plantType, quantity) {
  var plantInventory = greenhouseCollection.findOne({ greenhouseID: greenhouseID }).plantInventory;
  plantInventory[plantType] = quantity;
  greenhouseCollection.updateOne({ greenhouseID: greenhouseID }, { $set: { plantInventory: plantInventory } });
  return plantInventory;

  // greenhouseCollection.updateOne({ greenhouseID: greenhouseID }, { $set: { plantInventory[plantType]: quantity } });
}

// function getPotInventory(greenhouseID) {
//   return greenhouseCollection.findOne({ greenhouseID: greenhouseID });
// }

function updatePotInventory(greenhouseID, potType, quantity) {
  var potInventory = greenhouseCollection.findOne({ greenhouseID: greenhouseID }).potInventory;
  potInventory[potType] = quantity;
  greenhouseCollection.updateOne({ greenhouseID: greenhouseID }, { $set: { potInventory: potInventory } });
  return potInventory;
}

// function getFoodInventory(greenhouseID) {
//   return greenhouseCollection.findOne({ greenhouseID: greenhouseID });
// }

function updateFoodInventory(greenhouseID, foodInventory) {
  greenhouseCollection.updateOne({ greenhouseID: greenhouseID }, { $set: { foodInventory: foodInventory } });
}

async function addTask(task) {
  await taskCollection.insertOne(task);
}

function getTasks(greenhouseID) {
  return taskCollection.find({ greenhouseID: greenhouseID }).project({ task: 1, _id: 0 });
}

// async function addScore(score) {
//   return scoreCollection.insertOne(score);
// }

// function getHighScores() {
//   const query = { score: { $gt: 0, $lt: 900 } };
//   const options = {
//     sort: { score: -1 },
//     limit: 10,
//   };
//   const cursor = scoreCollection.find(query, options);
//   return cursor.toArray();
// }

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  deleteToken,
  getGreenhouse,
  addGreenhouse,
  addPlant,
  updatePlants,
  getPlants,
  // getPlantInventory,
  updatePlantInventory,
  // getPotInventory,
  updatePotInventory,
  // getFoodInventory,
  updateFoodInventory,
  addTask,
  getTasks
};
