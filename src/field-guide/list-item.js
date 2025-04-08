export class ListItem {
    constructor(text, completed=false, completedUser="") {
        this.text = text;
        this.completed = completed;
        this.completedUser = completedUser;
    }

    toggleComplete() {
        this.completed = !this.completed;
        if (this.completed && !this.completedUser) {
            this.completedUser=localStorage.getItem("userName");
        }
    }
}