import { useState } from "react";
import styles from './CheckBoxList.module.scss';

const CheckBoxList = (props) => {
    const { survey } = props;
    // console.log(survey.answer);
    
    // Danh sách các câu chính và câu con
    const questions_1 = [];

    // Chuyển đổi cấu trúc API
    survey && survey.answer.forEach(item => {
        questions_1.push({
            main: item.value,
            subs: item.list_service.map(sub => sub.name ? sub.name : sub.value)
        })
    });

    console.log(questions_1);
    
    // const questions = questions_1;


    const questions = [
        { main: "cau1", value: 'Câu 1', subs: ["cau1_1", "cau1_2", "cau1_3", "cau1_4"], subs_data: [{name:'Câu 1.1'}, {name:'Câu 1.2'},{name:'Câu 1.3'},{name:'Câu 1.4'},] },
        { main: "cau2", value: 'Câu 2', subs: ["cau2_1", "cau2_2"], subs_data: [{name:'Câu 2.1'}, {name:'Câu 2.2'}]},
        { main: "cau3", value: 'Câu 3', subs: ["cau3_1"], subs_data: [{name:'Câu 3.1'}] },
        { main: "cau4", value: 'Câu 4', subs: ["cau4_1", "cau4_2", "cau4_3", "cau4_4", "cau4_5"], subs_data: [{name:'Câu 4.1'}, {name:'Câu 4.2'},{name:'Câu 4.3'},{name:'Câu 4.4'},{name:'Câu 4.5'},] },
        { main: "cau5", value: 'Câu 5', subs: ["cau5_1", "cau5_2", "cau5_3"], subs_data: [{name:'Câu 5.1'}, {name:'Câu 5.2'},{name:'Câu 5.3'}]},
        { main: "cau6", value: 'Câu 6', subs: ["cau6_1", "cau6_2", "cau6_3"], subs_data: [{name:'Câu 6.1'}, {name:'Câu 6.2'},{name:'Câu 6.3'}]},
    ];
    // const questions = [
    //     { main: "cau1", subs: ["cau1_1", "cau1_2", "cau1_3"] },
    //     { main: "cau2", subs: ["cau2_1", "cau2_2", "cau2_3"] },
    //     { main: "cau3", subs: ["cau3_1", "cau3_2", "cau3_3"] },
    //     { main: "cau4", subs: ["cau4_1", "cau4_2", "cau4_3"] },
    //   ];    

    // Khai báo trạng thái cho từng checkbox
    const [checkedItems, setCheckedItems] = useState(
        questions.reduce((acc, question) => {
            acc[question.main] = false;
            
            question.subs.forEach(sub => acc[sub] = { check: false, show: true });
            // console.log(acc);
            return acc;
        }, {})
    );

    console.log(checkedItems);
  
  // Reset các câu con khi câu chính không được check
    const resetSubOptions = (mainOption) => {
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

        const mainCount = questions.length; // Số lượng câu chính
          
        const result = {};
          
        questions.forEach((question, index) => {
            const prefix = `cau${index + 1}_`;
            const count = question.subs.length;
          
            if (question.main === mainOption) {
                Object.assign(result, resetOptions(prefix, mainCount));
            } else {
                Object.assign(result, updateOptions(prefix, count));
            }
        });
          
        return result;
        
    };

    // Thay đổi trạng thái check các câu Cha
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
            console.log(updatedState);
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
    <div className={styles.question}>
      {questions.map((question) => (
        <div className={styles.item} key={question.main}>
          <Input 
            name={question.main} 
            title={question.value}
            checked={checkedItems[question.main]} 
            handleChange={handleChange}
            show={true}
          />
          {checkedItems[question.main] && (
            <div style={{ paddingLeft: '69px' }}>
              {question.subs.map((sub, index) => (
                <Input
                    key={sub}
                    name={sub}
                    title={question.subs_data[index].name}
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
    <label style={{ display: props.show ? 'block' : 'none' }}>
      <input 
        type="checkbox"         
        name={props.name}
        checked={props.checked}
        onChange={props.handleChange}
      /> 
      <span>{props.title}</span>
    </label>
  )
}

export default CheckBoxList;