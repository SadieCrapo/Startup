export class ListItem {
    constructor(id=null, text, completed=false, completedUser="") {
        this._id = id;
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