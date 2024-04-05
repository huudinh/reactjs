function App(props) {
    const loginButton = <button>Login</button>;
    const signupButton = <button>Signup</button>;
    if (props.existingUser) {
        return (
            <div className="app-container">
                {loginButton}
            </div>
        );
    }
    return (
        <div className="app-container">
            {signupButton}
        </div>
    );
}

// Lưu trữ phần tử JSX vào biến cho phép bạn tái sử dụng biến này nếu nó được lặp lại nhiều lần trong một component hoặc bạn cần trả về nó theo điều kiện


function getWelcomeMessage(type) {
    if (type === "admin") {
        return "Welcome admin";
    } else {
        return "Welcome user";
    }
}

// Có thể được viết lại như sau:
function getWelcomeMessage(type) {
    return (
        (type === "admin") ? "Welcome admin" : "Welcome user");
}

// Toán tử ba ngôi là cú pháp JavaScript cho phép bạn thay thế điều kiện if/else bằng ? :
// ? : là toán tử ba ngôi, trong đó biểu thức sau ? sẽ được thực hiện khi điều kiện (type === "admin") là true và biểu thức sau : sẽ được thực hiện khi điều kiện là false