# Mảng trong JSX

![Create-HTML-1](images/ss17.jpg) 

Hãy nhớ rằng mảng phải là bất biến trong React.

Khi làm việc với mảng, bạn thường sẽ cần lặp qua các phần tử, chúng ta lựa chọn hiển thị chúng theo chỉ số. Tuy nhiên, cách làm này không thực sự hiệu quả!

Giả sử chúng ta có mảng `grades` và chúng ta muốn tạo một thẻ `u`l và một thẻ `li` cho mỗi điểm số:

```
function Grades(){
    const grades = [8, 18, 10, 7, 14];

    // this will generate a warning (keep reading)
    return <ul>
        { grades.map(grade => <li>{grade}</li>) }
    </ul>;
}
```

Component trên sẽ hiển thị:

```
<ul>
    <li>8</li>
    <li>18</li>
    <li>10</li>
    <li>7</li>
    <li>14</li>
</ul>
```

Cú pháp trên hoạt động vì chúng ta sử dụng trả về ngầm định bên trong `callback` của `map`. Nếu bạn muốn viết nhiều dòng code trong hàm `callback` thì bắt buộc phải sử dụng từ khóa `return`:

```
function Grades(){
    const grades = [8, 18, 10, 7, 14];

    // this will generate a warning (keep reading)
    return <ul>
        {
            grades.map(grade => {
                return <li>{grade}</li>
            })
        }
    </ul>;
}
```

Bạn cũng có thể lưu kết quả của `map` vào biến, sau đó tham chiếu đến nó trong `JSX`:

### Tóm lại

- `.map` có thể được sử dụng trong JSX để lặp qua mảng.

*Bài tiếp theo [Key trong mảng](/lesson/session/session_50_jsx_array_key.md)*