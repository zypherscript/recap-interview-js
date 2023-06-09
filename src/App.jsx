import './App.css'
import PersonList from './components/PersonList';
import Accordion from './components/Accordion';
import QuizForm from './components/QuizForm';
import ArrInfo from './components/ArrInfo';

function App() {
  return (
    <>
      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 text-left">Array 101</h2>
      <ArrInfo />
      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 text-left">Promise(reject, resolve) and Async/Await</h2>
      <QuizForm />
      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 text-left">CSS/SaSS</h2>
      <Accordion />
      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 text-left">Axios 101</h2>
      <PersonList />
    </>
  )
}

export default App
