const user = {
    name: "Salma Lugo",
    location: "tu corazón",
    status: "single",
    friends: 1000,
    follow: function() {
        return `Friendship request sent to ${this.name}.`
    }
}

const post = {
    content: "Feliz en este día tan bonito",
    reactions: {
        likes: 2,
        hearts: 3,
        angry: 0
    },
    react: function(reaction) {
        return `You reacted ${reaction} to this post.`
    }
}

console.log(user.follow())
console.log(post.react("like"))