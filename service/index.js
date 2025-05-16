const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';
const greenhouseCookieName = 'greenhouse';

let users = []
let greenhouses = []
let plants = {};
let tasks = {};
let plantInventory = {};
let potInventory = {};
let foodInventory = {};

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

// var apiRouter = express.Router();
let apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/user', async (req, res) => {
    if (await findUser('userName', req.body.userName)) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await createUser(req.body.userName, req.body.password);

        setAuthCookie(res, user.token);
        setGreenhouseCookie(res, req.body.greenhouse);
        res.send({ userName: user.userName });
    }
});
// apiRouter.post('/auth/create', async (req, res) => {
//     if (await findUser('email', req.body.email)) {
//       res.status(409).send({ msg: 'Existing user' });
//     } else {
//       const user = await createUser(req.body.email, req.body.password);
  
//       setAuthCookie(res, user.token);
//       res.send({ email: user.email });
//     }
//   });

// GetAuth login an existing user
apiRouter.post('/session', async (req, res) => {
    const user = await findUser('userName', req.body.userName);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            setGreenhouseCookie(res, req.body.greenhouse);
            res.send({ userName: user.userName });
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/session', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.clearCookie(greenhouseCookieName);
    res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
};

// GetScores
// apiRouter.get('/scores', verifyAuth, (_req, res) => {
//   res.send(scores);
// });

// GetTasks
apiRouter.get('/tasks', verifyAuth, (_req, res) => {
    res.send(tasks[_req.cookies[greenhouseCookieName]]);
})

// SubmitScore
// apiRouter.post('/score', verifyAuth, (req, res) => {
//   scores = updateScores(req.body);
//   res.send(scores);
// });

// NewTask
apiRouter.post('/tasks', verifyAuth, (req, res) => {
    var greenhouseID = req.cookies[greenhouseCookieName];
    tasks[greenhouseID] = updateTasks(req.body, greenhouseID);
    res.send(tasks[greenhouseID]);
})

//CompleteTask
apiRouter.put('/tasks', verifyAuth, (req, res) => {
    var greenhouseID = req.cookies[greenhouseCookieName];
    tasks[greenhouseID] = updateTasks(req.body, greenhouseID);
    res.send(tasks[greenhouseID]);
})

// GetPlants
apiRouter.get('/plants', verifyAuth, (_req, res) => {
    res.send(plants[_req.cookies[greenhouseCookieName]]);
})

// NewPlant
apiRouter.post('/plants', verifyAuth, (req, res) => {
    var greenhouseID = req.cookies[greenhouseCookieName];
    plants[greenhouseID] = updatePlants(req.body, greenhouseID);
    res.send(plants[greenhouseID])
})

// GrowPlants
apiRouter.put('/plants', verifyAuth, (req, res) => {
    var greenhouseID = req.cookies[greenhouseCookieName];
    plants[greenhouseID] = req.body;
    res.send(plants[greenhouseID]);
})

// GetPlantInventory
apiRouter.get('/inventory/plants', verifyAuth, (_req, res) => {
    res.send(plantInventory[_req.cookies[greenhouseCookieName]]);
})

// UpdatePlantInventory
apiRouter.put('/inventory/plants', verifyAuth, (req, res) => {
    var greenhouseID = req.cookies[greenhouseCookieName];
    plantInventory[greenhouseID][req.body.plantType] = req.body.plantQuantity;
    res.send(plantInventory[greenhouseID]);
})

// GetPotInventory
apiRouter.get('/inventory/pots', verifyAuth, (_req, res) => {
    res.send(potInventory[_req.cookies[greenhouseCookieName]]);
})

// UpdatePotInventory
apiRouter.put('/inventory/pots', verifyAuth, (req, res) => {
    var greenhouseID = req.cookies[greenhouseCookieName];
    potInventory[greenhouseID][req.body.potType] = req.body.potQuantity;
    res.send(potInventory[greenhouseID]);
})

// GetFoodInventory
apiRouter.get('/inventory/food', verifyAuth, (_req, res) => {
    res.send(foodInventory[_req.cookies[greenhouseCookieName]]);
})

// UpdateFoodInventory
apiRouter.put('/inventory/food', verifyAuth, (req, res) => {
    var greenhouseID = req.cookies[greenhouseCookieName];
    foodInventory[greenhouseID] = req.body;
    res.send(foodInventory[greenhouseID]);
})

// app.get('/api/quotes', async (req, res) => {
//     const response = await fetch('https://zenquotes.io/api/quotes/');
//     // console.log(response);
//     const data = await response.json();
//     // console.log(data[0]);
//     res.json(data);
// });

// Default error handler
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// updateScores considers a new score for inclusion in the high scores.
// function updateScores(newScore) {
//     let found = false;
//     for (const [i, prevScore] of scores.entries()) {
//       if (newScore.score > prevScore.score) {
//         scores.splice(i, 0, newScore);
//         found = true;
//         break;
//       }
//     }

//     if (!found) {
//       scores.push(newScore);
//     }

//     if (scores.length > 10) {
//       scores.length = 10;
//     }

//     return scores;
//   }

function updateTasks(newTask, greenhouseID) {
    taskList = tasks[greenhouseID];
    let index = taskList.findIndex(task => task.text === newTask.text);
    if (index !== -1) {
        taskList[index] = newTask;
    } else {
        taskList.push(newTask);
    }
    return taskList;
}

function updatePlants(newPlant, greenhouseID) {
    plantList = plants[greenhouseID];
    plantList.push(newPlant);
    return plantList;
}

async function createUser(userName, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        userName: userName,
        password: passwordHash,
        token: uuid.v4(),
    };
    await DB.addUser(user);

    return user;
    // const passwordHash = await bcrypt.hash(password, 10);

    // const user = {
    //     userName: userName,
    //     password: passwordHash,
    //     token: uuid.v4(),
    // };
    // users.push(user);

    // return user;
}

async function findUser(field, value) {
    if (!value) return null;

    if (field === 'token') {
        return DB.getUserByToken(value);
    }
    const returnValue = DB.getUser(value);
    return returnValue;
    // if (!value) return null;

    // return users.find((u) => u[field] === value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

function setGreenhouseCookie(res, greenhouse) {
    if (!greenhouses.find((g) => g === greenhouse)) {
        greenhouses.push(greenhouse);
        tasks[greenhouse] = [];
        plants[greenhouse] = [];
        plantInventory[greenhouse] = { 'monstera': 0, 'daisy': 0, 'laceleaf': 0 };
        potInventory[greenhouse] = { 'terracotta': 0, 'marble': 0, 'hanging': 0 };
        foodInventory[greenhouse] = { 'food': 0, 'water': 0 };
    }
    res.cookie(greenhouseCookieName, greenhouse, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

// app.get('*', (_req, res) => {
//   res.send({ msg: 'Plantr service' });
// });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});