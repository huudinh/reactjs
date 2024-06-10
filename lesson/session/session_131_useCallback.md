# RS131 useCallback

useCallback là một hook mạnh mẽ giúp tối ưu hiệu suất của các component function phức tạp bằng cách memoize các hàm giữa các lần render. Trước khi sử dụng useCallback, hãy xem xét các yếu tố sau: Tốc độ tăng có đảm bảo độ phức tạp vẫn ở mức cần thiết? Sử dụng useCallback có thực sự tăng tốc độ cho component của bạn?

### Giới thiệu về useCallback

useCallback là một Hook trong React, được giới thiệu từ phiên bản React v16.8 useCallback trả về một hàm đã được ghi nhớ (memoized function) và chỉ thay đổi khi một trong những phụ thuộc đã bị thay đổi.

Cú pháp của useCallback như sau:

```
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

Trong đó, doSomething(a, b) là hàm callback bạn muốn ghi nhớ, và [a, b] là mảng các phụ thuộc.

useCallback giúp tối ưu hiệu suất bằng cách tránh việc tạo mới hàm mỗi khi component render. Điều này rất hữu ích khi bạn đang xử lý sự kiện người dùng và có hành vi chức năng phức tạp.

### Sử dụng useCallback để memoize

useCallback là một Hook trong React giúp bạn “ghi nhớ” một hàm callback và chỉ tạo lại nó khi một trong các phụ thuộc thay đổi. Điều này giúp tối ưu hiệu suất bằng cách tránh việc tạo lại hàm mỗi khi component render.

Dưới đây là cách bạn có thể sử dụng useCallback để memoize một hàm callback:

```
import React, { useCallback } from 'react';

function MyComponent() {
  const memoizedCallback = useCallback(
    () => {
      // Đây là hàm callback bạn muốn ghi nhớ
      doSomethingExpensive();
    },
    [], // Đây là mảng các phụ thuộc
  );

  return (
    <div>
      <button onClick={memoizedCallback}>Click me</button>
    </div>
  );
}
```

Trong ví dụ trên, doSomethingExpensive là hàm callback bạn muốn ghi nhớ, và mảng phụ thuộc là rỗng vì doSomethingExpensive không phụ thuộc vào bất kỳ prop hoặc state nào của component. Khi bạn nhấn nút, memoizedCallback sẽ được gọi, nhưng useCallback sẽ đảm bảo rằng hàm doSomethingExpensive chỉ được tạo một lần duy nhất, không phụ thuộc vào số lần component render.

Tuy nhiên, nếu doSomethingExpensive phụ thuộc vào một prop hoặc state, bạn cần thêm nó vào mảng phụ thuộc. Ví dụ:

```
const memoizedCallback = useCallback(
  () => {
    doSomethingExpensive(a);
  },
  [a], // `a` được thêm vào mảng phụ thuộc
);
```

Trong ví dụ này, mỗi khi a thay đổi, một hàm callback mới sẽ được tạo.

### Khi nào không nên sử dụng useCallback

- Nếu bạn chỉ đang thực hiện một số hàm đơn giản, việc sử dụng useCallback có thể làm giảm hiệu suất thay vì cải thiện nó. Điều này là do việc lưu trữ và truy xuất hàm từ bộ nhớ có thể tốn kém hơn so với việc thực hiện hàm

- Không nên dùng useCallback cho tất cả các component. Nên dùng cho: đồ thị, biểu đồ, animations, những component nặng phần render.

- Khi nghĩ về cách nâng cấp hiệu xuất như sử dụng useCallback, luôn phải đo lường tốc độ của các component của bạn trước khi bắt đầu tối ưu hoá chúng.

- useCallback có thể làm cho mã nguồn của bạn trở nên phức tạp hơn. Điều này giống như bạn mua một cái laptop cấu hình thật khủng chỉ để gõ văn bản.

### Ví dụ

```
import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [countOther, setCountOther] = useState(0);

  const increase = useCallback(() => setCount(count + 1), [count]);
  const decrease = useCallback(() => setCount(count - 1), [count]);

  const increaseOther = useCallback(() => setCountOther(countOther + 1), [countOther]);
  const decreaseOther = useCallback(() => setCountOther(countOther - 1), [countOther]);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>

      <div>Count other: {countOther}</div>
      <button onClick={increaseOther}>+</button>
      <button onClick={decreaseOther}>-</button>
    </>
  );
}

export default Counter;
```

Trong ví dụ trên, chúng ta có hai biến state để giữ số đếm và bốn hàm để thay đổi giá trị của hai state trên. Tuy nhiên, mỗi lần component Counter này re-render, tất cả bốn hàm increase, decrease, increaseOther, decreaseOther sẽ bị khởi tạo lại. Để giải quyết vấn đề này, chúng ta sử dụng useCallback để lưu trữ các hàm trong cache.

### So sánh useCallback() vs useMemo()

useCallback và useMemo đều là các Hook trong React giúp tối ưu hiệu suất bằng cách ghi nhớ (memoize) các giá trị hoặc hàm. Tuy nhiên, chúng có một số khác biệt quan trọng:

- useCallback trả về một phiên bản đã được ghi nhớ của hàm callback, và chỉ thay đổi khi một trong các phụ thuộc thay đổi useCallback hữu ích khi bạn truyền các hàm callback vào các component con đã được tối ưu và dựa vào sự bằng nhau về tham chiếu để ngăn chặn việc render không cần thiết.

- useMemo trả về một giá trị đã được ghi nhớ. Giống như useCallback, nó chỉ tính toán lại giá trị đã được ghi nhớ khi một trong các phụ thuộc thay đổi useMemo rất tốt cho các phép tính tốn kém.

- Sự khác biệt chính giữa useCallback và useMemo là loại giá trị mà chúng trả về: useCallback trả về một hàm callback đã được ghi nhớ, trong khi useMemo trả về một giá trị đã được ghi nhớ.

Cả hai đều giúp cải thiện hiệu suất của các component React bằng cách tránh việc tạo lại các hàm hoặc giá trị không cần thiết. Tuy nhiên, bạn nên cẩn thận khi sử dụng chúng, vì không phải lúc nào việc sử dụng chúng cũng mang lại lợi ích về hiệu suất, và đôi khi lại làm cho mã nguồn trở nên phức tạp hơn

### Kết luận

useCallback là một hook mạnh mẽ giúp tối ưu hiệu suất của các component function phức tạp bằng cách memoize các hàm giữa các lần render.

Trước khi sử dụng useCallback, hãy xem xét các yếu tố sau:

- Tốc độ tăng có đảm bảo độ phức tạp vẫn ở mức cần thiết?
- Sử dụng useCallback có thực sự tăng tốc độ cho component của bạn?

Luôn luôn cân nhắc trước khi tối ưu hoá và đảm bảo rằng việc này đúng đắn với nhu cầu thực tế của dự án.


<!-- *Bài tiếp theo [RS131 useCallback](/lesson/session/session_131_useCallback.md)* -->