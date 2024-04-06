// Trong Javascript
function getVotingMessage(age) {
    return (age >= 18) && "You can vote";
}


// Trong ReactJS
function Counter(props) {
    return <>
        <h1>You have {props.count} items</h1>
        {props.count && <p>You have some items.</p>}
    </>;
}

