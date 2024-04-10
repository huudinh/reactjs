// Sử dụng hàm sao chép (copy functions) cho mảng

const originalArray = [1, 2, 3];

const copiedArray = [...originalArray]; 
// Sao chép mảng

copiedArray.push(4); 
// Thêm phần tử vào mảng sao chép

console.log(originalArray); 
// [1, 2, 3] (không thay đổi)

console.log(copiedArray); 
// [1, 2, 3, 4]



// Sử dụng hàm sao chép (copy functions) cho object

const originalObject = { 
    name: 'John', 
    age: 30 
};

const copiedObject = { ...originalObject }; 
// Sao chép object

copiedObject.age = 31; 
// Thay đổi thuộc tính của object sao chép

console.log(originalObject); 
// { name: 'John', age: 30 } (không thay đổi)

console.log(copiedObject); 
// { name: 'John', age: 31 }



// Sử dụng hàm Object.assign() cho object:

const originalPerson = { 
    name: 'Alice', 
    address: { city: 'New York' } 
};

const copiedPerson = Object.assign(
    {}, originalPerson
); 
// Sao chép object

copiedPerson.address.city = 'Los Angeles'; 
// Thay đổi thuộc tính của object sao chép

console.log(originalPerson.address.city); 
// 'New York' (không thay đổi)

console.log(copiedPerson.address.city); 
// 'Los Angeles'