export default function DestrFunc(props){
    function sayHello() {
        return props.message;
    }
    
    function getUser() {
        return [props.name, sayHello];
    }

    const [name, sayHelloFunction] = getUser();

    console.log(sayHelloFunction(), name); 
}