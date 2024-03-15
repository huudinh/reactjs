![Create-HTML-1](images/components.jpg) 

# RS18 Cơ chế hoạt động của component

### Cách nhận biết Component

Cách React nhận biết rằng đó là component chứ không phải phần tử:

1. React kiểm tra ký tự đầu tiên của component, `F` (từ `Footer`).

2. Ký tự có viết hoa không? Nếu có thì đó là một component.

3. Ký tự có viết thường không? Nếu có thì đó là một phần tử.

Theo tài liệu React: Phần đầu tiên của thẻ JSX xác định kiểu của phần tử React. Kiểu viết hoa cho biết thẻ JSX đang tham chiếu đến component React.

Vì React coi các component bắt đầu bằng chữ thường như thẻ DOM thông thường, `<footer>` sẽ KHÔNG hoạt động trong trường hợp này; nó sẽ hiển thị phần tử HTML5 `<footer>` chứ không phải component Footer mà bạn định nghĩa.

### Phần tử với component

Vậy sự khác biệt giữa phần tử và component trong React là gì?

Component React là một hàm trả về phần tử React.

### Kết hợp các component

Dưới đây là cấu trúc tổng quan của ứng dụng:

```
<App>
    <Navbar>
        <Logo />
        <Title>Supermarket</Title>
    </Navbar>
    <BrowserRouter>
        {/*...*/}
    </BrowserRouter>
    <Footer>
    </Footer>
</App>
```

Như bạn thấy, đoạn code là sự kết hợp của nhiều component.

### Thẻ tự đóng

Tương tự như phần tử, bạn có thể sử dụng cú pháp tự đóng cho những component không có bất kỳ phần tử con nào. Vì vậy thay vì viết `<Logo></Logo>`, bạn có thể viết: `<Logo />`.

### Chuyển đổi JSX sang React.createElement

Khi bạn sử dụng JSX để viết code, trình biên dịch sẽ chuyển đổi code thành cuộc gọi `React.createElement`.

Hãy xem ví dụ code JSX được chuyển đổi thành cuộc gọi` React.createElement` cho Component:

```
const element = <Footer />;
```

sẽ được chuyển đổi thành:

```
const element = React.createElement(Footer, {});
```

Câu lệnh này truyền một tham chiếu đến hàm Footer, `React.createElement` sẽ  sử dụng tham chiếu này để gọi hàm. 

Để ý câu lệnh chỉ truyền tên hàm Footer (không có dấu ngoặc đơn) mà không gọi hàm (với dấu ngoặc đơn); lý do là để cho React biết chúng ta đang tham chiếu đến hàm nào. Và sau đó React sẽ tự động gọi hàm khi cần thiết.

### Vòng lặp vô hạn

Khi bạn mới bắt đầu học React, bạn rất dễ gặp phải vòng lặp vô hạn; ví dụ, đoạn code sau sẽ tạo ra một vòng lặp vô hạn làm cho trình duyệt bị treo. Trong hầu hết các trường hợp, React sẽ cảnh báo cho bạn nếu bạn sắp tạo ra một vòng lặp vô hạn.

```
function Button() {
    // Be careful: this is an infinite loop
    return <Button></Button>;
}
```

Điều này vì JSX `<Button></Button>` sẽ được chuyển đổi thành cuộc gọi `React.createElement(Button)`, cuộc gọi này sẽ gọi lại hàm `Button`. Vì vậy, hàm `Button` liên tục gọi lại chính nó.

Trong trường hợp này, chúng ta cần muốn trả về `<button></button>` (viết thường), đó là phần tử HTML `button` thay vì component `Button`.

### Tóm lại

- Phần đầu tiên của thẻ JSX xác định kiểu của phần tử React.

- Kiểu viết hoa cho biết thẻ JSX đang đề cập đến component React.

- Component React là một hàm trả về Phần tử React.

*Bài tiếp theo [RS19 Xây dựng Components](/lesson/session/session_019_components_only.md)*
