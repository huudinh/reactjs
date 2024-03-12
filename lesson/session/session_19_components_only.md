![Create-HTML-1](images/components.jpg) 

# RS19 Xây dựng Components: 

Một file chỉ chứa 1 Component

Một ứng dụng được xây dựng bằng React sẽ có nhiều component.

Quy ước là định nghĩa một component trong mỗi file riêng biệt để sau này dễ dàng tìm thấy nó.

Tên file phải khớp với tên Component, ví dụ:

- file: Footer.js cho Component Footer

- file: AppNavbar.js cho Component AppNavbar

### index.js

Ứng dụng sẽ có một file `index.js` là điểm mà quá trình chạy ứng dụng bắt đầu (đôi khi được gọi là `app.js`).

Vì vậy, bạn sẽ định nghĩa các component trong những file khác và sau đó sử dụng chúng trong index.js.

### Ví dụ

Hãy xem một ví dụ bằng cách sử dụng hai file: `Footer.js` và `index.js`:

File `Footer.js` định nghĩa component Footer:

```
//Footer.js
export default function Footer() {
    return (
        <>
             <h3>Footer</h3>
             <p>All rights reserved</p>
        </>
    );
}
```

Để ý file này sử dụng default export để khai báo component Footer.

Điều này là bắt buộc để có thể sử dụng component Footer trong các file khác.

```
//index.js
import {createRoot} from "react-dom/client";
import Footer from "./Footer.js";

function App() {
    return (<>
         <Footer />
         <Footer />
    </>);
}

const root = document.querySelector("#root");

createRoot(root).render(<App />);
```

Để ý component Footer đã được thêm vào file `index.js` từ `./Footer.js` để file có thể sử dụng component.

Điều đó là vì `<Footer />` được chuyển đổi thành: `React.createElement(Footer, {})` vì vậy để component hoạt động, hàm `Footer` phải có phạm vi hoạt động trong file `index.js`, tức là nó phải được thêm vào file.

Ngoài ra, đoạn code hiển thị `Footer` hai lần bằng cách sử dụng component hai lần trong component App.

### Luôn đặt tên cho các thành phần được xuất

Mặc dù bạn có thể xuất một component function mà không cần đặt tên (hàm ẩn danh), bạn vẫn nên đặt tên các thành phần được xuất. Điều này sẽ giúp dễ dàng gỡ lỗi code vì bạn sẽ thấy tên component khi có lỗi xảy ra bên trong nó, thay vì chỉ thấy lỗi trong hàm ẩn danh.

```
//Footer.js
// this is NOT recommended 
export default function () {
    return (
         <h3>Footer</h3>
    );
}
```

### Tóm lại

- Định nghĩa một component trong mỗi file riêng biệt để dễ gỡ lỗi code hơn.

- Tên file cần khớp với tên Component.

- Để sử dụng một Component đã được định nghĩa, bạn cần xuất nó ra.

- Để sử dụng một Component được định nghĩa trong file khác, bạn cần thêm nó vào file hiện tại.

*Bài tiếp theo [RS20 Props](/lesson/session/session_20_props.md)*
