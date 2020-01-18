import Express from "express"
import { join as joinPath } from "path"

const app = Express()

const bowerFilesPath = joinPath(__dirname, "bower_components")
app.use("/bower_components", Express.static(bowerFilesPath, { fallthrough: false }))

const cssFilesPath = joinPath(__dirname, "css")
app.use("/css", Express.static(cssFilesPath, { fallthrough: false }))

const jsFilesPath = joinPath(__dirname, "js")
app.use("/js", Express.static(jsFilesPath, { fallthrough: false }))

const viewsPath = joinPath(__dirname, "views")
app.use("/views", Express.static(viewsPath, { fallthrough: false }))

const photosPath = joinPath(__dirname, "photos")
app.use("/photos", Express.static(photosPath, { fallthrough: false }))

const indexFilePath = joinPath(__dirname, "index.html")
app.use("*", (req, res) => {
    res.sendFile(indexFilePath)
})

const port = 7001
app.listen(port, () => {
    console.log(`Now listening on localhost:${ port }`)
})
