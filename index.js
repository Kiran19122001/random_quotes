const btn = document.getElementById("btn")
const quote = document.getElementById("quote")
const author = document.getElementById("author")
const funCall = async (event) => {
    const options = {
        method:"GET"
    }
    quote.innerText = "Updating...."
    author.innerText = "Updating...."
    btn.innerText="Loading..."
    const respose = await fetch('https://api.quotable.io/random', options)
    const result = await respose.json()
    btn.innerText="Get a quote"
    quote.innerText = result.content
    author.innerText=`~ ${result.author}`
    console.log(result)
}
btn.addEventListener('click', (event)=>{
    funCall(event)
})