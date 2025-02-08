
![Create-HTML-1](images/components.jpg) 

# RS45 Tính bất biến

### Tính bất biến là một khái niệm quan trọng trong ReactJS

Tính bất biến đề cập đến việc không thay đổi giá trị của dữ liệu sau khi đã được khởi tạo.

Tính bất biến giúp tránh các vấn đề liên quan đến thay đổi trạng thái và quản lý dữ liệu hiệu quả hơn trong ứng dụng ReactJS. Bằng cách áp dụng tính bất biến, bạn có thể tối ưu hóa hiệu suất và tránh các lỗi liên quan đến thay đổi dữ liệu không mong muốn

Cách thức đảm bảo tính bất biến bao gồm việc sử dụng hàm sao chép (copy functions) hoặc thư viện hỗ trợ 

### Sử dụng hàm sao chép (copy functions) cho mảng:

```
const originalArray = [1, 2, 3];

const copiedArray = [...originalArray]; 
// Sao chép mảng

copiedArray.push(4); 
// Thêm phần tử vào mảng sao chép

console.log(originalArray); 
// [1, 2, 3] (không thay đổi)

console.log(copiedArray); 
// [1, 2, 3, 4]
```

### Sử dụng hàm sao chép (copy functions) cho object:

```
const originalObject = { name: 'John', age: 30 };

const copiedObject = { ...originalObject }; 
// Sao chép object

copiedObject.age = 31; 
// Thay đổi thuộc tính của object sao chép

console.log(originalObject); 
// { name: 'John', age: 30 } (không thay đổi)

console.log(copiedObject); 
// { name: 'John', age: 31 }
```

### Sử dụng hàm Object.assign() cho object:

Object.assign() có thể được sử dụng để giúp đảm bảo tính bắt biên khi làm việc với các đối tượng.

```
const person = {
  name: 'Alice',
  age: 25
};

// Tạo một bản sao mới của đối tượng 'person'
const newPerson = Object.assign({}, person);

// Thay đổi thuộc tính 'age' của 'newPerson'
newPerson.age = 26;

console.log(person.age); // 25
console.log(newPerson.age); // 26
```

Trong ví dụ trên, chúng ta tạo một bản sao mới của đối tượng person bằng cách sử dụng Object.assign(). Sau đó, chúng ta thay đổi thuộc tính age của newPerson. Tuy nhiên, đối tượng person gốc không bị thay đổi, cho thấy tính bắt biên đã được đảm bảo.

### Sử dụng Object.assign() cho Nested Object

```
const originalPerson = { 
    name: 'Alice', 
    address: { city: 'New York' } 
};

const copiedPerson = Object.assign({}, originalPerson); 
// Sao chép object

copiedPerson.address.city = 'Los Angeles'; 
// Thay đổi thuộc tính của object sao chép

console.log(originalPerson.address.city); 
// 'Los Angeles' (đã thay đổi)

console.log(copiedPerson.address.city); 
// 'Los Angeles'
```

Khi bạn sử dụng Object.assign({}, originalPerson), bạn chỉ tạo ra một bản sao nông (shallow copy) của originalPerson. Điều này có nghĩa là, nếu originalPerson có các thuộc tính là các đối tượng hoặc mảng, thì chỉ có tham chiếu đến các đối tượng hoặc mảng đó được sao chép, chứ không phải là các đối tượng hoặc mảng đó.

Nếu bạn muốn tạo một bản sao sâu (deep copy) của originalPerson, bạn có thể sử dụng JSON.parse(JSON.stringify(originalPerson)). Tuy nhiên, hãy lưu ý rằng phương pháp này chỉ hoạt động với các đối tượng JSON tương thích và không hoạt động với các giá trị như undefined, các hàm, Symbol, hoặc với các đối tượng có các thuộc tính không thể liệt kê (non-enumerable properties).

### Bài tập

**Câu 1:** Cho biết điểm giống và khác nhau của các kỹ thuật sao chép

*Bài tiếp theo [RS46 Ý nghĩa của tính bất biến](/lesson/session/session_046_variability_more.md)*