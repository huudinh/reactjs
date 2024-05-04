![Create-HTML-1](images/redux.jpg) 

# RS125 React Redux

### Provider

Trong ứng dụng React, bạn có thể làm cho store có thể được truy cập bởi bất kỳ component con nào bằng cách đóng gói toàn bộ ứng dụng bằng component Provider. Điều này cho phép bạn gửi các sự kiện từ bất kỳ component nào trong ứng dụng (miễn sao nó là component con của `<Provider />`) cũng như sử dụng selector.

Để làm điều đó, bạn cần thêm Provider từ react-redux (dưới dạng named import) và sau đó đóng gói toàn bộ ứng dụng bằng Provider. Giả sử bạn có đoạn code sau:

```
import { createRoot } from 'react-dom/client';
import { store } from './store.js';

render(<App />, document.querySelector('#react-root'));
```

Bây giờ, ta sẽ thêm Provider và đóng gói toàn bộ ứng dụng bằng Provider và truyền store dưới dạng prop store:

```
import { createRoot } from 'react-dom/client';
import { store } from './store.js';
import { Provider } from 'react-redux';

const root = document.querySelector('#react-root');

createRoot(root).render(<Provider store={store}>
    <App />
</Provider>);
```

Đừng quên store={store}. Nó cho phép chúng ta truyền store vào ứng dụng, làm cho store có thể được truy cập bởi tất cả các component con của component Provider.

### Hook useSelector 

Hook useSelector cho phép bạn trích xuất dữ liệu từ store của redux.

Nó nhận một hàm callback, hàm này nhận toàn bộ state làm đối số. Sau đó, bạn có thể quyết định dữ liệu mà bạn muốn lấy. Hãy xem một ví dụ với store được tạo từ slice sau:

```
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});
```

Component `<Counter />` sẽ cần hiển thị giá trị của counter. Hãy quan sát initialState. Đó là một đối tượng có khóa value mà chúng ta cần trích xuất.

```
import {useSelector} from "react-redux";

function Counter() {
    const counter = useSelector(state => state.value);

    return <h1>Counter: {counter}</h1>
}
```

Đoạn code trên thêm hook useSelector từ gói react-redux.

Sau đó, nó sử dụng hook này và truyền hàm callback sau:

```
state => state.value
```

Đây là một Arrow Function trích xuất giá trị của counter từ state.

Khi bạn sử dụng hook useSelector bên trong một component, component này sẽ đăng ký theo dõi các thay đổi của store đó. Điều này có nghĩa là khi bất kỳ state nào của store đó thay đổi, component sẽ được gọi lại, kích hoạt hook useSelector một lần nữa.

### Hook useDispatch

Hook useDispatch trả về một tham chiếu đến hàm dispatch từ store của Redux. Khi bạn sử dụng useDispatch, bạn có thể gọi hàm dispatch() để gửi một hành động đến store.

Hãy xem một ví dụ với store counter và hành động increment đã được định nghĩa trong store.js:

```
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

const { increment } = counterSlice.actions;

export {store, increment};
```

Dưới đây là cách chúng ta hoàn thiện component Counter để component tăng giá trị biến đếm khi nhấp vào nút:

```
import {useDispatch} from "react-redux";
import {increment} from "./store.js";

export default function Counter() {
    const dispatch = useDispatch();

    return <button onClick={() => dispatch(increment())}>Add 1</button>;
}
```

Ta bắt đầu bằng cách thêm hook useDispatch từ react-redux.

Sau đó, ta sử dụng hook đó để trích xuất hàm dispatch: const dispatch = useDispatch(). 

Ta cũng đã thêm hàm (hành động) increment từ store.

Cuối cùng, khi người dùng nhấp vào nút, ta gọi dispatch(increment()) 

### Nguyên tắc khi làm việc với Hook

Một lỗi phổ biến của lập trình viên là cố gắng gọi useDispatch trong trình xử lý onClick. Điều này sẽ KHÔNG hoạt động vì vi phạm nguyên tắc khi làm việc với Hook.

Bạn không nên gọi các hook bên trong một điều kiện hoặc trình xử lý sự kiện. Chúng luôn luôn phải được gọi ở đầu của component. 

Nhớ rằng hook useDispatch không cho phép bạn gửi đi một hành động. Tuy nhiên, nó trả về hàm dispatch mà bạn có thể gọi sau này khi cần. Khái niệm này tương tự như hook useFetch tùy chỉnh trong đó ta phải gọi hook useFetch để nhận lại hàm get.

### Thêm các hành động

Thêm một lưu ý: Đừng quên rằng bạn cần thêm các hành động từ nơi chúng được định nghĩa. Trong ví dụ trên, hành động increment đã được định nghĩa trong store.js, vì vậy chúng ta phải thêm nó:

```
import {increment} from "./store.js";
```

### Tóm lại

- Trong ứng dụng React, bạn có thể làm cho store có thể được truy cập bởi bất kỳ component con nào bằng cách đóng gói toàn bộ ứng dụng bằng component Provider.

- Bạn nên đóng gói toàn bộ ứng dụng với Provider. Điều này sẽ cho phép tất cả các component con có thể truy cập vào store (cũng như gửi đi hành động).

- Store có thể được định nghĩa trong cùng một file hoặc được thêm từ một file khác.

- Hook useSelector cho phép bạn trích xuất dữ liệu từ store của redux.

- Hook useSelector nhận một hàm callback, hàm này nhận toàn bộ state làm đối số.

- Hook useDispatch trả về một tham chiếu đến hàm dispatch từ store của Redux. Khi bạn sử dụng useDispatch, bạn có thể gọi hàm dispatch() để gửi một hành động đến store.

- Nhớ rằng hook useDispatch không cho phép bạn gửi đi một hành động. Tuy nhiên, nó trả về hàm dispatch mà bạn có thể gọi sau này khi cần.

*Bài tiếp theo [RS126 Formik](/lesson/session/session_125_formik.md)*
