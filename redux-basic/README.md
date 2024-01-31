## REDUX Là gì

### Mục Lục

- [1. Redux](#1)
- [2. Ý tưởng](#2)
- [3. Setup môi trường](#3)
- [4. Cách hoạt động của Redux](#4)
- [5. Tổ chức Redux trong project](#5)
- [6. Khi nào nên dùng Redux](#6)
- [7. Khi nào không nên dùng Redux](#7)

<a name="1"></a>
**1. Redux**

- Redux là 1 thư viện Javascript để quản lý state của ứng dụng, thường được sử dụng với javascript framework như React. 

<a name="2"></a>
**2. Ý tưởng (Idea)**

- Với Redux, ta đưa tất cả data, các state vào 1 nơi gọi là store, khi component nào cần dùng hoặc thay đổi data, nó sẽ lấy hoặc cập nhật data ở store. Các data trong các component là thống nhất với nhau vì store là toàn cục trong toàn bộ App.

<a name="3"></a>
**3. Setup môi trường**

- Cài đặt 2 thư viện redux và react-redux:
    ```
    npm install redux react-redux
    ```

<a name="4"></a>
**4. Cách hoạt động của Redux**

- Store: Store đơn giản là 1 object chứa tất cả state toàn cục của ứng dụng. Nhưng thay vì lưu các state, nó lưu các reducer.

- Các Action: Khi ta định nghĩa các action, ta khai báo các tên của hành động trong ứng dụng. Lấy ví dụ ta có 1 state là counter và cần 2 phương thức để tăng và giảm giá trị của counter. Lúc này ta định nghĩa 2 action có tên là 'INCREMENT' và 'DECREMENT' và chỉ vậy thôi, việc xử lý thay đổi state của counter sẽ nhường cho reducer.

- Các Reducer: 1 reducer tương đương với 1 state nhưng kèm theo các mô tả state sẽ thay đổi như thế nào khi các action khác nhau được gọi. Trong ví dụ ta có reducer là counter, nó lưu state của counter và kiểm tra action vừa được gọi là INCREMENT hay DECREMENT và trả về state mới là state+1 hay state-1 tương ứng.

- Các Dispatch: Khi cần dùng 1 action ở component, ta gọi action đó đơn giản bằng cách sử dụng phương thức dispatch. VD: dispatch(increment()), dispatch(decrement()).

<a name="5"></a>
**5. Tổ chức Redux trong project**

- actions/counter.js
Đầu tiên ta định nghĩa tất cả counter action. Để ý mình vừa thêm parameter number cho các action để có thể tăng/giảm một giá trị theo ý muốn. Các action lúc này ngoài tên của nó ra (type), nó còn mang theo data là number (data đi kèm này thường được gọi là payload).

    ```
    export const increment = (number) => {
        return {
            type: "INCREMENT",
            payload: number,
        };
    };
    export const decrement = (number) => {
        return {
            type: "DECREMENT",
            payload: number,
        };
    };

    ```

- reducers/counter.js

    Tiếp theo định nghĩa counter reducer. Thay vì cộng trừ 1, ta sẽ cộng trừ payload đi kèm với action như đã nói ở trên. Đơn giản mà đúng không? Nhớ thêm case default để trả về chính state đó khi không có action tương ứng nhé.
    ```
    export const counterReducer = (state = 0, action) => {
        switch (action.type) {
            case "INCREMENT":
                return state + action.payload;
            case "DECREMENT":
                return state - action.payload;
            default:
                return state;
        }
    };

    export default counterReducer;
    ```

- reducers/index.js
Thông thường, ứng dụng sẽ có nhiều reducer nên bạn phải gộp tất cả reducer lại để bỏ vào trong store. Mình sử dụng hàm combineReducer của redux để hợp nhất tất cả reducer thành 1 reducer là allReducers.
    ```
    import { combineReducers } from "redux";

    import counter from "./counter";

    export const allReducers = combineReducers({
        counter,
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
Cùng test kết quả bằng cách hiện giá trị counter cùng 2 nút tăng giảm, mỗi lần ấn vào counter tăng/giảm 5 đơn vị, ta sẽ:

    Sử dụng useSelector của react-redux để lấy state counter từ store.
    Sử dụng useDispatch để trả về function dispatch, truyền increment và decrement vào dispatch để gọi 2 action này.
    ```
    import React from "react";
    import { useSelector, useDispatch } from "react-redux";
    import { increment, decrement } from "./actions/counter";

    function App() {
        const counter = useSelector((state) => state.counter);
        const dispatch = useDispatch();
        return (
            <div>
                <h1>Counter {counter}</h1>
                <button onClick={() => dispatch(increment(5))}>Increment</button>
                <button onClick={() => dispatch(decrement(5))}>Decrement</button>
            </div>
        );
    }

    export default App;
    ```
<a name="6"></a>
**6. Khi nào nên dùng Redux**

- Project càng lớn, giá trị redux càng nhiều, nhất là khi app có nhiều shared state và việc xử lý state phức tạp, được handle ở nhiều nơi. Redux là lựa chọn tốt nhất để quản lý state trong project lớn nếu bạn sử dụng React.

- Phân chia rõ ràng giữa shared state (các state toàn cục, app data) và UI state (thường nằm cục bộ trong 1 component).

<a name="7"></a>
**7. Khi nào không nên dùng Redux**

- Code rất nhiều để làm được rất ít chức năng

- Nếu bạn chỉ cần xử lý state phức tạp: Sử dụng useReducer hook

- Nếu bạn chỉ cần xử lý state global: React Context

- Việc dò tìm action để dispatch (linear search, O(n)) sẽ ảnh hưởng đến performance so với cách tương tác với state trực tiếp
