import ProgressContentSelect from "./ProgressContentSelect";
import ProgressContentForm from "./ProgressContentForm";
import ProgressContentThank from "./ProgressContentThank";

const ProgressContent = (props) => {
    // Kiểm tra kiểu Select
    if (props.data[props.count].type === "select") {
        return (
            <div>
                <ProgressContentSelect
                    data={props.data[props.count]}
                    onClick={props.onHandleClick}
                />
            </div>
        );
    }

    // Kiểm tra kiểu form
    if (props.data[props.count].type === "form") {
        return (
            <div>
                <ProgressContentForm
                    data={props.data[props.count]}
                    onClick={props.onHandleClick}
                    question={props.question}
                />
            </div>
        );
    }

    // Kiểm tra kiểu thanks
    if (props.data[props.count].type === "thanks") {
        return (
            <div>
                <ProgressContentThank
                    data={props.data[props.count]}
                    onClick={props.onHandleClick}
                />
            </div>
        );
    }
};

export default ProgressContent;
