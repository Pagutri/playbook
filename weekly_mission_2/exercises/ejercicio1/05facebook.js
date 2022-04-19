const user = {
    name: "Salma Lugo",
    location: "tu corazón",
    status: "single",
    friends: 1000,
    follow: function() {
        return `Friendship request sent to ${this.name}.`
    }
}

console.log(user.follow())