
![Create-HTML-1](images/components.jpg) 

# RS62 Cải tiến Component Form

Bây giờ chúng ta đã biết cách truyền hàm dưới dạng props trong React, hãy xem xét component React sau:

```
// index.js
import {useState} from "react";

function App() {
    const [name, setName] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return <div>
        <h2>Hello {name}</h2>
        <form>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
        </form>
    </div>
}
```

Chúng ta muốn tái cấu trúc component thành:

```
// index.js
import {useState} from "react";
import NameForm from "./NameForm.js";

function App() {
    const [name, setName] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return <div>
        <h2>Hello {name}</h2>
        <NameForm />
    </div>
}
```

Để ý đoạn code đã tái cấu trúc component `<form>` thành component `NameForm`.

Lưu ý rằng đoạn code này sẽ không hoạt động vì chúng ta cần truyền các sự kiện `name` và `onChange` cho component `NameForm`. 

### 1. Truyền "value" và "onChange"

Component `NameForm` cần hiển thị một hộp văn bản và cập nhật giá trị của nó mỗi khi có thay đổi; do đó, nó cần thiết lập các `prop` value và `onChange`.

Để làm điều đó, chúng ta bắt đầu bằng cách truyền chúng từ component `App` xuống:

```
// index.js
import NameForm from "./NameForm.js";

function App() {
    const [name, setName] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return <div>
        <h2>Hello {name}</h2>
        <NameForm name={name} onNameChange={handleNameChange} />
    </div>
}
```

Một số điều cần lưu ý:

- `name={name}` truyền biến trạng thái `name` xuống
- `onNameChange={handleNameChange}` truyền hàm `handleNameChange` (như chúng ta đã thấy trong chương trước)
- `onNameChange` tuân theo quy ước đặt tên 
- Để ý trạng thái được tạo và duy trì trong component cha.
- Component `App` là stateful component vì nó quản lý trạng thái.

### 2. Sử dụng "value" và "onChange"

Bây giờ trong component NameForm, chúng ta có thể sử dụng 2 prop này:

```
//NameForm.js
export default function NameForm(props) {

    return <form>
        <label htmlFor="name">Name: </label>
        <input 
            type="text" 
            id="name" 
            value={props.name} 
            onChange={props.onNameChange} />
    </form>
}
```

Một số điều cần lưu ý:

- Component là `stateless` vì nó KHÔNG quản lý trạng thái. Mặc dù có một hộp văn bản, component này có một trình xử lý onChange gọi `props.onNameChange` thuộc về component cha của nó.
- Component cha xử lý trạng thái.
- `value={name}` đã thay đổi thành `value={props.name}` vì name không còn là trạng thái nội bộ nữa mà là một prop nhận được từ component cha.
- Cách làm tương tự áp dụng cho `onChange`.

### Bạn có nhận thấy rằng 

App là stateful component và NameForm là stateless component không?

Vì vậy, trạng thái chỉ được quản lý trong component cha App.

Đây là ví dụ cơ bản nhất về lifting state up (nâng trạng thái của component con lên thành trạng thái của component cha), hiện nay chưa có bài giải thích chi tiết về cái tên này, nhưng bạn không cần lo lắng về điều đó.

### Tóm lại

- Khi tái cấu trúc một biểu mẫu thành component con, biểu mẫu có thể trở thành stateless component và trạng thái sẽ được quản lý bởi component cha.
- Để làm được điều đó, bạn phải truyền `value` và `onChange` từ component cha xuống component con và sau đó sử dụng chúng như `props.value` và `props.onChange`.

*Bài tiếp theo [Chia sẻ state giữa các component](/lesson/session/session_063_lifting_state_up.md)*