![Create-HTML-1](images/jsx.jpg) 

# SS16 JSX Fragments

Khi trả về các phần tử trong JSX, bạn chỉ có thể trả về một phần tử mỗi lần.

Phần tử đó có thể có phần tử con, nhưng bạn cần đảm bảo chỉ trả về một phần tử mỗi lần, nếu không, bạn sẽ gặp lỗi cú pháp.

Điều đó bởi vì mỗi Phần tử là một đối tượng và bạn không thể trả về hai hoặc nhiều đối tượng liền kề nhau.

### React.Fragment

React giúp giải quyết vấn đề này bằng cách yêu cầu trả về một Fragment đóng gói các phần tử cần trả về.

Vì vậy, nếu bạn muốn trả về HTML dưới đây từ một hàm:

```
<h1>Grocery delivered to your door</h1>
<h2>Free delivery</h2>
<p>Get started now!</p>
```

Bạn sẽ phải sử dụng một Fragment đóng gói 3 phần tử này:

```
function getHeroBanner() {
    return (
        <>
            <h1>Grocery delivered to your door</h1>
            <h2>Free delivery</h2>
            <p>Get started now!</p>
        </>
    );
}
```

Trong ví dụ trên, chúng ta sử dụng cú pháp mở `<>` và đóng fragment `</>` để đóng gói các phần tử.

Fragment là một biểu diễn nội bộ trong React cho phép bạn đóng gói nhiều phần tử.

Bạn có thể chọn trả về một `<div>`; tuy nhiên, `<div>` vẫn được hiển thị trong HTML cuối cùng, trong khi thẻ fragment sẽ biến mất (nhưng nội dung của fragment sẽ được hiển thị).

Giả sử bạn có 100 component React. Khi đó, việc đóng gói mỗi component bằng một `<div>` sẽ làm cho mọi thứ chậm hơn khi kích thước của DOM tăng lên.

Vì vậy, bạn nên sử dụng `<>` khi cần thiết.

### React.Fragment (cú pháp gốc)

Cú pháp ngắn gọn cho React.Fragment (`<>` và `</>`) vừa được đề cập ở trên.

Bạn có thể thấy ở đâu đó sử dụng cú pháp gốc dài hơn với `React.Fragment`:

```
function getHeroBanner() {
    return (
        <React.Fragment>
            <h1>Grocery delivered to your door</h1>
            <h2>Free delivery</h2>
            <p>Get started now!</p>
        </React.Fragment>
    );
}
```

Về bản chất, cả hai cú pháp cung cấp chức năng tương tự nhau.

### Tóm lại

- Bạn chỉ có thể trả về 1 phần tử trong JSX.

- Bạn có thể đóng gói nhiều phần tử bằng React.Fragment.

- Cú pháp ngắn gọn là `<>` được đóng bằng `</>`.

- Cú pháp gốc là: `<React.Fragment>` và `</React.Fragment>`.

*Bài tiếp theo [Components](/lesson/session/session_17_components.md)*
