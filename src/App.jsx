import { useState } from 'react'
import './App.css'
import { arrInfoList } from './arrInfo.js';

function App() {
  return (
    <ArrInfo />
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

export default App
