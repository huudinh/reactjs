![Create-HTML-1](images/jsx.jpg) 

# SS15 Thẻ tự đóng

HTML có một số thẻ tự đóng, đó là các thẻ HTML không thể chứa phần tử con; do đó, chúng không cần thẻ đóng.

Một ví dụ về thẻ tự đóng là thẻ `img` vì `<img />` không thể chứa phần tử con.

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

Trong JSX, bạn không thể mở một phần tử mà không đóng nó, do đó, bạn nên sử dụng cú pháp thẻ tự đóng:

```
const image = <img src="image.png" />
```

Thẻ tự đóng rất hữu ích khi chúng ta làm việc với Component sau này.

### Tóm lại

- Sử dụng cú pháp thẻ tự đóng cho các phần tử tự đóng trong JSX.

*Bài tiếp theo [JSX Fragments](/lesson/session/session_16_jsx_fragments.md)*
