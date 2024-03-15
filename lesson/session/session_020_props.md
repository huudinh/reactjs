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

*Bài tiếp theo [RS21 Props Children](/lesson/session/session_021_props_children.md)*
