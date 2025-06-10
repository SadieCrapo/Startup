const { MongoClient, ObjectId } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('plantr');
const userCollection = db.collection('user');
const greenhouseCollection = db.collection('greenhouse');
const taskCollection = db.collection('task');
const plantInventoryCollection = db.collection('plantInventory');
const potInventoryCollection = db.collection('potInventory');
const foodInventoryCollection = db.collection('foodInventory');

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

async function getPlants(greenhouseID) {
    const plants = await greenhouseCollection.findOne({ greenhouseID: greenhouseID });
    // console.log(plants.plants);
    return plants.plants;
    // return greenhouseCollection.findOne({ greenhouseID: greenhouseID }, { _id: 0, greenhouseID: 0 });
}

function getPlantInventory(greenhouseID) {
    return plantInventoryCollection.findOne({ greenhouseID: greenhouseID });
  // return greenhouseCollection.findOne({ greenhouseID: greenhouseID });
  // return greenhouseCollection.findOne({ greenhouseID: greenhouseID }).plantInventory;
}

async function addPlantInventory(plantInventory) {
    await plantInventoryCollection.insertOne(plantInventory);
}

function updatePlantInventory(greenhouseID, plantType, quantity) {
    plantInventoryCollection.updateOne({ greenhouseID: greenhouseID }, { $set: { [plantType]: quantity }});
  // var plantInventory = greenhouseCollection.findOne({ greenhouseID: greenhouseID }).plantInventory;
  // plantInventory[plantType] = quantity;
  // greenhouseCollection.updateOne({ greenhouseID: greenhouseID }, { $set: { plantInventory: plantInventory } });
  // return plantInventory;

  // greenhouseCollection.updateOne({ greenhouseID: greenhouseID }, { $set: { plantInventory[plantType]: quantity } });
}

function getPotInventory(greenhouseID) {
    return potInventoryCollection.findOne({ greenhouseID: greenhouseID });
  // return greenhouseCollection.findOne({ greenhouseID: greenhouseID });
}

async function addPotInventory(potInventory) {
    await potInventoryCollection.insertOne(potInventory);
}

function updatePotInventory(greenhouseID, potType, quantity) {
    potInventoryCollection.updateOne({ greenhouseID: greenhouseID }, { $set: { [potType]: quantity }});
    // var potInventory = greenhouseCollection.findOne({ greenhouseID: greenhouseID }).potInventory;
    // potInventory[potType] = quantity;
    // greenhouseCollection.updateOne({ greenhouseID: greenhouseID }, { $set: { potInventory: potInventory } });
    // return potInventory;
}

function getFoodInventory(greenhouseID) {
    return foodInventoryCollection.findOne({ greenhouseID: greenhouseID });
  // return greenhouseCollection.findOne({ greenhouseID: greenhouseID });
}

async function addFoodInventory(foodInventory) {
    await foodInventoryCollection.insertOne(foodInventory);
}

function updateFoodInventory(greenhouseID, foodInventory) {
    foodInventoryCollection.updateOne({ greenhouseID: greenhouseID }, { $set: { water: foodInventory.water, food: foodInventory.food } });
}

async function addTask(task) {
    await taskCollection.insertOne(task);
}

function getTasks(greenhouseID) {
    return taskCollection.find({ greenhouseID: greenhouseID }).project({ greenhouseID: 0 });
  // return taskCollection.find({ greenhouseID: greenhouseID }).project({ task: 1, _id: 0 });
}

function updateTask(id, user) {
    // const taskID = new ObjectId(id);
    // console.log(taskID);
    // const task = await taskCollection.findOne({ _id: new ObjectId(id) });
    // console.log(task);
    taskCollection.updateOne({ _id: new ObjectId(id) }, { $set: { completed: true, completedUser: user } });
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
    getPlantInventory,
    addPlantInventory,
    updatePlantInventory,
    getPotInventory,
    addPotInventory,
    updatePotInventory,
    getFoodInventory,
    addFoodInventory,
    updateFoodInventory,
    addTask,
    getTasks,
    updateTask,
};
