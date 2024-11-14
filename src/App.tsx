import { useState } from 'react'
import './App.css'

function App() {


  // 1 - variaveis
  const name: string = "Matheus";
  const age: number = 30;
  const isWorking: boolean = true;

  return (
    <>
    <h1>TypeScript com React</h1>
    <h2>Nome: {name}</h2>
    <h2>Idade: {age}</h2>
    {isWorking && (
      <p>Está trabalhando</p>
    )}

    </>
  )
}

export default App
