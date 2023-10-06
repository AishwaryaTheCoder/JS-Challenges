let status = "selected";
const user = {
    name: "aish",
    status: "PR"
};
// var status1 = "got offer";
setTimeout(() => {
    const status = "in progress";

    const data = {
        status: "approved",

        getStatus() {
            return this.status;
        },
    };
    // console.log(data.getStatus());
    // console.log(data.getStatus.call(this));
    let result = data.getStatus.call(user);
    // console.log(result);
     
}, 0);

const animals = [
    {
        species: "loin", name: "King"
    },
    {
        species: "whale", name: "Queen"
    }
];

function printAnimals(i) {
    this.print = function () {
        // console.log("#" + i + "" + this.species + ":" + this.name);
    };
    this.print();
}

for (let i = 0; i < animals.length; i++){
    printAnimals.call(animals[i], i);
}

// console.log('test start');
// setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('it is resolved').then(res =>
    console.log(res));
// console.log('test end');

const firstPromise = new Promise((resolve, reject) => {
    resolve("first promise resolved");
});

const secondPromise = new Promise((resolve, reject) => {
    resolve(firstPromise);
});

secondPromise.then(res => {
    return res;
}).then((res) => {
    console.log(res);
});
