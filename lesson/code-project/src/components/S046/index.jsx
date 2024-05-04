const [data, setData] = useState([])

// Cách State hoạt động được mô tả như sau
let state = []; 

function setData(newState) {
    if (state === newState) {
        return false;
    }
    // store the newState for the next 
    // time the user calls setData()
    state = newState;
    // Ask ReactDOM to re-render
}





// Điều gì xảy ra khi không sử dụng 
// tính bất biến? 

{
    let state = [];

    let newState = state;

    state.push(10);

    state === newState; 
    //true, whereas it should have been false
}

// Vì chúng ta đã thay đổi mảng bằng .push, React sẽ nghĩ rằng chúng ta CHƯA thay đổi trạng thái và do đó sẽ KHÔNG hiển thị lại Component.

// Và đây là lý do tại sao React yêu cầu sử dụng tính bất biến.