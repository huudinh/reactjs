# Props Children

![Create-HTML-1](images/ss17.jpg) 

Trong những bài học trước, chúng ta thấy props được sử dụng để đại diện cho các trường thuộc tính trên component.

Có một loại props đặc biệt dành cho trường thuộc tính con. Hãy xem một ví dụ:

```
const element = <HeroTile>Welcome!</HeroTitle>
```

Nội dung nằm giữa các thẻ `<HeroTitle>` và `</HeroTitle>` được gọi là trường thuộc tính con.

Bạn có thể truy cập vào bằng cách sử dụng `props.children`, ví dụ:

```
const element = <HeroTitle>Welcome!</HeroTitle>
```

Một ví dụ về `props.children` là chuỗi `"Welcome!"`, nhưng trên thực tế, nó có thể là bất cứ kiểu dữ liệu nào.

### Không chỉ là văn bản

`props.children` có thể tham chiếu đến các phần tử hoặc component React khác (hoặc thậm chí là nhiều component); ví dụ:

```
function Navbar(props){
    return <div className="navbar">{props.children}</div>;
}

const element = <Navbar>
    <HeroTitle>Welcome!</HeroTitle>
    <div>Some content</div>
    <p>Another content</p>
</Navbar>;
```
Trong ví dụ này, `props.children` là một mảng chứa 3 mục:

- `<HeroTitle>Welcome!</HeroTitle>`

- `<div>Some content</div>`

- `<p>Another content</p>`

Mặc dù `props.children` là một mảng nhưng kết quả cuối cùng của element là:

```
function Navbar(props){
    return <div className="navbar">{props.children}</div>;
}

const element = <Navbar>
    <HeroTitle>Welcome!</HeroTitle>
    <div>Some content</div>
    <p>Another content</p>
</Navbar>;
```

Như bạn thấy, thanh điều hướng bao gồm tất cả các trường thuộc tính con mà nó nhận được.

### Tóm lại

- `props.children` đại diện cho nội dung nằm giữa các thẻ của component.

- `props.children` có thể là một mảng hoặc phần tử.

- `props.children` có thể chứa văn bản và/hoặc các phần tử React và/hoặc các component React.

*Bài tiếp theo [Props Destructuring](/lesson/session/session_22_props_destructuring.md)*
