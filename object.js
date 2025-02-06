const person = {
    name: "Alexander",
    age: 30,
    address: {
        city: "Kyiv",
        street: "Khreshchatyk",
        postalCode: "01001"
    },
    hobbies: ["football", "traveling", "reading"],
    greet: function () {
        console.log(
            `Hello! My name is ${this.name}, I am from ${this.address.city}.`
        );
    },
    listHobbies: function () {
        console.log("My hobbies:");
        this.hobbies.forEach((hobby) => {
            console.log(`- ${hobby}`);
        });
    }
};
console.log(person);
