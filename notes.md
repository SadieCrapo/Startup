# CS 260 Notes

[My startup](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## GitHub Notes

I learned how to write markdown, which is going to be very useful moving forward.

## AWS Notes

AWS Account ID
1952-7566-3893

Security group called launch-wizard-1

Elastic IP address = 44.219.208.32

Command to ssh into live server: 
```sh
    ssh -i /[key pair file] ubuntu@[ip address]
```

## HTML Notes

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

[x] Choose color scheme
[ ] Set colors
[x] Fix header spacing on small screens
[x] Find and fix broken links
[x] Button styling
[x] Display name after login
[x] Make navigation hidden until login
[x] Create logo and icon
[ ] Finish plant drawings
[x] Implement plant reactivity
[ ] Research todo-ist API
[x] Create to-do mock
[x] Link login button to greenhouse
[x] Implement authentification

CURL commands for testing:
createUser - curl -X POST http://localhost:4000/api/user -H 'Content-Type: application/json' -d '{"userName":"s@byu.edu", "password":"byu", "greenhouse":"12"}' -c cookies.txt -b cookies.txt

login - curl -X POST http://localhost:4000/api/session -H 'Content-Type: application/json' -d '{"userName":"s@byu.edu", "password":"byu", "greenhouse":"12"}' -c cookies.txt -b cookies.txt

logout - curl -X DELETE http://localhost:4000/api/session -H 'Content-Type: application/json' -d '{"userName":"s@byu.edu", "password":"byu"}' -c cookies.txt -b cookies.txt

newTask - curl -X POST http://localhost:4000/api/tasks  -H 'Content-Type: application/json' -d '{"text":"dishes", "completed":"false", "completedUser":"null"}' -c cookies.txt -b cookies.txt

completeTask - curl -X PUT http://localhost:4000/api/tasks  -H 'Content-Type: application/json' -d '{"text":"dishes", "completed":"true", "completedUser":"testUser"}' -c cookies.txt -b cookies.txt

getTasks - curl http://localhost:4000/api/tasks -c cookies.txt -b cookies.txt

newPlant - curl -X POST http://localhost:4000/api/plants  -H 'Content-Type: application/json' -d '{"type":"terracotta", "age":"1", "URL":"./images/terracotta/sprout"}' -c cookies.txt -b cookies.txt

feedPlants - curl -X PUT http://localhost:4000/api/plants  -H 'Content-Type: application/json' -d '{"type":"terracotta", "age":"2", "URL":"./images/terracotta/seedling"}' -c cookies.txt -b cookies.txt

getPlants - curl http://localhost:4000/api/plants -c cookies.txt -b cookies.txt

getPlantInventory - curl http://localhost:4000/api/inventory/plants -c cookies.txt -b cookies.txt

updatePlantInventory - curl -X PUT http://localhost:4000/api/inventory/plants  -H 'Content-Type: application/json' -d '{"plantType":"monstera", "plantQuantity":2}' -c cookies.txt -b cookies.txt

getPotInventory - curl http://localhost:4000/api/inventory/pots -c cookies.txt -b cookies.txt

updatePotInventory - curl -X PUT http://localhost:4000/api/inventory/pots  -H 'Content-Type: application/json' -d '{"potType":"terracotta", "potQuantity":3}' -c cookies.txt -b cookies.txt

getFoodInventory - curl http://localhost:4000/api/inventory/food -c cookies.txt -b cookies.txt

updateFoodInventory - curl -X PUT http://localhost:4000/api/inventory/food  -H 'Content-Type: application/json' -d '{"food":2,"water":1}' -c cookies.txt -b cookies.txt
