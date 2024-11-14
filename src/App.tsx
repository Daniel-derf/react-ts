import { useState } from 'react'
import './App.css'

function App() {

  // 1 - variaveis
  const name: string = "Daniel";
  const age: number = 20;
  const isWorking: boolean = true;

  // 2 - funcções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`
  }

  return (
    <>
    <h1>TypeScript com React</h1>
    <h2>Nome: {name}</h2>
    <h2>Idade: {age}</h2>
    {isWorking && (
      <p>Está trabalhando</p>
    )}
    <h3>{userGreeting(name)}</h3>

    </>
  )
}

export default App
