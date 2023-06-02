import { useState } from 'react'
import './App.css'
import { arrInfoList } from './arrInfo.js';

function App() {
  return (
    <>
      <h2 class="text-2xl font-medium text-gray-900 title-font mb-2 text-left">Array 101</h2>
      <ArrInfo />
      <h2 class="text-2xl font-medium text-gray-900 title-font mb-2 text-left">Promise(reject, resolve) and Async/Await</h2>
      <QuizForm />
    </>
  )
}

function ArrInfo() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(true);
  const hasNext = index < arrInfoList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handlePrevClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(arrInfoList.length - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let arrInfo = arrInfoList[index];
  const detailsList = arrInfo.details.split('\n');
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
          <i>{arrInfo.name} </i> <br />
          modifying: {arrInfo.modifying}
        </h2>
        <div className="md:w-3/5 md:pl-6">
          <h3>
            ({index + 1} of {arrInfoList.length})
          </h3>
          <p className="leading-relaxed text-base">{arrInfo.description}</p>
          {showMore && <ul className='list-inside list-none text-left mt-4'>
            {detailsList.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>}
          <div className="flex md:mt-4 mt-6 justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4" onClick={handleMoreClick}>
              {showMore ? 'Hide' : 'Show'} details
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={handlePrevClick}>
              Prev
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={handleNextClick}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuizForm() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return (
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-12 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 title-font">
              That's right! (Even if we apply to be a Java Developer, we also need to know about the frontend stuff tooooooooooooooooooo)
            </h3>
          </div>
        </div>
      </section>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleInputChange(e) {
    setAnswer(e.target.value);
  }

  function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'react'
        if (shouldError) {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        } else {
          resolve();
        }
      }, 1500);
    });
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col px-5 py-12 justify-center items-center">
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 title-font">
            Easy quiz
          </h2>
          <p className="mb-8 leading-relaxed">
            What is the frontend framework we are learning now?
          </p>
          <div className="flex w-full justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <input
                type="text"
                value={answer}
                onChange={handleInputChange}
                disabled={status === 'submitting'}
                className={`w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${status === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''}`}
              />
            </div>
            <button className={`inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg ${answer.length === 0 || status === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={
                answer.length === 0 ||
                status === 'submitting'
              }
              onClick={handleSubmit}>
              Submit
            </button>
          </div>
          {error !== null &&
            <p className="mt-4 leading-relaxed text-orange-900">
              {error.message}
            </p>
          }
        </div>
      </div>
    </section>
  );
}

export default App
