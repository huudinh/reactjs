const ProgressContentThank = (props) => {
    const { title, note } = props.data;
    return (
        <div className="progressContentBox">
            <div className="progressContentThank">
                <div className="progressContentTitle">{title}</div>
                <div className="progressContentNote">{note}</div>
            </div>
        </div>
    );
};

export default ProgressContentThank;
