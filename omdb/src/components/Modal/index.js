const Modal = (props) => {
    const handleClose = () => {
        props.toggle();
	}

    return (
        <div className="modal" id="modal-pop" style={{display: "flex"}} >
            <div className="modal-bg" onClick={handleClose}></div>
            <div className="modal-box animate-pop">
                <div className="modal-header">
                    <div className="modal-close" onClick={handleClose}>×</div>
                    <div className="modal-title">{props.movie.Title}</div>
                </div>
                <div className="modal-body">
                    <p><img src={props.movie.Poster} /></p>
                    <p><b>Type :</b> {props.movie.Type}{" "}</p>
                    <p><b>Year :</b> {props.movie.Year}</p>
                    <p><b>ImdbID :</b> {props.movie.imdbID}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;