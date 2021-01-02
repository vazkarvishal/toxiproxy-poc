import React from "react"
import "./styles.css"
import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:8000",
  headers: { 'Access-Control-Allow-Origin': "localhost" }
})
class Recipes extends React.Component {

  state = {
    recipes: {}
  }
  buttonHandler = () => {
    instance.get('/recipes')
      .then((response) => {
        console.log(response)
      })
  }
  render() {
    return (
      <>
        <button className="recipe-button" onClick={this.buttonHandler} >Get all Recipes</button>
        <div className="recipe-result-wrapper">{JSON.stringify(this.state.recipes)}</div>
      </>
    )
  }
}

export default Recipes