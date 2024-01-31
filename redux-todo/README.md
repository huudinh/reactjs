## REDUX Là gì

### Mục Lục

- [1. Ý tưởng](#2)
- [2. Setup môi trường](#2)
- [3. Cấu hình Redux trong project](#3)
- [4. Tổ chức Redux trong project](#4)


<a name="1"></a>
**1. Ý tưởng (Idea)**

- Xây dựng ứng dụng tạo sửa xóa liên hệ đơn giản trong đó Sử dụng Redux để quản lý trạng thái contact.  

<a name="2"></a>
**2. Setup môi trường**

- Cài đặt 2 thư viện redux và react-redux:
    ```
    npm install redux react-redux
    ```
<a name="3"></a>
**3. Cấu hình Redux trong project**

- actions/contact.js
Đầu tiên ta định nghĩa tất cả contact action. Để ý mình vừa thêm parameter number cho các action để có thể tăng/giảm một giá trị theo ý muốn. Các action lúc này ngoài tên của nó ra (type), nó còn mang theo data là number (data đi kèm này thường được gọi là payload).

    ```
    export const createContact = (contact) => {
        return {
            type: "CREATE_NEW_CONTACT",
            payload: contact,
        };
    };
    export const removeContact = (id) => {
        return {
            type: "REMOVE_CONTACT",
            payload: id,
        };
    };
    export const updateContact = (id, contact) => {
        return {
            type: "UPDATE_CONTACT",
            payload: id,
            contact: contact
        };
    };

    ```

- reducers/contact.js

    Tiếp theo định nghĩa contact reducer. Đơn giản mà đúng không? Nhớ thêm case default để trả về chính state đó khi không có action tương ứng nhé.
    ```
    export const contactReducer = (state = [], action) => {
        switch (action.type) {
            case "CREATE_NEW_CONTACT":
                return  [...state, action.payload];
            case "REMOVE_CONTACT":
                return state.filter((data, i) => i !== action.payload);
            case "UPDATE_CONTACT":
                return state.map((data, i) => i === action.payload ? action.contact : data);
            default:
                return state;
        }
    };

    export default contactReducer;
    ```

- reducers/index.js
Thông thường, ứng dụng sẽ có nhiều reducer nên bạn phải gộp tất cả reducer lại để bỏ vào trong store. Mình sử dụng hàm combineReducer của redux để hợp nhất tất cả reducer thành 1 reducer là allReducers.
    ```
    import { combineReducers } from "redux";

    import contact from "./contact";

    export const allReducers = combineReducers({
        contact
        // add more reducers here
    });

    export default allReducers;
    ```
- index.js
Ta sử dụng hàm createStore để tạo store chứa allReducers. Tiếp theo ta gói <App/> bên trong 1 component hỗ trợ của react-redux là Provider, nhờ đó tất cả component trong <App/> có thể truy cập được store.

    ```
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { createStore } from "redux";
    import { Provider } from "react-redux";

    import App from './App';
    import allReducers from "./reducers";
    const store = createStore(allReducers);

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    ```
- App.js
    Sử dụng useSelector của react-redux để lấy state counter từ store.
    Sử dụng useDispatch để trả về function dispatch
    ```
    import React, { useState } from "react";
    import { useSelector, useDispatch } from "react-redux";
    import { createContact, removeContact, updateContact } from "./actions/contact";
    import './App.css';

    function App() {
    const contacts = useSelector((state) => state.contact);
    const dispatch = useDispatch();

    const [name, setName] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        name && dispatch(createContact(name));
        setName('');
    }

    const handleEdit = (index) => {
        let content = prompt('Nội dung...');
        content && dispatch(updateContact(index, content));
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const listView = (data, index) => {
        return (
        <li className="list">
            <div key={index} className="content">
                {data}
            </div>
            <div>
                <button onClick={() => handleEdit(index) } className="btn edit">Edit</button>
                <button onClick={() => dispatch(removeContact(index))} className="btn remove">Remove</button>
            </div>
        </li> 
        )
    }

    return (
        <div className="container">
        <h3>Add Contact Form</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} className="input" value={name} /><br />
            <input type="submit" className="btn submit" value="ADD" />
        </form>
        <hr />
        {<ul className="list-group">
            {contacts.map((contact, i) => listView(contact, i))}
        </ul>}
        </div>
    );
    }

    export default App;
    ```
