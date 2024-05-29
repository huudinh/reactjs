# RS130 useMemo

useMemo là một hook trong React được sử dụng để ghi nhớ kết quả của một phép tính tốn kém (expensive calculation) và chỉ thực hiện lại phép tính đó khi các dependencies thay đổi. Hook này giúp tối ưu hóa hiệu suất bằng cách tránh việc thực hiện lại các phép tính không cần thiết mỗi khi component re-render.

### useMemo giải quyết vấn đề gì ?

Khi bạn có một hàm tính toán phức tạp hoặc một công việc nặng nhọc nào đó mà kết quả không thay đổi trừ khi một số đối số cụ thể thay đổi, useMemo sẽ rất hữu ích. Thay vì thực hiện công việc đó mỗi khi component render, useMemo cho phép bạn lưu kết quả và chỉ tính toán lại khi các đối số thay đổi.

Ví dụ, nếu bạn có một mảng lớn cần được sắp xếp mỗi khi component render, việc này có thể tốn kém về mặt hiệu suất. Nhưng nếu mảng không thay đổi, việc sắp xếp lại mỗi lần không cần thiết. Trong trường hợp này, useMemo có thể được sử dụng để lưu kết quả sắp xếp và chỉ thực hiện lại khi mảng thay đổi.

### Sử dụng useMemo thế nào ?

```
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

```

computeExpensiveValue(a, b) là hàm tính toán giá trị bạn muốn lưu trữ. Hàm này nên là pure, không nhận đối số nào và trả về một giá trị bất kỳ.
[a, b] là một mảng các phụ thuộc. Khi một trong các phụ thuộc thay đổi, useMemo sẽ tính toán lại giá trị.

Ví dụ, giả sử bạn có một hàm tính toán phức tạp doHeavyComputation(data), bạn có thể sử dụng useMemo như sau:

```
import React, { useMemo } from 'react';

function MyComponent({ data }) {
  const heavyComputationResult = useMemo(() => doHeavyComputation(data), [data]);

  return (
    <div>
      {/* Render your component using heavyComputationResult */}
    </div>
  );
}
```

Trong ví dụ trên, doHeavyComputation(data) chỉ được gọi khi data thay đổi, giúp cải thiện hiệu suất của component.

### Khi nào chúng ta nên sử dụng useMemo ?

- Khi bạn có một hàm tính toán phức tạp mà kết quả không thay đổi trừ khi một số đối số cụ thể thay đổi, useMemo sẽ rất hữu ích. Thay vì thực hiện công việc đó mỗi khi component render, useMemo cho phép bạn lưu kết quả và chỉ tính toán lại khi các đối số thay đổi.

- Khi bạn có một số lượng lớn các component con cần được render và việc này không thay đổi trừ khi một số đối số cụ thể thay đổi, useMemo có thể giúp cải thiện hiệu suất bằng cách giảm bớt số lượng render không cần thiết.

- Khi bạn đang làm việc với đối tượng hoặc mảng lớn và bạn muốn tránh việc tạo lại chúng mỗi khi component render, useMemo có thể giúp.

- Khi bạn cần một tham chiếu không thay đổi đến một giá trị hoặc hàm, useMemo có thể giúp. Điều này đặc biệt hữu ích khi bạn đang sử dụng các Hook như useEffect hoặc useCallback mà phụ thuộc vào tham chiếu không thay đổi.

### Không lạm dụng useMemo

-  Nếu bạn chỉ đang thực hiện một số tính toán đơn giản, việc sử dụng useMemo có thể làm giảm hiệu suất thay vì cải thiện nó. Điều này là do việc lưu trữ và truy xuất giá trị từ bộ nhớ có thể tốn kém hơn so với việc thực hiện tính toán.

- useMemo nên chỉ được sử dụng khi thực sự cần thiết, chẳng hạn như khi bạn đang thực hiện một hàm tính toán phức tạp hoặc làm việc với một đối tượng hoặc mảng lớn.

- Khi bạn sử dụng useMemo, hãy chắc chắn rằng bạn đã bao gồm tất cả các phụ thuộc cần thiết trong mảng phụ thuộc. Nếu bạn bỏ sót một phụ thuộc, useMemo có thể không tính toán lại giá trị khi nó thay đổi, dẫn đến các lỗi không mong muốn.

### Ví dụ

```
function MyComponent({ list }) {
  const sortedList = list.sort((a, b) => a - b);
  return (
    <div>
      {sortedList.map(item => <div key={item}>{item}</div>)}
    </div>
  );
}
```

Ở đây, mỗi lần MyComponent render, list.sort() sẽ được gọi, dù list có thay đổi hay không. Điều này có thể gây ra vấn đề về hiệu suất nếu list rất lớn.

Để giải quyết vấn đề này, bạn có thể sử dụng useMemo như sau:

```
function MyComponent({ list }) {
  const sortedList = useMemo(() => list.sort((a, b) => a - b), [list]);
  return (
    <div>
      {sortedList.map(item => <div key={item}>{item}</div>)}
    </div>
  );
}
```

Bây giờ, list.sort() chỉ được gọi khi list thay đổi, giúp cải thiện hiệu suất của component.

*Bài tiếp theo [RS131 useCallback](/lesson/session/session_131_useCallback.md)*