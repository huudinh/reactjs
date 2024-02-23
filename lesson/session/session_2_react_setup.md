# Cài đặt React

![Create-HTML-1](images/ss2.jpg) 

Để cài đặt gói react vào dự án, bạn cần cài đặt bằng trình quản lý gói (npm hoặc yarn).

Chúng ta sẽ sử dụng Trình quản lý Gói Node (npm) trong suốt khóa học này.

```
npm install react
```
Trong khóa học này, tất cả các gói bạn cần đã được cài đặt sẵn, vì vậy bạn chỉ cần import (thêm) gói vào file JavaScript.

### Thêm React vào file JavaScript

React không phải là một phần của trình duyệt, vì vậy bạn phải thêm React vào các file JavaScript cần sử dụng. Mỗi file JavaScript là một mô-đun độc lập, đó là các biến và hàm và việc import trong một file/mô-đun không ảnh hưởng đến các file/mô-đun khác.

Dưới đây là cách thêm React (sau khi đã cài đặt React):

```
import React from "react";
```

Đây được gọi là default import vì dạng này tuân theo cú pháp sau: import Something from "package-name".

Named export được thêm vào như sau: import {Something} from "package-name".

Để ý đoạn code trên thêm React vào file JavaScript từ `"react"`. 

Đây được gọi là bare import vì bạn không thêm vào từ đường dẫn file. Ví dụ thêm từ đường dẫn file: import Something from "./file". Thêm từ đường dẫn file luôn bắt đầu bằng `./.`

Bạn có thể sử dụng các trình biên dịch code trực tuyến như CodeSandbox, Codepen và StackBlitz.

### Đối tượng React

Khi bạn thêm React vào file JavaScript, bạn nhận được một đối tượng React chứa các phương thức và thuộc tính.

Chúng ta sẽ tìm hiểu về các phương thức một cách từng bước. Hãy bắt đầu với một trong các thuộc tính, đó là phiên bản.

React cung cấp phiên bản hiện tại bằng thuộc tính version; sau đây là cách bạn đọc phiên bản, giả định rằng bạn đã thêm React:

```
console.log(React.version); //"18.1.0"
```

### Kích thước của React

Khi thêm vào file, React có kích thước là 6KB.

### Tóm lại

- Cài đặt react: `npm install react`

- Thêm React vào các file cần thiết: `import React from "react"`

- Cách lấy phiên bản React hiện tại: `React.version`

- Khi thêm vào file, React có kích thước là 6KB.

*Bài tiếp theo [Document Create Element](/lesson/session/session_3_document_create_element.md)*
