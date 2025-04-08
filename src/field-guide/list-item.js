export class ListItem {
    constructor(text, completed=false) {
        this.text = text;
        this.completed = completed;
        this.completedUser = "";
    }

    toggleComplete() {
        this.completed = !this.completed;
        if (this.completed) {
            this.completedUser=localStorage.getItem("userName");
        }
    }
}