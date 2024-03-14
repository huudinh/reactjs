![Create-HTML-1](images/ref.png) 

# RS104 Sử dụng refs

Trong bài học trước, chúng ta đã sử dụng ref để focus vào phần tử `<input />` khi component App được hiển thị. Dưới đây là đoạn code từ bài học trước:

```
import {useRef, useEffect} from "react";

function App() {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return <input ref={inputRef} type="text" />;
}
```

### Note



### Dưới đây là cách ref hoạt động:



### Tóm lại

- 

*Bài tiếp theo [RS105 Sử dụng refs](/lesson/session/session_105_ref_use.md)*