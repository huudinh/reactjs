// pseudo-code
function App() {
    if (someState >= 0) {
        useEffect(() => {
            // THIS IS INCORRECT 👎
        })
    }
}

// pseudo-code
function App() {
    useEffect(() => {
        if (someState >= 0) {
            // this is okay 👍
        }
    });
}

