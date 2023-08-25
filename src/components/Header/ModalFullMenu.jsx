import { Link } from "react-router-dom";
import { PATH } from "../../constants/path";

const ModalFullMenu = ({ isModal, setIsModal, listCategory }) => {
  return (
    <div className={`modal-fullmenu ${isModal && "active"}`}>
      <div className="container">
        <div className="btn-close" onClick={() => setIsModal(false)}>
          <span className>Đóng</span>
          <img src="/img/btn-close.svg" alt="" />
        </div>
        {listCategory?.length > 0 &&
          listCategory?.map((item, index) => {
            return (
              <ul className="headermidle__categories" key={item?.id || index}>
                <li className="nav-item">
                  <Link
                    to={PATH.DETAIL_PAGE.replace(":alias", item?.alias)}
                    className="categories-item"
                  >
                    {item?.name}
                  </Link>
                </li>

                {item?.subCates?.length > 0 &&
                  item?.subCates?.map((sub, index) => {
                    return (
                      <li className="item" key={sub?.id || index}>
                        <Link
                          to={PATH.DETAIL_PAGE.replace(":alias", item?.alias)}
                          className="categories-item"
                        >
                          {sub?.name}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            );
          })}
      </div>
    </div>
  );
};

export default ModalFullMenu;
