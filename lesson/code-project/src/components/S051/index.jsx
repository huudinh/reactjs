{
    const data = {
        id: 1,
        name: "Sam"
    }
    
    //GOOD: immutable
    const newObj = {...data, age: 18}
    console.log(newObj); 
    // {id: 1, name: "Sam", age: 18}
}

{
    const data = {
        id: 1,
        age: 19
    }
    
    // GOOD: immutable
    const newObj = {...data, age: 20};
    console.log(newObj); // {id: 1, age: 20}
    console.log(data); 
    // original object did not change {id: 1, age: 19}
}

{
    const data = {
        id: 1,
        age: 19
    }
    const wrongNewObj = {age: 20, ...data};

    console.log(wrongNewObj)
}
// Do đó, đoạn code dưới đây SẼ KHÔNG hoạt động:
// Nguyên nhân là vì age: 19 từ đối tượng data sẽ ghi đè lên age: 20.
// Bạn chỉ cần sửa đổi thành {...data, age: 20} và đoạn code sẽ hoạt động.