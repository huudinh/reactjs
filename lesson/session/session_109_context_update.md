![Create-HTML-1](images/context.jpg) 

# RS109 Cập nhật giá trị Context

### Biến trạng thái 

Đôi khi chúng ta muốn thay đổi giá trị của theme tại một thời điểm nào đó, để làm điều đó, chúng ta cần tạo một biến trạng thái cho chủ đề thay vì sử dụng biến thông thường.

Chúng ta có thể sử dụng hook useState bên trong Context:

```
import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    // toggle the theme here
  }

  const value = {
    theme: theme,
    toggleTheme: toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
```

### Triển khai hàm

Và bây giờ chúng ta có thể triển khai hàm toggleTheme:

```
function toggleTheme() {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
}
```

hàm sẽ chuyển đổi theme từ "dark" sang "light" và ngược lại.

### Cập nhật theme

Với context trên, chúng ta có thể cập nhật theme từ bất kỳ đâu trong ứng dụng, miễn là chúng ta sử dụng ThemeContext. Dưới đây là cách thực hiện:

```
import {useContext} from "react";
import {ThemeContext} from "./ThemeContext.js";

function App() {
    const context = useContext(ThemeContext);
    console.log(context); // {theme: "dark", toggleTheme: Function}

    return <button onClick={() => context.toggleTheme()}>Toggle Theme</button>;
}
```

useContext(ThemeContext) bây giờ trả về một đối tượng chứa theme và hàm toggleTheme.

Sau đó, chúng ta gọi hàm context.toggleTheme() khi nút được nhấp (onClick).

### Tóm lại

- Việc cập nhật trạng thái thông qua context.toggleTheme() sẽ kích hoạt thông báo (hiển thị lại) tất cả các component sử dụng ThemeContext này, đó là lý do tại sao bạn sẽ thấy theme mới được áp dụng ngay lập tức.

*Bài tiếp theo [RS110 Ký hiệu dấu chấm](/lesson/session/session_110_dot.md)*