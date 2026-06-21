import { useState } from 'react'
import { questions, getLevel } from './data/questions'
import LandingScreen from './components/LandingScreen'
import QuestionScreen from './components/QuestionScreen'
import ResultScreen from './components/ResultScreen'

const SCREEN = { LANDING: 'landing', QUIZ: 'quiz', RESULT: 'result' }

export default function App() {
  const [screen, setScreen] = useState(SCREEN.LANDING)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState(Array(questions.length).fill(null))

  const selected = answers[currentIndex]
  const score = answers.reduce((sum, a) => sum + (a ?? 0), 0)
  const level = getLevel(score)

  function handleStart() {
    setScreen(SCREEN.QUIZ)
    setCurrentIndex(0)
    setAnswers(Array(questions.length).fill(null))
  }

  function handleSelect(idx) {
    setAnswers((prev) => {
      const next = [...prev]
      next[currentIndex] = idx
      return next
    })
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1)
    } else {
      setScreen(SCREEN.RESULT)
    }
  }

  function handlePrev() {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1)
  }

  function handleRestart() {
    setScreen(SCREEN.LANDING)
    setCurrentIndex(0)
    setAnswers(Array(questions.length).fill(null))
  }

  if (screen === SCREEN.LANDING) {
    return <LandingScreen onStart={handleStart} />
  }

  if (screen === SCREEN.QUIZ) {
    return (
      <QuestionScreen
        question={questions[currentIndex]}
        currentIndex={currentIndex}
        total={questions.length}
        selected={selected}
        onSelect={handleSelect}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    )
  }

  return <ResultScreen score={score} level={level} onRestart={handleRestart} />
}
