![Create-HTML-1](images/state.png) 

# RS30 Import useState

Hãy bắt đầu bằng cách tạo biến trạng thái đầu tiên.

Để làm điều đó, chúng ta cần thêm hàm useState từ gói "react".

`useState` là một named export có cú pháp thêm là:

```
import {useState} from "react";
```

Nếu bạn đã thêm `React` vào trong cùng một file, bạn có thể kết hợp các lệnh import thành một lệnh import duy nhất. Ví dụ:

```
import React from "react";
import {useState} from "react";
```

2 câu lệnh có thể được kết hợp thành một lệnh import duy nhất:

```
import React, {useState} from "react";
```

Thoạt nhìn cú pháp có thể trông hơi lạ mắt, nhưng bạn hãy nhớ rằng:

1. `React` là default export (không có dấu ngoặc nhọn)
2. `useState` là named export (được đóng gói trong dấu ngoặc nhọn)

### useState là React Hook

`useState` là một trong nhiều hook được cung cấp bởi React.

### Tóm lại

- `useState` cho phép tạo một biến trạng thái trong Component
- `useState` là một named export cần được thêm vào file JavaScript
- Bạn thêm `useState` và `React` vào file JavaScript bằng lệnh: `import React, {useState} from "react";`
- `useState` là một React hook.

*Bài tiếp theo [useState More](/lesson/session/session_31_useState_more.md)*