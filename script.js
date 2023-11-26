const arr = [3, 5, 9, 10, 1]
const arrFilter = arr.filter((item) => item <= 5)
for (let i = 0; i < arrFilter.length; i++) {

    const arrEl = document.createElement('p');
    arrEl.innerHTML =
        arrFilter[i];
    app.append(arrEl)

}

const user = {
    name: "Alex",
    age: 30,
    email: "alex@example.com",
    address: {
        city: "NewYork",
        zip: "10001"
    }
};

const userInfo = user;
const { name, address: { city } } = userInfo
console.log(name);
console.log(city);
