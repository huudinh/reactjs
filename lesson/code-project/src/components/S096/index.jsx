function useHelloWorld() {
    console.log("Hello World!");
}

// Định nghĩa hook tùy chỉnh 
// (tên bắt đầu bằng use)

function App() {
    useHelloWorld();
}

// Mỗi khi component App được hiển thị, 
// Hello World! được in ra trên console.

