
![Create-HTML-1](images/components.jpg) 

# RS39 Thay đổi State với Props

Điều gì sẽ xảy ra nếu chúng ta kết hợp Props và thay đổi trạng thái có điều kiện?

Giả sử chúng ta có một component có thể tăng giá trị của bộ đếm. Tuy nhiên, component này có thể được kích hoạt hoặc vô hiệu hóa. Khi component bị vô hiệu hóa, bộ đếm sẽ không tăng giá trị.

```
import {useState} from "react";

function Counter(props) {
    const [counter, setCounter] = useState(0);

    function handleIncrementClick() {
        if (props.enabled){
            setCounter(counter + 1);
        }
    }

    return (<>
        <h2>{counter} times clicked</h2>
        <button onClick={handleIncrementClick}>Add 1</button>
    </>);
}

// Sample usages:
const element1 = <Counter enabled={true} />;
const element2 = <Counter enabled={false} />;
```

Chúng ta có thể kiểm tra giá trị của Prop và dựa trên đó thay đổi trạng thái như sau:

```
if (props.enabled) {
    setCounter(counter + 1);
}
```

### Tóm lại

- Props có thể được sử dụng để thay đổi trạng thái theo điều kiện.


*Bài tiếp theo [RS40 Rendering theo điều kiện](/lesson/session/session_040_rendering.md)*