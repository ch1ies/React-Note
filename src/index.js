import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import getStudents from "./service"

ReactDom.render(<App/> ,document.getElementById("root"))

// getStudents().then(data => console.log(data))