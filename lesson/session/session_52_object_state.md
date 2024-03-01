# Trạng thái với đối tượng

![Create-HTML-1](images/ss17.jpg) 

Chúng ta sẽ làm việc với trạng thái đại diện cho đối tượng.

Đừng quên rằng khi bạn muốn thay đổi một đối tượng trong JavaScript, bạn cần thực hiện sao cho không làm thay đổi đối tượng ban đầu!

### Giá trị mặc định

Khi khởi tạo một trạng thái mới, chúng ta cần cung cấp một giá trị mặc định. 

Dạng phổ biến nhất mà bạn thường thấy là đặt giá trị mặc định là một đối tượng rỗng:

```
import {useState} from "react";

function App() {
    const [data, setData] = useState({});
}
```

Bạn cũng có thể đặt giá trị mặc định là bất kỳ đối tượng nào khác, ví dụ:

```
{
    darkMode: false
}
```

### Mẹo bổ sung: đảo ngược giá trị boolean

Đây là một mẹo nhanh khá hữu ích. Nếu bạn muốn đảo ngược giá trị `boolean` (từ `false` thành `true` và từ `true` thành `false`), bạn có thể sử dụng toán tử logic `not: !` (còn được gọi là toán tử Phủ định).

Cách thực hiện như sau:

```
const booleanValue1 = true;
const inverted1 = !booleanValue1; // false

const booleanValue2 = false;
const inverted2 = !booleanValue2; // true
```

### Lặp qua đối tượng trong JSX

Đôi khi chúng ta có thể cần lặp qua đối tượng. Tuy nhiên, thao tác này không phổ biến như việc lặp qua mảng. Cách thực hiện như sau:

```
function App() {
    const settings = {
        title: "Blog",
        theme: "dark"
    }

    return <ul>{
        Object.entries(settings).map(item => {
            return <li key={item[0]}>{item[0]} with value {item[1]}</li>
        })
    }</ul>;
}
```

JSX kết quả sẽ là:

```
<ul>
    <li key="title">title with value Blog</li>
    <li key="theme">theme with value dark</li>
</ul>
```

Đoạn code trên hoạt động vì `Object.entries(settings)` trả về mảng sau:

```
[
    ["title", "Blog"],
    ["theme", "dark"],
]
```

### Tóm lại

- Hãy nhớ duy trì tính bất biến của đối tượng khi làm việc với trạng thái đại diện cho đối tượng.
- Bạn có thể đảo ngược giá trị boolean bằng cách đặt toán tử logic not trước giá trị.
- !true cho kết quả false và !false cho kết quả true.

*Bài tiếp theo [Form Input Value](/lesson/session/session_53_form_input_value.md)*