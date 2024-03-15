
![Create-HTML-1](images/components.jpg) 

# RS63 Lifting State Up

[Code Todo](https://huudinh.github.io/learn-reactjs/lifting-state-up.html)

Trong bài học này, chúng ta sẽ khám phá khái niệm lifting state up (nâng trạng thái của component con lên thành trạng thái của component cha).

Để chia sẻ trạng thái giữa hai component, bạn có thể nâng trạng thái đó lên thành trạng thái của component cha chung gần nhất của chúng.

Điều này có nghĩa là nếu bạn có hai component phụ thuộc vào cùng một trạng thái thì trạng thái sẽ được xác định trong component cha chung gần nhất của chúng.

Giả sử chúng ta muốn xây dựng một Danh sách việc cần làm; chúng ta sẽ cần một form để thêm "todo" cũng như một danh sách ul để liệt kê các tác vụ.

```
import {useState} from "react";

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [entry, setEntry] = useState("");

    function handleEntryChange(event) {
        setEntry(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        // add the new entry
        setTodos([...todos, entry]);
        // reset/empty the textbox
        setEntry("");
    }

    return <>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="todo">Enter To do: </label>
            <input type="text" id="todo" value={entry} onChange={handleEntryChange} />
        </form>
        <ul>
            {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
    </>;
}
```

Bây giờ hãy tách component này thành 2 component mới:

- `<TodoForm />` chứa `<form>` và các component con của nó
- `<TodoList />` chứa `<ul>` và các component con của nó

Vấn đề là cả hai component `TodoForm` và `TodoList` đều phụ thuộc vào cùng một trạng thái, đó là `todos` và `entry`.

Biểu mẫu cần trạng thái `todos` để có thể thêm `entry` mới vào mảng `todos`.

Vì vậy, chúng ta phải nâng trạng thái và định nghĩa trạng thái trong component cha, đó là `<TodoApp />`.

Sau đó, component `TodoApp` này sẽ truyền trạng thái và phương thức `onChange` xuống cả hai component con.

Như vậy, trạng thái đã được định nghĩa trong component cha.

Code sau khi được tái cấu trúc:

```
// TodoApp.js
import {useState} from "react";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [entry, setEntry] = useState("");

    function handleEntryChange(event) {
        setEntry(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        setTodos([...todos, entry]);
        setEntry("");
    }

    return <>
        <TodoForm entry={entry} onEntryChange={handleEntryChange} onFormSubmit={handleFormSubmit} />
        <TodoList todos={todos} />
    </>;
}

// TodoForm.js
function TodoForm(props) {
    return <form onSubmit={props.onFormSubmit}>
        <label htmlFor="todo">Enter To do: </label>
        <input type="text" id="todo" value={props.entry} onChange={props.onEntryChange} />
    </form>;
}

// TodoList.js
function TodoList(props) {
    return <ul>
        {props.todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>;
}
```

Lưu ý rằng về mặt lý thuyết, bạn có thể để trạng thái `entry` trong component `TodoForm`. Khi đề cập đến việc nâng trạng thái lên component cha, rất khó để đưa ra lời khuyên áp dụng cho mọi tình huống.

Tuy nhiên, việc có trạng thái chung trong component cha chung gần nhất mang lại một số lợi ích nhất định (mặc dù code có thể dài hơn một chút). Cụ thể:

- Component cha chung trở thành nguồn dữ liệu duy nhất. Điều này giúp dễ dàng việc tìm kiếm và sửa lỗi, vì bạn biết chỉ có một nơi duy nhất mà trạng thái sẽ được thay đổi.
- Có một vị trí quản lý trạng thái chung giúp duy trì tính nhất quán trong ứng dụng. Nếu bạn tạo một số logic xác thực cho `entry`, bạn chỉ cần thực hiện một lần duy nhất trong component cha chung.

### Note

Chúng ta nâng trạng thái chung lên thành trạng thái của component cha vì chúng ta muốn dữ liệu được truyền từ component cha xuống component con.

Khi dữ liệu được truyền xuống, ứng dụng trở nên dễ dàng kiểm soát và việc tìm kiếm và cô lập lỗi trở nên dễ dàng hơn.

Quy ước đặt tên onSubjectEvent là rất quan trọng vì nó gợi nhớ rằng prop là một hàm sự kiện.

Hãy nhớ rằng có nhiều cách để giải quyết cùng một bài tập trong React. React không ép buộc bạn phải sử dụng một cách duy nhất. Trong suốt khóa học này, Tek4 đưa ra những đề xuất vì khi bắt đầu với một framework mới, bạn có thể gặp khó khăn trong việc đưa ra quyết định riêng của mình. Khi làm việc với các công ty lớn hoặc trong các dự án lớn hơn, bạn sẽ biết đến những phương pháp tiếp cận khác nhau mà bạn có thể áp dụng.

### Tóm lại

- Để chia sẻ một trạng thái giữa hai component, bạn có thể nâng trạng thái chung lên thành trạng thái của component cha chung gần nhất của chúng.

*Bài tiếp theo [RS64 Phân chia component](/lesson/session/session_064_component_analysis.md)*