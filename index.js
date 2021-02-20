const express = require("express")
const app = express()
const port = 3000
const wget = require("wget")

app.get('/', (req, res) => {
    res.send("You are an idiot innit?")
    console.log("Somone accesed /")

})


app.use(express.static('public'))

app.post('/uploader', (req, res) => {
    try {
    var url = req.param("url")
    var name = req.param("name")
    if (!url) {
        return res.send("Error! Url not found!")
    }
    if (!name) {
        return res.send("Error! Name not found!")
    }
    wget.download(url, "./public/" + name + ".png")
    res.send("Done!")
    } catch(error) {
        console.log(error)
        res.send("Something went wrong, most likely it's your fault if you are sure that it wasn't you then tell me.")
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})