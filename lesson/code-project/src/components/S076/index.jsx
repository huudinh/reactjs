const [running, setRunning] = useState(false)

useEffect(() => {    
    if (running) { 
        let timerId = setTimeout(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);
        return () => {
            clearTimeout(timerId)
        }
    }
});

function handleButtonClick() {
    setRunning(prevValue => !prevValue);
}

