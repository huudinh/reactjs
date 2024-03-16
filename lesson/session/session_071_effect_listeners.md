![Create-HTML-1](images/effect.webp) 

# RS71 Event Listeners

Hook hiệu ứng là một chủ đề nâng cao trong React; do đó, chúng ta sẽ học về chủ đề này trong một số chương. Các ví dụ chúng ta đã thấy cho đến nay không phải là những ví dụ thú vị nhất. Do đó, chúng ta sẽ sớm thấy các ví dụ thú vị hơn. Ví dụ: cập nhật trạng thái bên trong hook hiệu ứng (tuy nhiên bạn chưa nên thử ngay bây giờ vì nó sẽ gây ra vòng lặp vô hạn!).

### Trình lắng nghe sự kiện bên ngoài React

Chúng ta đã học cách thêm trình lắng nghe sự kiện vào phần tử bằng thuộc tính JSX `onClick` (hoặc tương tự). Tuy nhiên, nếu bạn muốn thêm một trình lắng nghe sự kiện vào đối tượng window thì phải làm thế nào?

Khi thực hiện hành động trên, ta đang tương tác với môi trường bên ngoài và điều này được coi là một hiệu ứng trong React. Điều đó là bởi vì khi component hiển thị, nó gây ra hiệu ứng phụ đến phần tử bên ngoài, đó là đối tượng window. Hiệu ứng phụ là thêm một trình lắng nghe sự kiện mới.

Điều này có thể hữu ích nếu bạn muốn biết khi nào người dùng cuộn trang để thực hiện một hành động nào đó.

Dưới đây là cách triển khai:

```
import {useEffect} from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
        console.log("page scrolled");
    }, {passive: true});
  });

  return (<>
    <h2>List of products</h2>
    <p>Lorem ipsum...</p>
  </>);
}
```

> {passive: true} cải thiện đáng kể hiệu suất cuộn trên trang, nhưng nó ngăn bạn gọi `event.preventDefault()` bên trong trình xử lý cuộn. Đây không phải là một tính năng của React mà liên quan đến cách trình duyệt hoạt động.

Cách này hoạt động nhưng có một vấn đề lớn. Nó có thể dẫn đến rò rỉ bộ nhớ vì mỗi khi component App được hiển thị lại, chúng ta lại thêm một trình lắng nghe sự kiện mới.

Đây là lý do tại sao mỗi khi bạn gọi addEventListener bên trong useEffect, bạn cần dọn dẹp sau đó bằng cách gọi removeEventListener.

### Dọn dẹp sự kiện

Để dọn dẹp sự kiện, chúng ta cần đặt tên cho hàm lắng nghe sự kiện. Trong JavaScript thuần túy (không có React), để thêm và sau đó xóa một sự kiện, bạn làm như sau:

```
// we need to give a name to the event so that we can remove it later on
function handleWindowScroll(event) {
    console.log("page scrolled");
}

// call the handleWindowScroll function when the page is scrolled
window.addEventListener("scroll", handleWindowScroll, {passive: true});

// remove the event
window.removeEventListener("scroll", handleWindowScroll, {passive: true});
```

Bây giờ quay trở lại useEffect, chúng ta cần trả về một hàm từ useEffect để dọn dẹp trình lắng nghe sự kiện này:

```
import React, {useEffect} from "react";

function App() {

  function handleWindowScroll(event) {
    console.log("page scrolled");
  }

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll, {passive: true});

    // cleanup event listener
    return () => {
        window.removeEventListener("scroll", handleWindowScroll, {passive: true});
    }
  });

  return (<>
    <h2>List of products</h2>
    <p>Lorem ipsum...</p>
  </>);
}
```

Bây giờ khi component App bị hủy gắn kết (loại bỏ khỏi DOM) và mỗi khi nó được hiển thị lại, React sẽ dọn dẹp trình lắng nghe sự kiện để tránh rò rỉ bộ nhớ.

Lưu ý rằng nếu bạn muốn thêm sự kiện vào một phần tử được mô tả trong JSX, bạn vẫn phải sử dụng cú pháp onClick, onChange, v.v. Điều này chỉ áp dụng cho việc thêm sự kiện vào các đối tượng window, document hoặc các đối tượng bên ngoài React.

### Tóm lại

- Khi thêm một trình lắng nghe sự kiện bên ngoài React, hãy nhớ dọn dẹp nó.
- Bạn có thể dọn dẹp một trình lắng nghe sự kiện bằng cách sử dụng removeEventListener với hai đối số: loại sự kiện và tên của hàm xử lý sự kiện.

*Bài tiếp theo [RS72 Dependencies trong useEffect](/lesson/session/session_072_effect_dependencies.md)*