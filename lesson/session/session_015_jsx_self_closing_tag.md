![Create-HTML-1](images/jsx.jpg) 

# RS15 Cú pháp thẻ tự đóng

### Thẻ tự đóng là gì?

HTML có một số thẻ tự đóng, đó là các thẻ HTML không thể chứa phần tử con; do đó, chúng không cần thẻ đóng.

Một ví dụ về thẻ tự đóng là thẻ `img` vì `<img />` không thể chứa phần tử con.

### Thẻ tự đóng trong HTML

Dưới đây là các thẻ tự đóng phổ biến nhất trong HTML:

- `img`

- `br` (ngắt dòng)

- `hr` (đường kẻ ngang)

- `input`

Trong HTML, bạn có thể viết các phần tử này dưới dạng phần tử tự đóng hoặc phần tử thông thường, ví dụ:

```
<br>
<br />
```

Cả hai cách đều hợp lệ trong HTML5.

### Thẻ tự đóng trong JSX

Trong JSX, bạn không thể mở một phần tử mà không đóng nó, do đó, bạn nên sử dụng cú pháp thẻ tự đóng:

```
const image = <img src="image.png" />
```

### Tóm lại

- Sử dụng cú pháp thẻ tự đóng cho các phần tử tự đóng trong JSX.

*Bài tiếp theo [RS16 JSX Fragments](/lesson/session/session_016_jsx_fragments.md)*
