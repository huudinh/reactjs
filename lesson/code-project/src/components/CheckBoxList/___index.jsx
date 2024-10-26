import { useState } from "react";

const CheckBoxList = () => {
  // Danh sách các câu chính và câu con

  const questions = [
    { main: "cau1", subs: ["cau1_1", "cau1_2", "cau1_3"] },
    { main: "cau2", subs: ["cau2_1", "cau2_2", "cau2_3"] },
    { main: "cau3", subs: ["cau3_1", "cau3_2", "cau3_3"] },
    { main: "cau4", subs: ["cau4_1", "cau4_2", "cau4_3"] },
  ];

  // Khai báo trạng thái cho từng checkbox
  const [checkedItems, setCheckedItems] = useState(
    questions.reduce((acc, question) => {
      acc[question.main] = false;
      question.subs.forEach(sub => acc[sub] = { check: false, show: true });
      return acc;
    }, {})
  );

  // console.log(checkedItems);
  
  // Reset các câu con khi câu chính không được check
  const resetSubOptions = (mainOption) => {
    // Bỏ check các câu con có câu chính được chọn
    const resetOptions = (prefix, count) => {
      const options = {};
      for (let i = 1; i <= count; i++) {
        options[`${prefix}${i}`] = { check: false, show: true };
      }
      return options;
    };
  
    const updateOptions = (prefix, count) => {
      const options = {};
      for (let i = 1; i <= count; i++) {
        options[`${prefix}${i}`] = { check: checkedItems[`${prefix}${i}`].check, show: checkedItems[`${prefix}${i}`].check };
      }
      
      return options;
    };
  
    const mainCount = 3; // Số lượng câu chính
    const subCount = 3;  // Số lượng câu phụ
  
    if (mainOption === "cau1") {
      return {
        ...resetOptions("cau1_", mainCount),
        ...updateOptions("cau2_", subCount),
        ...updateOptions("cau3_", subCount),
        ...updateOptions("cau4_", subCount),
      };
    }
  
    if (mainOption === "cau2") {
      return {
        ...resetOptions("cau2_", subCount),
        ...updateOptions("cau1_", mainCount),
        ...updateOptions("cau3_", mainCount),
        ...updateOptions("cau4_", mainCount),
      };
    }

    if (mainOption === "cau3") {
      return {
        ...resetOptions("cau3_", subCount),
        ...updateOptions("cau1_", mainCount),
        ...updateOptions("cau2_", mainCount),
        ...updateOptions("cau4_", mainCount),
      };
    }

    if (mainOption === "cau4") {
      return {
        ...resetOptions("cau4_", subCount),
        ...updateOptions("cau1_", mainCount),
        ...updateOptions("cau2_", mainCount),
        ...updateOptions("cau3_", mainCount),
      };
    }
  
    return {};
  };

  // Thay đổi trạng thái check các câu cha từ người dùng
  const handleChange = (event) => {
    const { name, checked } = event.target;

    setCheckedItems((prevState) => {
      const newState = { ...prevState, [name]: checked };

      // Kiểm tra câu hỏi chính được click
      if (checked && questions.some(q => q.main === name)) {
        // Trả về điều kiện hiển thị
        const updatedState = { ...newState, ...resetSubOptions(name) };

        // Kiểm tra các câu chính khác
        questions.forEach(question => {
          if (question.main !== name) {
            const allSubsUnchecked = question.subs.every(sub => !updatedState[sub].check);
            if (allSubsUnchecked) {
              updatedState[question.main] = false;
            }
          }
        });
        return updatedState;
      }
      return newState;
    });
  };

  // Thay đổi trạng thái check các câu con
  const handleChangeItem = (event) => {
    const { name, checked } = event.target;
    
    setCheckedItems((prevState) => {
      const newState = { ...prevState, [name]: { check: checked, show: true } };

      // Kiểm tra nếu tất cả các câu con đều là false thì câu cha cũng là false
      questions.forEach(question => {
        if (question.subs.includes(name)) {
          const allSubsUnchecked = question.subs.every(sub => !newState[sub].check);
          if (allSubsUnchecked) {
            newState[question.main] = false;
          }
        }
      });
      
      return newState;
    })
  };

  return (
    <div>
      {questions.map((question) => (
        <div key={question.main}>
          <Input 
            name={question.main} 
            checked={checkedItems[question.main]} 
            handleChange={handleChange}
            show={true}
          />
          {checkedItems[question.main] && (
            <div style={{ paddingLeft: '65px' }}>
              {question.subs.map(sub => (
                <Input
                  key={sub}
                  name={sub}
                  checked={checkedItems[sub].check}
                  handleChange={handleChangeItem}
                  show={checkedItems[sub].show}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const Input = (props) => {
  return (
    <div style={{ display: props.show ? 'block' : 'none' }}>
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