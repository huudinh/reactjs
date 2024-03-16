![Create-HTML-1](images/context.jpg) 

# RS106 Tạo Context

### Tạo Context

Bước đầu tiên là tạo một Context mới. Để làm điều đó, chúng ta cần thêm một named export: `createContext` từ gói React, ví dụ: `import {createContext} from "react"`.

Sau đó, chúng ta cần gọi hàm `createContext()` và lưu kết quả trả về vào một biến.

```
import React, {createContext} from "react";

const ThemeContext = createContext();
```

### Tạo Provider

Mỗi context đều cần một Provider. Provider sẽ cung cấp dữ liệu cho context. Trong trường hợp này, chúng ta đang tạo `ThemeContext` và muốn cung cấp `theme` (ví dụ `"dark"` hoặc `"light"`).

```
import { createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const theme = "dark";

  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
```

`ThemeProvider` là một component React nhận props và hiển thị `props.children` được đóng gói bởi `<ThemeContext.Provider>`.

`ThemeContext.Provider` nhận một value, đó là giá trị mà tất cả các component con sẽ nhận được.

Cú pháp `.` tương tự cú pháp `React.StrictMode`. `ThemeContext` là một đối tượng và `Provider` là một khóa trong đối tượng đó. 

Nói chung, Provider sẽ đóng gói component `<App />` và cung cấp giá trị `value="dark"` để chúng ta có thể đọc theme từ bất kỳ component nào.

### Xuất Context & Provider

Cuối cùng, chúng ta cần xuất ThemeContext và ThemeProvider: export {ThemeContext, ThemeProvider}.

Dưới đây là chương trình hoàn chỉnh:

```
import { createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const theme = "dark";

  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
```

### Tóm lại

- Các bước tạo context:
    - Tạo context
    - Tạo provider cho context.
    - Xuất context và provider.
- Provider sẽ đóng gói các component và cung cấp cho chúng giá trị (dữ liệu toàn cục).

*Bài tiếp theo [RS107 Sử dụng Context](/lesson/session/session_107_context_use.md)*