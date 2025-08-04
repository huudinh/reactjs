![Create-HTML-1](images/components.jpg)

# RS20 Props (Properties)

### Xây dựng component GreetUser

Giả sử chúng ta có một component tên là `<GreetUser>` hiển thị: Welcome Sam hoặc Welcome Alex.

Chúng ta cần làm cho component hiển thị Welcome và sau đó là tên người dùng.

Hãy bắt đầu bằng phiên bản hiển thị thủ công của component này:

```
//GreetUser.js
export default function GreetUser() {
    return <div>Welcome USER</div>;
}
```

Component `<GreetUser />` sẽ hiển thị Welcome USER.

### Props

Thay vì hiển thị `<GreetUser />`, chúng ta có thể hiển thị `<GreetUser user="Sam" />`.

`user="Sam"` là thuộc tính `user` với giá trị `Sam` được thêm vào component `GreetUser`.

Bây giờ chúng ta có thể đọc `user="Sam"` này như một đối tượng: `{user: "Sam"}`.

Chúng ta gọi đối tượng đó là props (viết tắt của properties - trường thuộc tính).

```
//GreetUser.js
export default function GreetUser(props) {
    console.log(props); // {user: "Sam"}
    return <div>Welcome USER</div>;
}
```

Trường thuộc tính được truyền bây giờ nằm bên trong đối tượng mà hàm `GreetUser` nhận làm đối số đầu tiên.

Vì vậy, chúng ta có thể sử dụng biểu thức để hiển thị tên người dùng (có thể đọc là `props.user`):

```
//GreetUser.js
export default function GreetUser(props) {
    return <div>Welcome {props.user}</div>;
}
```

- `<GreetUser user="Sam"/>` sẽ hiển thị `<div>Welcome Sam</div>`

- `<GreetUser user="Alex"/>` sẽ hiển thị `<div>Welcome Alex</div>`

Điều này làm cho component linh hoạt hơn và có thể tái sử dụng!

### React.createElement

Code JSX sau:

```
<GreetUser user="Sam" id="2" />
```

được chuyển đổi thành:

```
React.createElement(GreetUser, {user: "Sam", id: "2"});
```

Để ý các thuộc tính JSX trên Component được chuyển đổi thành props là đối số thứ hai của `React.createElement`.

### Tóm lại

- Props là viết tắt của properties - thuộc tính.

- Props là một đối tượng được truyền làm đối số đầu tiên của Component.

- Các thuộc tính trên component được chuyển đổi thành một đối tượng gọi là Props.

- Props làm cho component linh hoạt hơn và dễ dàng tái sử dụng.

## Các Câu Hỏi Thường Gặp Khi Phỏng Vấn (FAQ)

#### Câu 1: Props là gì??

Props (viết tắt của properties) là các thuộc tính được truyền vào một component React từ bên ngoài, dưới dạng một đối tượng.

Chúng cho phép component:

    Nhận dữ liệu từ nơi khác (ví dụ: từ component cha).

    Hiển thị nội dung động.

    Trở nên linh hoạt và tái sử dụng được với nhiều loại dữ liệu khác nhau.

#### Câu 2: Props và đối số trong function giống và khác nhau thế nào?

| Tiêu chí       | Props trong React                                                                                                                                             | Đối số trong function thông thường                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Giống nhau** | - Đều là **dữ liệu được truyền vào** hàm. <br> - Có thể được sử dụng bên trong hàm để điều khiển kết quả đầu ra.                                              | - Tương tự: nhận giá trị và xử lý trong hàm.                                                                                                               |
| **Khác nhau**  | - Được truyền từ component cha dưới dạng thuộc tính của JSX. <br> - Tự động được gói thành một **đối tượng** (object). <br> - Dành riêng cho React Component. | - Do người lập trình **truyền trực tiếp** khi gọi hàm. <br> - Không gói thành object trừ khi tự làm. <br> - Dùng trong mọi loại hàm, không riêng gì React. |

#### Câu 3: Truyền dữ liệu biến và functions giống và khác nhau như thế nào?

| Tiêu chí                                  | Truyền **biến (data)**                                                | Truyền **function (hàm)**                                   |
| ----------------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Cách truyền**                           | Qua `props`                                                           | Qua `props`                                                 |
| **Dữ liệu truyền xuống**                  | Giá trị tĩnh hoặc thay đổi như string, number, object, array, boolean | Một hàm được định nghĩa ở cha                               |
| **Mục đích**                              | Để **con nhận dữ liệu** từ cha và hiển thị                            | Để **con thông báo ngược lại** cho cha (thường qua sự kiện) |
| **Con có thể thay đổi dữ liệu đó không?** | ❌ Không. Props là **bất biến (immutable)**                            | ✅ Có thể gọi hàm để cha thay đổi state                      |
| **Ví dụ sử dụng**                         | Truyền tên người dùng, danh sách sản phẩm                             | Gọi hàm khi nhấn nút, thay đổi dữ liệu cha                  |
| **Vai trò của cha**                       | Là **nguồn cung dữ liệu**                                             | Là **nơi xử lý logic**                                      |
| **Vai trò của con**                       | Chỉ **hiển thị dữ liệu**                                              | **Gọi hàm để kích hoạt hành động** ở cha                    |

*Bài tiếp theo [RS21 Props Children](/lesson/session/session_021_props_children.md)*
