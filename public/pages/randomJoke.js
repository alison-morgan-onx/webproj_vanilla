function getRandomJoke() {
    const setJoke = document.querySelector(".randomJoke")
    fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers : { 
            'Accept': 'application/json'
           }
    })
    .then(
        response => {
            response.json()
                .then((json) => {
                    console.log(json)
                    setJoke.innerHTML = json.joke
                })
        }
    ).
    catch(
        err => {
            console.log('shits fucked', err)
        }
    )
}

function copyJoke() {
    const jokeToCopy = document.querySelector(".randomJoke").innerHTML
    navigator.clipboard.writeText(jokeToCopy).then(() => {
        console.log('copied to clipboard')
    }, () => {
        console.log('no copied to clipboard')
    });
}