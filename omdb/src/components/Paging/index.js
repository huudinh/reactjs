import Pagination from "react-js-pagination";
import './Paging.scss';

const Paging = (props) => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
                itemClass="page-item"
                linkClass="page-link"
                //hideNavigation
                activePage={props.activePage}
                itemsCountPerPage={10}
                totalItemsCount={props.totalResult}
                pageRangeDisplayed={5}
                onChange={props.handlePageChange}
            />
        </div>
    )
}

export default Paging;