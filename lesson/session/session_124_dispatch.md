![Create-HTML-1](images/redux.jpg) 

# RS124 Thực hiện dispatch một action

### Dispatch là gì

Chúng ta không được phép thay đổi trạng thái được lưu trữ trong store bằng cách thủ công. Thay vào đó, chúng ta phải yêu cầu store thực hiện thay đổi bằng cách gửi một hành động.

Các hành động là các đối tượng với cấu trúc sau:

```
{
    type: "counter/increment", // example of an action
}
```

Để gửi hành động, bạn phải sử dụng hàm store.dispatch(action):

```
store.dispatch({type: "counter/increment"});
// another example
store.dispatch({type: "counter/reset"});
```

Gọi phương thức store.dispatch() sẽ yêu cầu cửa hàng gọi reducer để tính toán trạng thái mới. Nếu trạng thái đã thay đổi, giao diện người dùng sẽ được kích hoạt để cập nhật 

### Gửi hành động khi nhấp chuột

Bạn có thể gửi hành động ở bất kỳ đâu trong code. Một trường hợp sử dụng phổ biến là gửi hành động khi nhấp chuột vào nút. Đây là điều mà chúng ta đã làm trong ứng dụng đếm:

```
const addButton = document.querySelector("#add-button");

addButton.addEventListener("click", () => {
    store.dispatch({ type: "counter/increment" });
});
```

### Ví dụ Distpatch

```
import { createStore } from "redux";

const initialState = { value: 0 };

const counterReducer = (state = initialState, action) => {
    if (action.type === "counter/increment") {
        return {
            value: state.value + 1 // important: do NOT mutate the state.
        };
    }

    return state; // return the state as is (in all other cases)
};

const store = createStore(counterReducer);

const addButton = document.querySelector("#add-button");

addButton.addEventListener("click", () => {
    store.dispatch({ type: "counter/increment" });
});
```

### Cách thức hoạt động của Redux

Store chứa state ứng dụng và một hàm reducer.

Khi bạn cần thực hiện thay đổi đối với giao diện người dùng, bạn phải gửi một hành động đến store.

Store sẽ tính toán trạng thái mới bằng cách sử dụng hàm reducer và hành động nhận được.

### Tóm lại

- Chúng ta không được phép thay đổi trạng thái được lưu trữ trong cửa hàng bằng cách thủ công. Thay vào đó, chúng ta phải yêu cầu cửa hàng thực hiện thay đổi bằng cách gửi một hành động.

- Để gửi hành động, bạn phải sử dụng hàm store.dispatch(action).

- Gọi phương thức store.dispatch() sẽ yêu cầu cửa hàng gọi reducer để tính toán trạng thái mới. Nếu trạng thái đã thay đổi, giao diện người dùng sẽ được kích hoạt để cập nhật (điều này sẽ được thảo luận trong chương react-redux).

*Bài tiếp theo [RS125 Giới thiệu về React Redux](/lesson/session/session_125_redux_react.md)*