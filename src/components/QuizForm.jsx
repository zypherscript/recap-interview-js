import { useState } from 'react'

const QuizForm = () => {
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

export default QuizForm;