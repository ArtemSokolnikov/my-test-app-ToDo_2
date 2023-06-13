import React, { useState, useEffect } from 'react';

const App = () => {
    const targetWord = 'HELLO';
    const [guess, setGuess] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [keyboard, setKeyboard] = useState({});

    useEffect(() => {
        setKeyboard(getInitialKeyboardState());
    }, []);

    const getInitialKeyboardState = () => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return alphabet.split('').reduce((keyboardState, letter) => {
            keyboardState[letter] = false;
            return keyboardState;
        }, {});
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleKeyDown = (event) => {
        const { key } = event;
        if (key.match(/^[a-zA-Z]$/)) {
            setGuess((prevGuess) => prevGuess + key.toUpperCase());
            setKeyboard((prevKeyboard) => ({
                ...prevKeyboard,
                [key.toUpperCase()]: true,
            }));
        }
    };

    const handleGuess = (event) => {
        event.preventDefault();
        if (guess.length !== 5) {
            alert('Введите слово из 5 букв');
            return;
        }
        setAttempts(attempts + 1);
        setGuess('');
        setKeyboard(getInitialKeyboardState());
    };

    const getLetterColor = (letter) => {
        if (targetWord.includes(letter)) {
            return 'green';
        } else {
            return 'red';
        }
    };



    return (
        <div>
            <h1>Wordle</h1>
            <p>Попытка: {attempts}</p>
            <p>Введите слово из 5 букв:</p>
            <form onSubmit={handleGuess}>
                <input
                    type="text"
                    value={guess}
                    maxLength={5}
                    onChange={(e) => setGuess(e.target.value.toUpperCase())}
                />
                <button type="submit">Проверить</button>
            </form>
            <div>
                {Array.from(guess).map((letter, index) => (
                    <span key={index} style={{ color: getLetterColor(letter) }}>
            {letter}
          </span>
                ))}
            </div>
            <div>
                {Object.keys(keyboard).map((letter) => (
                    <span
                        key={letter}
                        style={{ color: keyboard[letter] ? 'blue' : 'black' }}
                    >
            {letter}
          </span>
                ))}
            </div>
        </div>
    );
};

export default App;