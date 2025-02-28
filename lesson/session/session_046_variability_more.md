
![Create-HTML-1](images/components.jpg) 

# RS46 Ý nghĩa của tính bất biến

### Cách State hoạt động

Khi bạn gọi useState với một mảng rỗng, 

`const [data, setData] = useState([ ])`

Nó sẽ tạo một biến trạng thái với giá trị [ ]

Hàm `setData` sẽ lấy `newState` (giá trị mới của trạng thái) và kiểm tra xem nó đã thay đổi chưa. Nếu nó đã thay đổi, nó sẽ yêu cầu ReactDOM hiển thị lại Component này.

Nếu chúng ta viết một hàm setData đơn giản, nó sẽ có dạng như sau:

```
let state = [ ]; 

function setData(newState) {
  if (state === newState) {
    return false;
  }
  // store the newState for the next time the user calls setData()
  state = newState;
  // Ask ReactDOM to re-render
}
```

Để ý React đã so sánh state === newState. Điều này cho React biết trạng thái đã thay đổi hay chưa.

Nếu state === newState là true, điều đó có nghĩa là trạng thái KHÔNG thay đổi, tức là không cần hiển thị lại Component.

Nhưng khi state === newState là false, điều đó có nghĩa là trạng thái đã thay đổi và React phải hiển thị lại Component bằng ReactDOM.

### Điều gì xảy ra khi không sử dụng tính bất biến?

let state = []; 

let newState = state;

state.push(10);

state === newState; 
//true, whereas it should have been false

Vì chúng ta đã thay đổi mảng bằng .push, React sẽ nghĩ rằng chúng ta CHƯA thay đổi trạng thái và do đó sẽ KHÔNG hiển thị lại Component.

Và đây là lý do tại sao React yêu cầu sử dụng tính bất biến.

Vì vậy, cách duy nhất để state === newState trả về false khi ta sửa đổi mảng là trả về một mảng mới.

Lưu ý rằng React sử dụng toán tử === thay vì so sánh sâu vì so sánh sâu thường khá chậm (khi số lượng Component trong ứng dụng tăng lên).

Đây là lý do tại sao mỗi khi bạn có một trạng thái của mảng hoặc đối tượng, chúng phải là bất biến.

### Tóm lại

- React lưu trạng thái hiện tại và so sánh nó với trạng thái mới bằng cách sử dụng ba dấu bằng.
- Nếu bạn thay đổi trạng thái mới, React không thể biết rằng nó đã thay đổi.
- React tự động hiển thị lại Component khi `state === newState` trả về false.
- Mỗi khi bạn có một trạng thái của mảng hoặc đối tượng, chúng phải là bất biến.

### Bài tập

**Câu 1:** State hoạt động như thế nào
**Câu 2:** Tính bất biến ảnh hưởng đến cách state hoạt động như thế nào

*Bài tiếp theo [RS47 Mảng bất biến](/lesson/session/session_047_immutable_array.md)*