![Create-HTML-1](images/ss6.jpg) 

# RS6 Cài đặt React DOM

### Cài đặt từ gói NPM

Hãy bắt đầu bằng việc cài đặt ReactDOM:

```
npm install react-dom
```

Bước này cần được thực hiện sau khi cài đặt React.

Nếu bạn mới bắt đầu từ đầu thì cần phải cài đặt cả hai gói (react và react-dom) như sau:

```
npm install react react-dom
```

Kích thước của ReactDOM khi thêm vào dự án là 130KB.

Vì vậy, tổng cộng, React + ReactDOM có kích thước bằng 130 + 6 = 136KB.

### Thêm ReactDOM vào file JavaScript

Bạn chỉ cần thêm vào một phương thức tên là `createRoot`. Phương thức này có thể được thêm vào từ `react-dom/client`:

```
import {createRoot} from "react-dom/client";

// You can call createRoot()
```

### Root của ứng dụng 

Chúng ta sử dụng ReactDOM để hiển thị (trực quan hóa) các phần tử React trên trang web.

Để làm điều đó, bạn phải cho ReactDOM biết nơi hiển thị các phần tử này.

Chúng ta gọi phần tử đó là root (gốc).

Đó là một phần tử `<div>` có `id` là `root` hoặc `app-root` hoặc `react-root` hoặc bất kỳ tên nào bạn muốn.

Chúng ta sẽ chọn tên `root` cho ví dụ này:

```
<div id="root"></div>
```

### Hiển thị phần tử đầu tiên 

Với phần tử root trên, chúng ta có thể hiển thị phần tử React đầu tiên:

```
import {createRoot} from "react-dom/client";

const root = document.querySelector("#root");
createRoot(root).render(React.createElement("p", {}, "Hello World"));
```

Đoạn code này sẽ hiển thị `<p>Hello World</p>` trên màn hình vì phương thức `createRoot().render()` từ ReactDOM nhận một phần tử React (phiên bản ảo) và sau đó làm cho nó hiển thị trên DOM thực.

Hãy cùng phân tích code:

1. Chúng ta bắt đầu bằng cách lấy tham chiếu đến phần tử root từ trang (sử dụng `querySelector` hoặc `getElementById`).
    
2. Chúng ta tạo ra root của ứng dụng React bằng cách sử dụng `createRoot(root)`.
    
3. Từ kết quả của `createRoot(root)`, chúng ta gọi `.render()` và truyền cho nó phần tử React.

*Bạn cảm thấy mọi thứ dần trở nên quá phức tạp?*

Bạn có thể tự hỏi liệu tất cả sự phức tạp này có đáng để tìm hiểu hay không. Điều đó thường xảy ra với người mới và hãy nhớ rằng React (và các thư viện khác) chỉ phát huy vai trò hữu ích khi chúng ta bắt đầu làm việc với các ví dụ lớn hơn (và thực tế hơn).

*React 16*

Trước đây có một phương thức kết xuất được xuất từ `react-dom`. Phương thức này đã bị loại bỏ trong React 18 để nhường chỗ cho các tính năng xử lý đồng thời của React 18. Nếu bạn thấy đoạn code như dưới đây, đó chính là code đã lỗi thời (nhưng vẫn hoạt động trong React 18):

```
import {createRoot} from "react-dom/client";

const root = document.querySelector("#root");
createRoot(root).render(React.createElement("p", {}, "Hello World"));
```

### Tóm lại

- Cài đặt ReactDOM: `npm install react-dom`

- Thêm phương thức createRoot của ReactDOM: `import {createRoot} from "react-dom/client"`

- ReactDOM có kích thước 130KB.

- Phần tử root là nơi ReactDOM sẽ hiển thị UI

- createRoot(root).render(element);

*Bài tiếp theo [RS7 Phần tử Root](/lesson/session/session_007_root.md)*
