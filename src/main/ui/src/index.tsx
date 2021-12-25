import 'react-hot-loader'
import * as React from "react"
import * as ReactDom from "react-dom"
import App from "./App"
import "./App.css"

ReactDom.render(<App/>, document.getElementById('app'))
//@ts-ignore
if (module.hot) {
    //@ts-ignore
    module.hot.accept(function() {
        console.log('Accepting the updated App.tsx module!');
        App()
    })
}