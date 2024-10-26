import { useState } from "react";

const CheckBoxList = () => {
  // Khai báo trạng thái cho từng checkbox
  const [checkedLists, setCheckedLists] = useState({
    cau1: false,
    cau2: false,
    cau3: false,
    cau4: false,
  })
  const [checkedItems, setCheckedItems] = useState({
    cau1_1: {
      check: false,
      show: true
    },
    cau1_2: {
      check: false,
      show: true
    },
    cau1_3: {
      check: false,
      show: true
    },
    cau2_1: {
      check: false,
      show: true
    },
    cau2_2: {
      check: false,
      show: true
    },
    cau2_3:{
      check: false,
      show: true
    },
    cau3_1: {
      check: false,
      show: true
    },
    cau3_2: {
      check: false,
      show: true
    },
    cau3_3: {
      check: false,
      show: true
    },
    cau4_1: {
      check: false,
      show: true
    },
    cau4_2: {
      check: false,
      show: true
    },
    cau4_3: {
      check: false,
      show: true
    },
  });

  // Reset các câu con khi câu chính không được check
  const resetSubOptions = (mainOption) => {
    let data;
    if (mainOption === "cau1") {
      return {
        cau1_1: {
          check: false,
          show: true
        },
        cau1_2: {
          check: false,
          show: true
        },
        cau1_3: {
          check: false,
          show: true
        },
      }
    }
    if (mainOption === "cau2") {
      if (checkedItems.cau1_1.check && checkedItems.cau1_2.check && checkedItems.cau1_3.check){
        return {
          cau1_1: {
            check: true,
            show: true
          },
          cau1_2: {
            check: true,
            show: true
          },
          cau1_3: {
            check: true,
            show: true
          },
        }
      }
      if (checkedItems.cau1_1.check && checkedItems.cau1_2.check){
        return {
          cau1_1: {
            check: true,
            show: true
          },
          cau1_2: {
            check: true,
            show: true
          },
          cau1_3: {
            check: false,
            show: false
          },
        }
      }
      if (checkedItems.cau1_2.check && checkedItems.cau1_3.check){
        return {
          cau1_1: {
            check: false,
            show: false
          },
          cau1_2: {
            check: true,
            show: true
          },
          cau1_3: {
            check: true,
            show: true
          },
        }
      }
      if(checkedItems.cau1_1.check){
        return {
          cau1_1: {
            check: true,
            show: true
          },
          cau1_2: {
            check: false,
            show: false
          },
          cau1_3: {
            check: false,
            show: false
          },
        }
      }
      if(checkedItems.cau1_2.check){
        return {
          cau1_1: {
            check: false,
            show: false
          },
          cau1_2: {
            check: true,
            show: true
          },
          cau1_3: {
            check: false,
            show: false
          },
        }
      }
      if(checkedItems.cau1_3.check){
        return {
          cau1_1: {
            check: false,
            show: false
          },
          cau1_2: {
            check: false,
            show: false
          },
          cau1_3: {
            check: true,
            show: true
          },
        }
      }
    }
    if (mainOption === "cau3") {
      return {
        cau3_1: false,
        cau3_2: false,
        cau3_3: false,
      };
    }
    if (mainOption === "cau4") {
      return {
        cau4_1: false,
        cau4_2: false,
        cau4_3: false,
      };
    }
    return {};
  };

  // Thay đổi trạng thái check từ người dùng
  const handleChange = (event) => {
    const { name, checked } = event.target;

    // Cập nhật danh sách câu hỏi
    setCheckedLists((prevState) => {
      const newState = { ...prevState, [name]: checked };
      // Nếu là câu chính và bỏ chọn thì reset các câu con
      if (checked && (name === "cau1" || name === "cau2" || name === "cau3" || name === "cau4")) {
        return { ...newState, ...resetSubOptions(name) };
      }
      return newState;
    });

    setCheckedItems((prevState) => {
      const newState = { ...prevState, [name]: checked };
      // Nếu là câu chính và bỏ chọn thì reset các câu con
      if (checked && (name === "cau1" || name === "cau2" || name === "cau3" || name === "cau4")) {
        console.log(name);
        
        return { ...newState, ...resetSubOptions(name) };
      }
      return newState;
    });
    
  };

  // Thay đổi trạng thái check từ người dùng
  const handleChangeItem = (event) => {
    const { name, checked } = event.target;

    setCheckedItems((prevState) => {
      const newState = { ...prevState, [name]: {check:checked, show:true} };
      return newState;
    });
    
  };  

  return (
    <div>
      <Input 
        name="cau1" 
        checked={checkedLists.cau1}
        handleChange={handleChange}
        show='true'
      />
      {checkedLists.cau1 && (
        <div style={{paddingLeft:'65px'}}>
          <Input show={checkedItems.cau1_1.show} name="cau1_1" checked={checkedItems.cau1_1.check} handleChange={handleChangeItem} />
          <Input show={checkedItems.cau1_2.show} name="cau1_2" checked={checkedItems.cau1_2.check} handleChange={handleChangeItem} />
          <Input show={checkedItems.cau1_3.show} name="cau1_3" checked={checkedItems.cau1_3.check} handleChange={handleChangeItem} />
        </div>
      )}

      <Input 
        name="cau2" 
        checked={checkedLists.cau2}
        handleChange={handleChange}
        show='true'
      />
      {checkedLists.cau2 && (
        <div style={{paddingLeft:'65px'}}>
          <Input show={checkedItems.cau2_1.show} name="cau2_1" checked={checkedItems.cau2_1.check} handleChange={handleChangeItem} />
          <Input show={checkedItems.cau2_2.show}  name="cau2_2" checked={checkedItems.cau2_2.check} handleChange={handleChangeItem} />
          <Input show={checkedItems.cau2_3.show}  name="cau2_3" checked={checkedItems.cau2_3.check} handleChange={handleChangeItem} />
        </div>
      )}

      <Input 
        name="cau3" 
        checked={checkedLists.cau3}
        handleChange={handleChange}
        show='true'
      />
      {checkedLists.cau3 && (
        <div style={{paddingLeft:'65px'}}>
          <Input show={checkedItems.cau3_1.show}  name="cau3_1" checked={checkedItems.cau3_1.check} handleChange={handleChangeItem} />
          <Input show={checkedItems.cau3_2.show}  name="cau3_2" checked={checkedItems.cau3_2.check} handleChange={handleChangeItem} />
          <Input show={checkedItems.cau3_3.show}  name="cau3_3" checked={checkedItems.cau3_3.check} handleChange={handleChangeItem} />
        </div>
      )}

      <Input 
        name="cau4" 
        checked={checkedLists.cau4}
        handleChange={handleChange}
        show='true'
      />
      {checkedLists.cau4 && (
        <div style={{paddingLeft:'65px'}}>
          <Input show={checkedItems.cau4_1.show}  name="cau4_1" checked={checkedItems.cau4_1.check} handleChange={handleChangeItem} />
          <Input show={checkedItems.cau4_2.show}  name="cau4_2" checked={checkedItems.cau4_2.check} handleChange={handleChangeItem} />
          <Input show={checkedItems.cau4_3.show}  name="cau4_3" checked={checkedItems.cau4_3.check} handleChange={handleChangeItem} />
        </div>
      )}
    </div>
  );
}

const Input = (props) => {
  let block;

  if(props.show){
    block = 'block'
  } else{
    block = 'none'
  }

  return (
    <div style={{display:block}}>
      <input 
        type="checkbox"         
        name={props.name}
        checked={props.checked}
        onChange={props.handleChange}
      /> 
      <span>{props.name}</span>
    </div>
  )
}

export default CheckBoxList;