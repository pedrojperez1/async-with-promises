let base_url = "http://numbersapi.com"
let $numberFacts = $("#number-facts")
let funFactsPromises = [];
for (i of [1,2,3,4]) {
    funFactsPromises.push(axios.get(`${base_url}/4?json`));
}

Promise.all(funFactsPromises)
    .then(funFacts => {
        funFacts.forEach(f => $numberFacts.append(`<li>${f.data.text}</li>`));
    })
    .catch(err => console.log("ERROR!", err))