# Giới thiệu về JSX

![Create-HTML-1](images/ss8.jpg) 

Khi làm việc với React, bạn cần sử dụng React.createElement để biểu diễn giao diện người dùng. Tuy nhiên, cú pháp của nó khá dài. Cú pháp sẽ trở nên càng dài và nhàm chán hơn khi bạn bắt đầu phát triển giao diện người dùng phức tạp hơn.

React sử dụng một cú pháp đặc biệt được gọi là JSX để giải quyết vấn đề đó. Cú pháp JSX trông có vẻ giống HTML, nhưng nó KHÔNG PHẢI LÀ HTML.

Hãy xem một ví dụ:

```
import React from "react";

const title = <h1>Hello World</h1>
```

Mặc dù trông giống HTML nhưng nó không phải là HTML.

Đoạn code trên được biên dịch thành:

```
import React from "react";

const title = React.createElement("h1", {}, "Hello World");
```

Cách nào nào dễ đọc hơn?

Cách đầu tiên vì tại đó bạn đang diễn đạt rõ ràng rằng bạn cần tạo phần tử h1 chứa văn bản Hello World.

### JSX là cú pháp rút gọn cho React.createElement

JSX cung cấp cú pháp rút gọn (code dễ đọc/viết hơn) cho hàm `React.createElement`.

Thay vì viết `React.createElement` mỗi khi cần tạo phần tử, bạn chỉ cần viết phần tử trong JSX.

Hãy luôn nhớ rằng JSX mà bạn viết sẽ được chuyển đổi thành `React.createElement`. Vì vậy, JSX được tạo ra để giúp bạn mô tả giao diện người dùng một cách dễ dàng hơn.


### JSX KHÔNG PHẢI là một phần của trình duyệt

Trình duyệt không hiểu được JSX vì đó là một cú pháp được tạo bởi React.

Bạn sẽ cần một công cụ (như babel) để chuyển đổi code JSX thành JavaScript thông thường (sẽ chứa các cuộc gọi React.createElement).

### JSX không yêu cầu phải thêm vào React

Trước React 17, bạn phải thêm React vào file JavaScript để code JSX hoạt động trong mọi file mà bạn sử dụng JSX.

Điều này không còn cần thiết nữa.

Nếu bạn nâng cấp mã nguồn từ React 16 lên phiên bản mới hơn, bạn có thể giữ lại câu lệnh import React; chúng sẽ không gây ra bất kỳ vấn đề gì.

### JSX với ReactDOM

Dưới đây là một ví dụ sử dụng JSX với ReactDOM:

```
<div id="root"></div>

import React from "react";
import {createRoot} from "react-dom/client";

const root = document.querySelector("#root");
createRoot(root).render(<h1>Hello World</h1>);
```

Đoạn code này sẽ hiển thị `<h1>Hello World</h1>` trong phần tử #root.

### Tóm lại

- JSX là cú pháp đặc biệt cho React giúp bạn dễ dàng biểu diễn giao diện người dùng

- JSX có cú pháp giống HTML nhưng không phải là HTML

- Code JSX bạn viết được chuyển đổi thành React.createElement

- JSX không phải là một phần của trình duyệt. Bạn cần một công cụ để chuyển đổi code thành JavaScript hợp lệ.

*Bài tiếp theo [JSX Attributes](/lesson/session/session_09_jsx_attributes.md)*
