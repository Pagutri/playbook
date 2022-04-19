class twitterUser {
    constructor(user, userName) {
        this.user = user
        this.userName = userName
        this.bio = "Hello, I'm new to Twitter"
    }

    set setBio(bio) {
        this.bio = bio
    }

    get getUser() {
        return this.user
    }
}

const newUser = new twitterUser("Pato", "patito")
console.log(newUser.getUser)
console.log(newUser.bio)
newUser.setBio = "Hola a todes"
console.log(newUser.bio)