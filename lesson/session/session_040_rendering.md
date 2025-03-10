
![Create-HTML-1](images/components.jpg) 

# RS40 Rendering theo điều kiện

### Rendering theo điều kiện là gì

Một component có thể hiển thị nhiều component khác nhau dựa trên một điều kiện cụ thể.

Đây được gọi là kết xuất có điều kiện (cụ thể là kết xuất component theo điều kiện).

Đây là một kỹ thuật hữu ích khi bạn muốn hiển thị các component khác nhau dựa trên điều kiện.

### Áp dụng 

Chúng ta có thể áp dụng điều kiện cho component để cuối cùng có được component theo điều kiện:

```
function WelcomeUser(props){
    if (props.user) {
        return <h1>Welcome {props.user}</h1>;
    } else {
        return <h1>Please login!</h1>;
    }
}
```

Giả sử chúng ta có hai component khác nhau (`DarkTheme` và `LightTheme`), component `<App />` có thể hiển thị một trong hai component dựa trên kết quả của điều kiện if.

```
import DarkTheme from "./DarkTheme.js"
import LightTheme from "./LightTheme.js"

function App(props) {
    if (props.theme === "dark") {
        return <DarkTheme />;
    }
    return <LightTheme />;
}
```

### Bài tập

**Câu 1:** Ý nghĩa của việc Render theo điều kiện

**Câu 2:** Bạn thường áp dụng kỹ thuật này trong các trường hợp nào

*Bài tiếp theo [RS41 Toán tử 3 ngôi](/lesson/session/session_041_rendering_more.md)*