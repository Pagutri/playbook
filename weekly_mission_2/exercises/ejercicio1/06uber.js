const profile = {
    name: "Salma Lugo",
    rating: 4.8
}

const travel = {
    origin: "Your House",
    destination: "Your parent's house",
    driver: "Juana Molina",
    cancel: function() {
        return "Your trip has been cancelled."
    }
}

console.log(travel.cancel())