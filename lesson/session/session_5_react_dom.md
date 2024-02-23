# React DOM

![Create-HTML-1](images/ss3-1.png) 

`document.createElement không được sử dụng trong React.` không được sử dụng trong React.

Chúng ta đã quan sát hoạt động của phương thức này và thấy một số điểm tương đồng với React.createElement, nhưng hai phương thức này không giống nhau hoàn toàn.


### So sánh:

Hãy so sánh `document.createElement` và `React.createElement`.

#### Giá trị trả về

`document.createElement` trả về một phần tử DOM (ví dụ: div hoặc h1). Trong khi đó, `React.createElement` trả về một đối tượng đại diện cho phần tử DOM.

Đối tượng có dạng như sau:

```
const element = React.createElement("h1");
//returns an object similar to this one:
{
  type: 'h1',
  props: {}
}
```

Lý do tại sao `React.createElement` trả về một đối tượng thay vì phần tử DOM là vì React hoạt động dựa trên Virtual DOM (DOM ảo). 

Virtual DOM là một phiên bản của giao diện người dùng được lưu giữ trong bộ nhớ và được đồng bộ với DOM thật.

Vì vậy, `React.createElement()` trả về một đối tượng thay vì phần tử DOM vì điều này cho phép React tối ưu hóa hiệu suất (như Virtual DOM).

#### Thay đổi class/style

Cú pháp của hai phương thức tương tự nhau khi thiết lập các thuộc tính này:

```
React.createElement("h1", {className: "center", style: "color: red"})
```

Lưu ý rằng chúng ta viết `className` thay vì class vì `class` là từ khóa được dành riêng trong JavaScript và không thể sử dụng trực tiếp làm tên thuộc tính.

### Viết văn bản

Để viết văn bản bên trong phần tử, bạn phải cung cấp tham số thứ ba cho `React.createElement`, được gọi là `children` (có thể truyền các phần tử React khác làm `children`).

```
React.createElement("h1", {}, "Hello World")
```

Lệnh này trả về một đối tượng đại diện cho `h1` chứa `Hello World`.

Lưu ý rằng trong ví dụ trên, chúng ta không muốn thiết lập `className` hoặc `style` (hoặc các tùy chọn khác), vì vậy chúng ta truyền `{}` làm tham số thứ hai (bạn cũng có thể truyền `null`).

Cú pháp trên trông không trực quan và khá phức tạp. Do đó, chúng ta có thể sử dụng JSX, một cú pháp thay thế code trên bằng `<h1>Hello World</h1>`. Tuy nhiên, JSX KHÔNG hoàn toàn giống với HTML, vì vậy bạn nên học React.createElement trước.

### React Element là gì?

Trong React, Element (Phần tử) là khối xây dựng nhỏ nhất.

Phần tử đại diện cho đơn vị nhỏ nhất của giao diện người dùng. Ví dụ đơn giản nhất là văn bản Welcome nằm trong một đoạn văn bản (`<p>Welcome</p>`).

### Tóm lại

- `React Element` là khối xây dựng nhỏ nhất đại diện cho một đơn vị nhỏ trong giao diện người dùng.

- `React.createElement` trả về một phần tử React 

- `React.createElement(type, options, children)`

*Bài tiếp theo [ReactDOM](/lesson/session/session_5_react_dom.md)*
