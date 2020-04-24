import React, { useState } from "react"
import useInterval from "./useInterval"
import "./styles.css"

const ChangeWord = ({ words, time }) => {
  const [word, setWord] = useState(words[0])

  useInterval(() => {
    setWord(words[Math.floor(Math.random() * words.length)])
  }, time)

  return word;

}

export default ChangeWord
