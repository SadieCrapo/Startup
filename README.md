# Greenhouse To-do List (working title)

[My Notes](notes.md)

A to-do list application with a greenhouse theme. As the user completes tasks, they earn seeds, pots, and plant food which can be used to grow plants in their greenhouse.


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Traditional to-do lists are boring and often end up unfinished because they cannot hold our attention. My new product aims to prevent this by making it fun and engaging to check tasks off your to-do list. I do this by rewarding users with new plants to care for in their virtual greenhouses each time they complete a task!

### Design

![Homepage](./images/homepage.png)

This will be the homepage of the application. It will look like a greenhouse with shelves displaying all of the user's collected plants. There will be buttons that link to the user's to-do list (referred to as the field guide) and inventory (referred to as the backpack), as well as buttons to complete actions such as watering and feeding the plants, and planting new seeds.

![Field Guide](./images/field-guide.png)

This will be the user's to-do list. It will look like a field guide or journal and display the user's current tasks. Each task will have a checkbox to click when it has been completed. There will also be a greenhouse button to return to the homepage and a pencil button to add a new task.

![Backpack](./images/backpack.png)

This will be the user's inventory. It will display each of the user's collected seed and pot types, as well as their quantities. There will be a greenhouse button to return to the homepage.

![Login](./images/login.png)

This will be the authentification page for the application. Users will log in using their unique username and password, as well as a Greenhouse ID. The Greenhouse ID will allow them to collaborate on shared to-do lists as anyone with the ID will be able to join and contribute to that greenhouse.

### Key features

- Simple, easy-to-use task tracking
- Incentive to complete tasks
- Personal or shared to-do lists

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Basic structure for the four main webpages.
- **CSS** - Cohesive styling throughout the application, including colors and font. Manage spacing between elements on different display sizes.
- **React** - Provide transistions between pages, animations for feeding, watering, and planting, and represent new task creation.
- **Service** - Retrieve plants and previously saved tasks, store inventory, create to-do list with Todoist API.
- **DB/Login** - Register and log in users, store users and greenhouses in database, require credentials to access greenhouses. 
- **WebSocket** - In shared greenhouses, update plants and tasks in real time when other users complete tasks.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **HTML pages** - I did not complete this part of the deliverable.
- [ ] **Proper HTML element usage** - I did not complete this part of the deliverable.
- [ ] **Links** - I did not complete this part of the deliverable.
- [ ] **Text** - I did not complete this part of the deliverable.
- [ ] **3rd party API placeholder** - I did not complete this part of the deliverable.
- [ ] **Images** - I did not complete this part of the deliverable.
- [ ] **Login placeholder** - I did not complete this part of the deliverable.
- [ ] **DB data placeholder** - I did not complete this part of the deliverable.
- [ ] **WebSocket placeholder** - I did not complete this part of the deliverable.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - Routing between login and voting components.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
