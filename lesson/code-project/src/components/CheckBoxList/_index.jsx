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
      question.subs.forEach(sub => acc[sub] = { check: false, show: false });
      return acc;
    }, {})
  );

  // Reset các câu con khi câu chính không được check
  const resetSubOptions = (mainOption) => {
    const resetSubs = {};
    questions.forEach(question => {
      // Kiểm tra câu nào được click
      if (question.main !== mainOption) {
        question.subs.forEach(sub => {
          if (!checkedItems[sub].check) {
            resetSubs[sub] = { check: false, show: true };
          }
        });
      }
    });
    console.log(resetSubs);
    
    return resetSubs;
  };

  // Thay đổi trạng thái checkbox chính và con
  const handleChange = (event) => {
    const { name, checked } = event.target;

    setCheckedItems((prevState) => {
      const newState = { ...prevState, [name]: checked };

      // Nếu là checkbox chính reset các checkbox con
      // if (checked && questions.some(q => q.main === name)) {
      // if (checked) {
      //   return { ...newState, ...resetSubOptions(name) };
      // }

      // Nếu là checkbox chính và được chọn, hiển thị các checkbox con
      if (checked && questions.some(q => q.main === name)) {
        const showSubs = {};
        questions.find(q => q.main === name).subs.forEach(sub => {
          showSubs[sub] = { ...prevState[sub], show: true };
        });
        return { ...newState, ...showSubs };
      } 
      if (checked && questions.some(q => q.main !== name)) {

      }

      return newState;
    });
  };

  const handleChangeItem = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], check: checked }
    }));
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
  );
}

export default CheckBoxList;