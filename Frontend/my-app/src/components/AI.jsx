import  { useState, useEffect } from 'react';
import axios from 'axios';

import { useSpeechSynthesis } from 'react-speech-kit';
import '../styles/ai.css';

function AI() {
    const [instructions, setInstructions] = useState('');
    const [story, setStory] = useState('');
  
    const [showExercise, setShowExercise] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [exerciseData, setExerciseData] = useState([]);
    const { speak, cancel, speaking, supported } = useSpeechSynthesis();
    const [lastCharIndex, setLastCharIndex] = useState(0); // Track the last character index read
    const [isReading, setIsReading] = useState(false); // Track whether reading is currently happening
    const [isPaused, setIsPaused] = useState(false); // Track whether reading is paused
    const [highlightedWordIndex, setHighlightedWordIndex] = useState(-1); // Track the index of the currently spoken word

    useEffect(() => {
        // Highlight words being spoken
        if (isReading && !isPaused && speaking) {
            const timer = setInterval(() => {
                setHighlightedWordIndex(lastCharIndex);
            }, 100); // Update highlight frequently
            return () => clearInterval(timer);
        }
    }, [isReading, isPaused, speaking, lastCharIndex]);

    const generateStory = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/generate-story', { instructions });
            setStory(response.data.story);
            setShowExercise(true);
            generateExercise(response.data.story);
          
            setLastCharIndex(0); // Reset lastCharIndex when a new story is generated
            setIsReading(false); // Reset reading state when a new story is generated
            setIsPaused(false); // Reset paused state when a new story is generated
        } catch (error) {
            console.error('There was an error generating the story!', error);
            alert('Error generating story: ' + (error.response ? error.response.data.error : error.message));
        }
    };

    const generateExercise = (story) => {
        const storyLines = story.split("<br>");
        const exercises = [];

        for (let i = 0; i < storyLines.length - 3; i++) {
            const question = `What happened next after "${storyLines[i]}"?`;
            const options = storyLines.slice(i + 1, i + 4);
            const correctAnswerIndex = Math.floor(Math.random() * options.length);
            const correctAnswer = String.fromCharCode(97 + correctAnswerIndex);
            exercises.push({
                question,
                options,
                correctAnswer
            });
        }

        setExerciseData(exercises);
        setCurrentExercise(0);
    };

  

    const handleExerciseSubmit = (event) => {
        event.preventDefault();
        const selectedAnswer = event.target.answer.value;
        const currentExerciseData = exerciseData[currentExercise];

        if (selectedAnswer === currentExerciseData.correctAnswer) {
            setCorrectCount(correctCount + 1);
        } else {
            setIncorrectCount(incorrectCount + 1);
        }

        setCurrentExercise(currentExercise + 1);
    };

    const restartExercise = () => {
        setCorrectCount(0);
        setIncorrectCount(0);
        setCurrentExercise(0);
        setStory('');
        setShowExercise(false);
        
    };

    const readStoryAloud = () => {
        cancel(); // Stop any ongoing speech synthesis
        setHighlightedWordIndex(-1);
        setLastCharIndex(0);
        setIsReading(true);
        setIsPaused(false);
        speak({
            text: story,
            onBoundary: (event) => {
                if (event.name === 'word') {
                    setLastCharIndex(event.charIndex);
                }
            },
            onEnd: () => {
                setIsReading(false);
            }
        });
    };

    const pauseResumeReading = () => {
        if (isReading) {
            if (isPaused) {
                // Resume reading from where it was paused
                setIsPaused(false);
                speak({
                    text: story.substring(lastCharIndex), // Start from where it was paused
                    onBoundary: (event) => {
                        if (event.name === 'word') {
                            setLastCharIndex(event.charIndex); // Update lastCharIndex
                        }
                    },
                    onEnd: () => {
                        setIsReading(false);
                    }
                });
            } else {
                // Pause reading
                setIsPaused(true);
                cancel(); // Cancel the ongoing speech
            }
        } else {
            // If reading is not ongoing, start reading from the beginning
            setIsReading(true);
            setIsPaused(false);
            speak({
                text: story,
                onBoundary: (event) => {
                    if (event.name === 'word') {
                        setLastCharIndex(event.charIndex); // Update lastCharIndex
                    }
                },
                onEnd: () => {
                    setIsReading(false);
                }
            });
        }
    };

    const restartReading = () => {
        cancel();
        setLastCharIndex(0);
        setIsReading(true);
        setIsPaused(false);
        speak({
            text: story,
            onBoundary: (event) => {
                if (event.name === 'word') {
                    setLastCharIndex(event.charIndex);
                }
            },
            onEnd: () => {
                setIsReading(false);
            }
        });
    };

    return (
        <div className="container" style={{}}>
            <h1 style={{color:"rgb(227,32,209)",fontSize:"35px"}}>StoryBuddy - Interactive Story Generator</h1>
            <form id="story-generator-form" onSubmit={generateStory}>
                <label htmlFor="user-instructions" style={{color:"rgb(227,32,209)", fontSize:"25px"}}>Enter story instructions:</label>
                <input className='input'
                    type="text"
                    id="user-instructions"
                    
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    required
                />
                <button type="submit" className='buttom'>Generate Story</button>
            </form>
          
            {story && (
                <div id="story">
                    <h2 style={{fontSize:"25px"}}>Your Story:</h2>
                    <br />
                    <div className='container1'>
                    <p>
                        {story.split(' ').map((word, index) => (
                            <span
                                key={index}
                                className={highlightedWordIndex === index ? 'highlight' : ''}
                                style={{ color: highlightedWordIndex === index ? 'red' : 'initial',fontSize:"17px" }}
                            >
                                {word}{' '}
                            </span>
                        ))}
                    </p>
                    </div>
                    <div className='parentbutton'>
                    <button onClick={readStoryAloud} className="button1">Start Reading </button>
                    <button onClick={pauseResumeReading} className="button1">{isPaused ? 'Resume Reading ' : 'Pause Reading '}</button>
                    <button onClick={restartReading} className="button1">Restart Reading</button>
                    </div>
                   
                </div>
            )}

          

            {showExercise && currentExercise < exerciseData.length && (
                <div id="exercise">
                    <h2>Exercise</h2>
                    <p>{exerciseData[currentExercise].question}</p>
                    <form id="exercise-form" onSubmit={handleExerciseSubmit}>
                        {exerciseData[currentExercise].options.map((option, index) => (
                            <label key={index}>
                                <input type="radio" name="answer" value={String.fromCharCode(97 + index)} required />
                                {option}
                            </label>
                        ))}
                        <button type="submit">Submit Answer</button>
                    </form>
                </div>
            )}

            {showExercise && currentExercise >= exerciseData.length && (
                <div id="result">
                    <br />
                    <button id="restart" onClick={restartExercise} className='button1'>Restart</button>
                </div>
            )}
            
        </div>
    );
}

export default AI;


