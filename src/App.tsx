import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CreatePost, DeletePost, GetPost, UpdatePost } from "./componentes"

const App = () => {
  return (
      <div>
        <GetPost />
      </div>
  )
}
export default App