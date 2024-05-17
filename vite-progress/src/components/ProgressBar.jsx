const ProgressBar = ({ progress }) => {
    return (
        <div className="progress">
            <div className="percent" style={{ width: `${progress}%` }} />
        </div>
    );
};

export default ProgressBar;
