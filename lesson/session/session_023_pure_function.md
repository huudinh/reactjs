![Create-HTML-1](images/components.jpg) 

# RS23 Pure function (Hàm thuần túy)

### Props là thuộc tính chỉ đọc

Để giúp React đạt được hiệu suất tối ưu, điều quan trọng là tuân theo một trong những quy tắc quan trọng nhất của React, đó là:

Tất cả các component React không bao giờ thay đổi các props của chúng.

Điều này có nghĩa là bạn không nên thay đổi giá trị của prop bên trong component; hãy xem một ví dụ:

```
function Notifications(props) {
    // ❌ 
    props.data.count = props.data.count - 1;
    return <h3>You have {props.data.count} unread notifications.</h3>;
}

const notifications = {
    count: 3
};

const element = <Notifications data={notifications} />;
console.log(notifications); // {count: 2}
```

Để ý việc sử dụng phần tử `<Notifications  data={notifications}/>` có tác dụng phụ là thay đổi giá trị của props (notifications.count).

Thay vào đó, code nên được viết như sau:

```
function Notifications(props) {
    // ☑️ 
    const value = props.data.count - 1;
    return <h3>You have {value} unread notifications.</h3>;
}

const notifications = {
    count: 3
};

const element = <Notifications data={notifications} />;
console.log(notifications); // {count: 3}
```

Vì vậy, bạn nên coi props là thuộc tính chỉ đọc.

### Cùng đầu vào, cùng đầu ra

Để duy trì triết lý cùng đầu vào, cùng đầu ra, component không nên sửa đổi bất kỳ biến nào bên ngoài React. Ví dụ, đây không phải là hàm thuần túy và cần được tránh:

```
let count = 0;

function Counter () {
  // ❌ không thuần túy- không dùng
  count = count + 1;

  return <p>{count}</p>;
}
```

Sau này, chúng ta sẽ học cách sử dụng `state` và `effects` (nếu cần thiết) để làm cho các component linh hoạt hơn trong khi vẫn duy trì tính thuần túy.

### Tại sao cần tuân thủ quy tắc của React

React không cho phép các component thay đổi props vì khi các hàm là thuần túy, điều đó có nghĩa là từ cùng một đầu vào (props), chúng sẽ luôn cho ra cùng một kết quả (đầu ra).

Điều này cho phép React nhanh chóng xác định các component nào cần được hiển thị lại khi một prop cụ thể được cập nhật. Quá trình này diễn ra như một phần của Virtual DOM. Điều này trở nên rất quan trọng khi ứng dụng chứa hàng trăm, thậm chí hàng nghìn component cần được hiển thị lại.

### Tóm lại

- Tất cả các component React không bao giờ thay đổi các props của chúng.

- React yêu cầu các component là thuần túy để có thể cập nhật DOM một cách hiệu quả chỉ khi cần thiết.

### Bài tập

**Câu 1:** Hàm thuần túy là gì 

**Câu 2:** Tại sao ta không nên thay đổi giá trị của Props trong Components?

*Bài tiếp theo [RS24 Comment và kết xuất có điều kiện](/lesson/session/session_024_jsx_comment.md)*
