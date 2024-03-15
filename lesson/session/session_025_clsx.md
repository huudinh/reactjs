![Create-HTML-1](images/components.jpg) 

# RS25 Thư viện clsx 

Trong những bài học trước, việc áp dụng các lớp động trong React hơi phức tạp vì bạn phải xây dựng chuỗi `className` theo cách thủ công.

Có một số thư viện nhỏ giúp công việc này trở nên dễ dàng hơn; 2 thư viện phổ biến nhất là:


- `classnames`

- `clsx`

Cả hai thư viện đều rất nhỏ gọn; bạn có thể sử dụng bất kỳ thư viện nào bạn muốn. Trong khóa học này, chúng ta sẽ sử dụng clsx vì đây là thư viện mới.

### Cài đặt

Để cài đặt clsx, chạy lệnh:

```
npm install clsx
```

### Kích thước gói

Gói `clsx` có kích thước khoảng 300 byte (nhỏ hơn 1KB), vì vậy bạn không cần lo lắng về kích thước của gói khi thêm vào dự án.

### Thêm clsx vào file

Bạn có thể sử dụng `clsx` trong bất kỳ bài tập React nào bằng cách nhập lệnh import vì gói đã được cài đặt sẵn.

Để thêm clsx, bạn phải thêm clsx từ tên gói:

```
import clsx from "clsx";
```

### Các lớp có điều kiện

Sau khi đã thêm `clsx`, hãy xem cách thư viện giúp đơn giản hóa việc sử dụng lớp có điều kiện:

```
import clsx from "clsx";

const result = clsx({
    "link": true,
    "link-primary": true
});

console.log(result); //"link link-primary"
```

Chúng ta đã truyền cho clsx một đối tượng chứa:

- khóa `link` với giá trị `true`

- và khóa `link-primary` với giá trị `true`, kết quả trả về một chuỗi chứa cả hai lớp được phân tách bằng dấu cách.

Hãy xem một ví dụ khác:

```
import clsx from "clsx";

const result = clsx({
    "link": true,
    "link-primary": false
});

console.log(result); //"link"
```

Đây về cơ bản cùng một cách làm như ví dụ trước. Tuy nhiên, lần này chúng ta chỉ định rằng `link-primary` là `false`, vì vậy chuỗi kết quả sẽ không bao gồm `link-primary`.

Thay vì thiết lập giá trị cố định là `true` hoặc `false`, điều gì sẽ xảy ra nếu chúng ta thay thế chúng bằng một biến hoặc kết quả của một biểu thức? Ví dụ:

```
import clsx from "clsx";

function MyComponent(props) {
    const className = clsx({
        "title": props.loggedIn
    });

    return <h1 className={className}></h1>
}

const example1 = <MyComponent loggedIn={true} />; // className="title"
const example2 = <MyComponent loggedIn={false} />; // className=""
```

Trong đoạn code trên, `props.loggedIn` là một giá trị `boolean`. Chúng ta sử dụng giá trị `boolean` đó để thêm/xóa lớp title theo điều kiện:

- khi `props.loggedIn` là `true`, `clsx` nhận `{"title": true}` và trả về chuỗi `title`.

- Ngược lại, khi `props.loggedIn` là `false`, `clsx` nhận `{"title": false}` và trả về chuỗi rỗng `""`.

Vì vậy, `clsx` cho phép ta sử dụng các lớp có điều kiện mà không cần viết điều kiện if

Bạn cũng có thể kết hợp những khái niệm này theo cách sao cho luôn có một lớp cố định mà không bị ảnh hưởng bởi điều kiện, trong khi vẫn có thể áp dụng một lớp khác theo điều kiện:

```
import clsx from "clsx";

function MyComponent(props) {
    const className = clsx({
        "text": true, // this class is always added
        "title": props.loggedIn
    });

    return <h1 className={className}></h1>
}

const example1 = <MyComponent loggedIn={true} />; // className="text title"
const example2 = <MyComponent loggedIn={false} />; // className="text"
```

Để ý là lớp `text` sẽ luôn được thêm vào, không phụ thuộc vào bất kỳ điều kiện nào, trong khi lớp `title` chỉ được thêm vào dựa trên điều kiện, tùy thuộc vào giá trị `boolean` của `props.loggedIn`.


### Tóm lại

- Bạn có thể cài đặt `clsx` bằng lệnh `npm install clsx`

- `clsx` là một tiện ích nhỏ được dùng để xây dựng chuỗi `className` theo điều kiện.

- `clsx({"your-class-name": booleanValue})` là cú pháp chung cho clsx.

*Bài tiếp theo [RS26 Toán tử spread "..."](/lesson/session/session_026_spread.md)*
