// 1. Process

export default function DestrArray(props){
    const [name, age, details] = props.info;
    console.log(name, age, details);
}

// 2. Input

const data = ["Sam", 23, {
    id: 1,
    created_at: "Jan 19"
}];

<DestrArray info={data} />

// 3. Output

// Sam 23 {id: 1, created_at: "Jan 19"}

