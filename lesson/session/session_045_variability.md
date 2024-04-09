
![Create-HTML-1](images/components.jpg) 

# RS45 Tính bất biến

### Tính bất biến là một khái niệm quan trọng trong ReactJS

- Tính bất biến đề cập đến việc không thay đổi giá trị của dữ liệu sau khi đã được khởi tạo.

- Tính bất biến giúp tránh các vấn đề liên quan đến thay đổi trạng thái và quản lý dữ liệu hiệu quả hơn trong ứng dụng ReactJS. Bằng cách áp dụng tính bất biến, bạn có thể tối ưu hóa hiệu suất và tránh các lỗi liên quan đến thay đổi dữ liệu không mong muốn

- Cách thức đảm bảo tính bất biến bao gồm việc sử dụng hàm sao chép (copy functions) hoặc thư viện hỗ trợ 

### Sử dụng hàm sao chép (copy functions) cho mảng:

const originalArray = [1, 2, 3];

const copiedArray = [...originalArray]; // Sao chép mảng

copiedArray.push(4); // Thêm phần tử vào mảng sao chép

console.log(originalArray); // [1, 2, 3] (không thay đổi)

console.log(copiedArray); // [1, 2, 3, 4]

### Sử dụng hàm sao chép (copy functions) cho object:

const originalObject = { name: 'John', age: 30 };

const copiedObject = { ...originalObject }; 
// Sao chép object

copiedObject.age = 31; 
// Thay đổi thuộc tính của object sao chép

console.log(originalObject); 
// { name: 'John', age: 30 } (không thay đổi)

console.log(copiedObject); 
// { name: 'John', age: 31 }

### Sử dụng hàm Object.assign() cho object:

const originalPerson = { 
    name: 'Alice', 
    address: { city: 'New York' } 
};

const copiedPerson = Object.assign({}, originalPerson); 
// Sao chép object

copiedPerson.address.city = 'Los Angeles'; 
// Thay đổi thuộc tính của object sao chép

console.log(originalPerson.address.city); 
// 'New York' (không thay đổi)

console.log(copiedPerson.address.city); 
// 'Los Angeles'


*Bài tiếp theo [RS46 Ý nghĩa của tính bất biến](/lesson/session/session_046_variability_more.md)*