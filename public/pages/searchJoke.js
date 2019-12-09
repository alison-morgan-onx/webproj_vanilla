let page = 1

function searchJokes(pageDir) {
    // page = 1;
    const setJoke = document.getElementsByTagName("input")[0].value
    const jokeResults = document.querySelector(".jokeResults")
    const prevButton = document.querySelector(".prevPage")
    const nextButton = document.querySelector(".nextPage")


    if (jokeResults.innerHTML && pageDir == "next page") {
        page += 1
        console.log(page)
    } else if (jokeResults.innerHTML && pageDir == "prev page") {
        page -= 1
    }
    jokeResults.innerHTML = ""
    fetch(`https://icanhazdadjoke.com/search?term=${setJoke}&page=${page}`,{
        method: "GET",
        headers : { 
            'Accept': 'application/json'
           },
        parameters: {
            page: page
        }
    })
    .then(
        response => {
            response.json()
                .then((json) => {
                    if (json.results.length == 0 ) {
                        jokeResults.innerHTML = "Try again, no results to return :("
                    }
                    else {
                        if (json.current_page < json.next_page && json.current_page > 1) {
                            console.log('if', json)
                            nextButton.disabled = false
                            prevButton.disabled = false
                        } 
                        else if (json.current_page < json.next_page) {
                            nextButton.disabled = false
                            prevButton.disabled = true
                        }
                        else {
                            console.log('else', json)
                            if (json.current_page > json.previous_page){
                                nextButton.disabled = true
                                prevButton.disabled = false
                            }
                        }
                        for (let i = 0; i < json.results.length; i++) {
                            jokeResults.innerHTML += json.results[i].joke
                        }
                    }
                })
        }
    ).
    catch(
        err => {
            console.log('could not return any results', err)
        }
    )
}