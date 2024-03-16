![Create-HTML-1](images/effect.webp) 

# RS74 Update State trong effect

Nhìn chung, bạn được khuyến khích không nên cập nhật state từ bên trong `useEffect`. Tuy nhiên, việc cập nhật này có thể cần thiết trong một số tình huống. Trong trường hợp đó, bạn nên tránh mắc phải những lỗi phổ biến nhất mà các lập trình thường gặp phải. Trong bài học này, chúng ta sẽ thử tạo ra lỗi như vậy để hiểu rõ vấn đề hơn:

```
import {useState, useEffect} from "react";

// THIS IS INCORRECT
function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // this will end up creating an infinite loop
        setCount(previousCount => previousCount + 1);
    });
}
```

Đoạn code trên không chính xác vì nó tạo ra một vòng lặp vô hạn. 

Tại sao có một vòng lặp vô hạn?

Lý do là:

- Khi bạn gọi `setCount()` với một giá trị mới, nó sẽ dẫn đến việc hiển thị lại component.
- Điều này dẫn đến việc gọi lại component App.
- Do đó, effect sẽ chạy lại. Kết quả là `setCount()` được gọi lại và cứ tiếp tục như vậy.

Cách khắc phục vấn đề phụ thuộc vào mục đích xây dựng component. Nhìn chung, phương pháp sẽ liên quan đến việc truyền một phụ thuộc cho hiệu ứng, từ đó giới hạn hiệu ứng chỉ chạy trong một số điều kiện cụ thể hoặc chỉ chạy một lần.

Nếu trạng thái mới có thể được tính toán từ trạng thái hiện tại thì bạn không cần biến trạng thái mới. 

Ví dụ, giả sử bạn có một trạng thái lưu trữ danh sách chương. Nếu bạn chỉ muốn hiển thị các chương đã hoàn thành (chương có isCompleted === true) thì bạn không cần tạo một biến trạng thái mới để lưu trữ danh sách này. Bạn chỉ cần tạo một biến được tính toán từ biến trạng thái ban đầu. Dưới đây là cách thực hiện:

```
import {useState} from "react";

const exampleData = [{
  id: 1,
  title: "Strings",
  isCompleted: true
}, {
  id: 2,
  title: "Numbers",
  isCompleted: false
}];

function App() {
  const [chapters, setChapters] = useState(exampleData);

  const completedChapters = chapters.filter(chapter => chapter.isCompleted);

  return <ul>
    {completedChapters.map(chapter => <li key={chapter.id}>{chapter.title}</li>)}
  </ul>;
}
```

### Tóm lại

- Nói chung, tốt nhất là bạn nên tránh thiết lập trạng thái bên trong `useEffect`.
- Gọi `setState` bên trong `useEffect` có thể dẫn đến một vòng lặp vô hạn. Bạn phải truyền một phụ thuộc cho `useEffect`.

*Bài tiếp theo [RS75 Hiển thị thời gian](/lesson/session/session_075_effect_time.md)*