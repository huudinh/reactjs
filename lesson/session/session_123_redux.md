![Create-HTML-1](images/redux.jpg) 

# RS123 Giới thiệu về redux

Redux là một thư viện cho phép bạn quản lý trạng thái trong các ứng dụng lớn và phức tạp.

### Khi nào nên sử dụng Redux?

Nếu bạn có một ứng dụng quy mô nhỏ, Redux sẽ khiến code sẽ trở nên phức tạp hơn mức cần thiết. Không có cách nào để tránh điều đó. Tuy nhiên, khi ứng dụng ngày càng phát triển, có nhiều component và nhiều người tham gia vào dự án, lợi ích của Redux sẽ trở nên rõ ràng.

Vì vậy, có thể nói rằng trong hầu hết các trường hợp, bạn sẽ không cần dùng đến Redux. Đừng sử dụng chỉ vì nó trông có vẻ "ngầu" hay "thịnh hành". Nói chung, dưới đây là một số lý do mà bạn có thể xem xét nếu muốn sử dụng Redux:

- Nhiều thành viên tham gia vào dự án.

- Bạn có nhiều biến state đang được sử dụng trong nhiều component.

- Bạn đã rất quen thuộc với Redux và việc sử dụng nó sẽ giúp tăng năng suất thay vì gây trở ngại.

- Ứng dụng có nhiều trạng thái cần cập nhật nhiều lần (liên quan đến trạng thái được sử dụng trong nhiều component).

### Redux so với Chuyển trạng thái lên trên

Việc chuyển trạng thái lên cấp độ cao hơn có thể nhanh chóng trở nên phức tạp khi số biến lượng trạng thái cần di chuyển ngày càng tăng lên. Đôi khi, bạn cần chuyển trạng thái qua nhiều cấp component (5 cấp độ), quá trình này càng trở nên cồng kềnh và phức tạp.

Bạn sẽ không gặp vấn đề này với redux, vì mỗi component sẽ lựa chọn dữ liệu cụ thể mà nó cần và cập nhật trạng thái.

### Redux so với Context

Chúng ta đã học trong các chương về Context rằng khi một biến trạng thái được cập nhật trong Context, tất cả các component được đăng ký với context đó đều cần phải cập nhật. Điều này hoàn toàn phù hợp với các cập nhật diễn ra với tần suất thấp như đổi chủ đề hoặc thay đổi ngôn ngữ ứng dụng.

Tuy nhiên, đối với các cập nhật trạng thái toàn cục diễn ra thường xuyên, việc sử dụng Context sẽ gây ra vấn đề về hiệu suất. Trong trường hợp này, việc sử dụng Redux sẽ hợp lý hơn. Ngoài ra, với số lượng lớn trạng thái được cập nhật, Redux giúp dễ dàng theo dõi các thay đổi và quản lý mọi thứ.

Nhìn chung, ứng dụng càng nhỏ/đơn giản thì bạn càng ít cần sử dụng Redux.

### Redux là gì

Redux là một thư viện cho phép bạn cập nhật trạng thái ứng dụng một cách hiệu quả và dễ dự đoán.

Là một mô hình và thư viện dùng để quản lý và cập nhật trạng thái ứng dụng bằng cách sử dụng các sự kiện gọi là "actions" (hành động). Nó đóng vai trò là một trung tâm lưu trữ các trạng thái cần được sử dụng trên toàn bộ ứng dụng, với các quy tắc đảm bảo rằng trạng thái chỉ có thể được cập nhật theo cách dễ dự đoán.

### Trạng thái (State)

Giống như trong React, state trong Redux đề cập đến một biến có thể được cập nhật sau này. Những thay đổi đối với đối tượng trạng thái này sẽ ảnh hưởng đến giao diện người dùng.

Trong React, chúng ta có thể tạo một trạng thái lưu trữ giá trị boolean, số, chuỗi, v.v. Tuy nhiên trong Redux, trạng thái luôn luôn là một đối tượng.

Đối với ứng dụng đếm, ta sẽ tạo đối tượng trạng thái sau:

```
const state = {
    value: 0 // starting value of the counter
};
```

Tên của biến không quan trọng. Điều quan trọng là state là một đối tượng. Và trong trường hợp này, đối tượng có khóa value với giá trị ban đầu là 0.

Tương tự như với React, chúng ta không nên trực tiếp sửa đổi đối tượng này. Thay vào đó, chúng ta sẽ sử dụng một hàm reducer để thực hiện việc đó.

### Reducer

Reducer là một hàm nhận 2 tham số: trạng thái hiện tại và một hành động (action). Dựa vào hành động nhận được, nó có thể trả về một trạng thái mới. Nếu không, nó sẽ trả về trạng thái hiện tại mà không thay đổi gì.

Hãy xem xét ví dụ chưa hoàn chỉnh sau đây:

```
const initialState = {
    value: 0,
};

const counterReducer = (state = initialState, action = {}) => {
  return state; // return the state as is
};
```

Đây là reducer cơ bản nhất. Nó nhận trạng thái hiện tại và trả về chính xác trạng thái đó như nó đã nhận. Để ý tham số state = initialState. Điều này có nghĩa là nếu chúng ta gọi counterReducer mà không có tham số nào, nó sẽ mặc định là initialState. Điều này sẽ xảy ra vào lần đầu tiên chúng ta gọi reducer này.

Sử dụng code trên, dưới đây là cách chúng ta sử dụng reducer này:

```
const state = counterReducer(); // state will default to initialState
console.log(state); // {value: 0}
```

Bây giờ, hãy cùng tăng giá trị của bộ đếm. Để làm điều đó, chúng ta sẽ truyền một hành động là {type: "counter/increment"}. Action (hành động) là một đối tượng được sử dụng để thực hiện thay đổi trạng thái.

Vì vậy, chúng ta cần cập nhật reducer để xử lý hành động này với if (action.type === "counter/increment"):

```
const initialState = {
    value: 0,
};

const counterReducer = (state = initialState, action = {}) => {
  if (action.type === "counter/increment") {
    return {
        value: state.value + 1 // important: do NOT mutate the state.
    };
  }

  return state; // return the state as is (in all other cases)
};
```

Điều quan trọng là không làm thay đổi trạng thái. Tương tự như trong React vì redux cũng sử dụng ba dấu bằng để kiểm tra xem trạng thái đã được cập nhật hay chưa.

Tham số state chứa đối tượng trạng thái hiện tại của ứng dụng.

Chúng ta đã kiểm tra action.type và khi nó bằng "counter/increment", chúng ta trả về một đối tượng trạng thái mới với giá trị được tăng một cách bất biến.

Dưới đây là cách sử dụng reducer này:

```
const state = counterReducer(); // state will default to initialState
console.log(state); // {value: 0}
const newState = counterReducer(state, {type: "counter/increment"});
console.log(newState); // {value: 1}
```

Một số điểm cần lưu ý:

- action là một đối tượng với một khóa là type. Đây là một thiết kế trong Redux nhằm cho phép ta gửi một tải trọng (payload). Thông tin chi tiết sẽ được đề cập sau trong chương này. Bây giờ, bạn hãy đảm bảo truyền một đối tượng với khóa type.

- Bạn sẽ không bao giờ tự gọi hàm reducer. Đoạn code trên chỉ hiển thị cách trạng thái được cập nhật khi reducer được gọi.

- Bạn có thể đã từng thấy reducer được triển khai với switch case thay vì if. Bạn có thể lựa chọn sử dụng bất kỳ phương pháp nào. 

- Trong Redux, reducer là một hàm nhận trạng thái hiện tại và một hành động. Dựa vào hành động nhận được, nó sẽ trả về một trạng thái mới (nếu cần cập nhật). Nếu không, nó sẽ trả về trạng thái cũ.

Từ "reducer" được sử dụng vì Redux giảm số lượng hành động trong ứng dụng (theo thời gian) thành một trạng thái duy nhất. Nó khá tương tự cách bạn giảm số lượng các phần tử trong một mảng thành một giá trị duy nhất bằng hàm reduce.

### Store

Là một đối tượng chứa reducer và trạng thái. Sau này, khi chúng ta muốn cập nhật trạng thái, chúng ta sẽ phải yêu cầu store thực hiện cập nhật (gửi hành động).

Store sau đó sẽ sử dụng phương thức reducer để tính toán trạng thái mới.

Giả sử chúng ta có hàm counterReducer như ở trên, dưới đây là cách tạo một store trong Redux:

```
import { createStore } from "redux";

const store = createStore(counterReducer);
```

Chương trình hoàn chỉnh

```
import { createStore } from "redux";

const initialState = {
    value: 0
};

const counterReducer = (state = initialState, action = {}) => {
  if (action.type === "counter/increment") {
    return {
        value: state.value + 1 // important: do NOT mutate the state.
    };
  }

  return state; // return the state as is (in all other cases)
};

const store = createStore(counterReducer);
```

### Tóm lại

- State: Trong Redux, state là một đối tượng có thể được cập nhật sau này. Những thay đổi đối với đối tượng state này sẽ ảnh hưởng lên giao diện người dùng.

- Reducer là một hàm nhận 2 tham số: trạng thái hiện tại và một hành động. Dựa vào hành động nhận được, nó có thể trả về một trạng thái mới. Nếu không, nó sẽ trả về trạng thái hiện tại mà không thay đổi gì.

- Store là một đối tượng chứa reducer và trạng thái. Sau này, chúng ta sẽ sử dụng cửa hàng này để yêu cầu cập nhật trạng thái.

*Bài tiếp theo [RS124 Thực hiện dispatch một action](/lesson/session/session_124_dispatch.md)*