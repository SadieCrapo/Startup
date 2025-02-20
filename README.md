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

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://plantrapp.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I created 4 HTML documents to represent the 4 main pages of my applicatiion.
- [x] **Proper HTML element usage** - I used the proper HTML tags to represent the different elements of my application, including checkboxes, buttons, images, and formatting elements such as strikthrough.
- [x] **Links** - I included links to the 4 main pages via their relative paths, and a link to my GitHub repository using its absolute path.
- [x] **Text** - I added text to display the content of the application.
- [x] **3rd party API placeholder** - My field-guide.html file includes buttons that will eventually be used to call the Todoist API.
- [x] **Images** - I added img tags with alternative text to greenhouse.html and backpack.html to represent the user's plant collection and inventory. I am working on creating .png files for each of these placeholders and adding them as they are completed.
- [x] **Login placeholder** - My index.html file has fields for the user to input login information. The other pages each display the user's name after they have logged in.
- [x] **DB data placeholder** - greenhouse.html, backpack.html, and field-guide.html contain representations of data that will eventually be stored in a database. greenhouse.html and backpack.html show the user's previously collected items, and field-guide.html shows the user's previously saved tasks.
- [x] **WebSocket placeholder** - field-guide.html shows tasks that have been completed by other users. I will eventually use WebSocket to update these tasks in real time.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - I styled the header and footer the same way for each page with a background color and flex displays to get everything centered. I gave the main section of each page a unique styling to reflect its purpose.
- [x] **Navigation elements** - Links for navigation in the top left header on every page. Active links are bolded.
- [x] **Responsive to window resizing** - Used flex and grid displays to make the application reconfigure itself when resized. Header and footer disapear when the window gets too small.
- [x] **Application elements** - I used CSS to style my application elements and third-party service placeholders.
- [x] **Application text content** - I used CSS to set font, colors, and specific formatting such as font-weight.
- [x] **Application images** - I added margins and padding to make sure that all of my images would be spaced properly.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - I used vite to bundle my code, as well as to run my application when debugging.
- [x] **Components** - I have four components; the login page, greenhouse, backpack, and field-guide.
- [x] **Router** - I added routing between each of the app components and also included routing for an unknown address.

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
