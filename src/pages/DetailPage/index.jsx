import BoxsItem from "../../components/BoxsItem";
import Headermidle from "../../components/HeaderMidle/Headermidle";
import useDetailPage from "./useDetailPage";

const DetailPage = () => {
  const { dataListDetail } = useDetailPage() || {};
  console.log("dataListDetail", dataListDetail);
  return (
    <>
      <Headermidle heading={false} nav={false} />
      <main>
        <section className="scBanner">
          <div className="container">
            <div className="boxs__item --boxs-xl p-tb32">
              <a href="#" className="boxs__item-img">
                <img className="img" src="/img/banner2.jpg" alt="" />
              </a>
              <div className="boxs__item-info">
                <h1 className="heading-h1 ffb">
                  <a href="#">
                    Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                    quả hơn đất nông nghiệp
                  </a>
                </h1>
                <div className="date dflex fs13">
                  <p className="date__time">12:02 23/23/2012</p>
                  <a className="list fs13 grey9" href="#">
                    DANH MỤC
                  </a>
                </div>
              </div>
            </div>
            <div className="boxs twoCol">
              <div className="boxs__item">
                <a href="#" className="boxs__item-img">
                  <img className="img" src="/img/banner2.jpg" alt="" />
                </a>
                <div className="boxs__item-info">
                  <h1 className="heading-h3">
                    <a href="#">
                      Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                      quả hơn đất nông nghiệp
                    </a>
                  </h1>
                  <div className="date dflex fs13">
                    <p className="date__time">12:02 23/23/2012</p>
                    <a className="list fs13 grey9" href="#">
                      DANH MỤC
                    </a>
                  </div>
                  <p className="description">
                    Ở Việt Nam, một trong những làng tranh dân gian đặc trưng
                    phải kể đến là tranh Làng Sình ở tỉnh Thừa Thiên Huế. Ở Việt
                    Nam, một trong những làng tranh dân gian đặc trưng phải kể
                    đến là tranh Làng Sình ở tỉnh Thừa Thiên Huế
                  </p>
                </div>
              </div>
              <div className="boxs__item">
                <a href="#" className="boxs__item-img">
                  <img className="img" src="/img/banner2.jpg" alt="" />
                </a>
                <div className="boxs__item-info">
                  <h1 className="heading-h3">
                    <a href="#">
                      Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                      quả hơn đất nông nghiệp
                    </a>
                  </h1>
                  <div className="date dflex fs13">
                    <p className="date__time">12:02 23/23/2012</p>
                    <a className="list fs13 grey9" href="#">
                      DANH MỤC
                    </a>
                  </div>
                  <p className="description">
                    Ở Việt Nam, một trong những làng tranh dân gian đặc trưng
                    phải kể đến là tranh Làng Sình ở tỉnh Thừa Thiên Huế. Ở Việt
                    Nam, một trong những làng tranh dân gian đặc trưng phải kể
                    đến là tranh Làng Sình ở tỉnh Thừa Thiên Huế
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="listnews --company --cpnPageDetail">
            <div className="container">
              <div className="boxs p-tb32">
                <div className="boxs__item">
                  <a href="#" className="boxs__item-img">
                    <img className="img" src="/img/sea1.jpg" alt="" />
                  </a>
                  <div className="boxs__item-info">
                    <h1 className="heading-h3">
                      <a href="#">
                        Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng
                        hiệu quả hơn đất nông nghiệp
                      </a>
                    </h1>
                  </div>
                </div>
                <div className="boxs__item">
                  <a href="#" className="boxs__item-img">
                    <img className="img" src="/img/banner2.jpg" alt="" />
                  </a>
                  <div className="boxs__item-info">
                    <h1 className="heading-h3">
                      <a href="#">
                        Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng
                        hiệu quả hơn đất nông nghiệp
                      </a>
                    </h1>
                  </div>
                </div>
                <div className="boxs__item">
                  <a href="#" className="boxs__item-img">
                    <img className="img" src="/img/sea1.jpg" alt="" />
                  </a>
                  <div className="boxs__item-info">
                    <h1 className="heading-h3">
                      <a href="#">
                        Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng
                        hiệu quả hơn đất nông nghiệp
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="listnews__company p-bt32">
                <div className="listnews__company-item">
                  <img className="img" src="/img/lg-company.svg" alt="" />
                </div>
                <div className="listnews__company-item">
                  <img className="img" src="/img/ma.svg" alt="" />
                </div>
                <div className="listnews__company-item">
                  <img className="img" src="/img/man.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="scListBlog p-t32">
          <div className="container">
            <div className="boxs">
              <div className="boxs__item">
                <a href="#" className="boxs__item-img">
                  <img className="img" src="/img/banner2.jpg" alt="" />
                </a>
                <div className="boxs__item-info">
                  <h1 className="heading-h3">
                    <a href="#">
                      Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                      quả hơn đất nông nghiệp
                    </a>
                  </h1>
                  <div className="date dflex fs13">
                    <p className="date__time">12:02 23/23/2012</p>
                    <a className="list fs13 grey9" href="#">
                      DANH MỤC
                    </a>
                  </div>
                </div>
              </div>
              <div className="boxs__item">
                <a href="#" className="boxs__item-img">
                  <img className="img" src="/img/banner2.jpg" alt="" />
                </a>
                <div className="boxs__item-info">
                  <h1 className="heading-h3">
                    <a href="#">
                      Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                      quả hơn đất nông nghiệp
                    </a>
                  </h1>
                  <div className="date dflex fs13">
                    <p className="date__time">12:02 23/23/2012</p>
                    <a className="list fs13 grey9" href="#">
                      DANH MỤC
                    </a>
                  </div>
                </div>
              </div>
              <div className="boxs__item">
                <a href="#" className="boxs__item-img">
                  <img className="img" src="/img/banner2.jpg" alt="" />
                </a>
                <div className="boxs__item-info">
                  <h1 className="heading-h3">
                    <a href="#">
                      Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                      quả hơn đất nông nghiệp
                    </a>
                  </h1>
                  <div className="date dflex fs13">
                    <p className="date__time">12:02 23/23/2012</p>
                    <a className="list fs13 grey9" href="#">
                      DANH MỤC
                    </a>
                  </div>
                </div>
              </div>
              <div className="boxs__item">
                <a href="#" className="boxs__item-img">
                  <img className="img" src="/img/banner2.jpg" alt="" />
                </a>
                <div className="boxs__item-info">
                  <h1 className="heading-h3">
                    <a href="#">
                      Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                      quả hơn đất nông nghiệp
                    </a>
                  </h1>
                  <div className="date dflex fs13">
                    <p className="date__time">12:02 23/23/2012</p>
                    <a className="list fs13 grey9" href="#">
                      DANH MỤC
                    </a>
                  </div>
                </div>
              </div>
              <div className="boxs__item">
                <a href="#" className="boxs__item-img">
                  <img className="img" src="/img/banner2.jpg" alt="" />
                </a>
                <div className="boxs__item-info">
                  <h1 className="heading-h3">
                    <a href="#">
                      Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                      quả hơn đất nông nghiệp
                    </a>
                  </h1>
                  <div className="date dflex fs13">
                    <p className="date__time">12:02 23/23/2012</p>
                    <a className="list fs13 grey9" href="#">
                      DANH MỤC
                    </a>
                  </div>
                </div>
              </div>
              <div className="boxs__item">
                <a href="#" className="boxs__item-img">
                  <img className="img" src="/img/banner2.jpg" alt="" />
                </a>
                <div className="boxs__item-info">
                  <h1 className="heading-h3">
                    <a href="#">
                      Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                      quả hơn đất nông nghiệp
                    </a>
                  </h1>
                  <div className="date dflex fs13">
                    <p className="date__time">12:02 23/23/2012</p>
                    <a className="list fs13 grey9" href="#">
                      DANH MỤC
                    </a>
                  </div>
                </div>
              </div>
              <div className="boxs__item">
                <a href="#" className="boxs__item-img">
                  <img className="img" src="/img/banner2.jpg" alt="" />
                </a>
                <div className="boxs__item-info">
                  <h1 className="heading-h3">
                    <a href="#">
                      Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                      quả hơn đất nông nghiệp
                    </a>
                  </h1>
                  <div className="date dflex fs13">
                    <p className="date__time">12:02 23/23/2012</p>
                    <a className="list fs13 grey9" href="#">
                      DANH MỤC
                    </a>
                  </div>
                </div>
              </div>
              <div className="boxs__item">
                <a href="#" className="boxs__item-img">
                  <img className="img" src="/img/banner2.jpg" alt="" />
                </a>
                <div className="boxs__item-info">
                  <h1 className="heading-h3">
                    <a href="#">
                      Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                      quả hơn đất nông nghiệp
                    </a>
                  </h1>
                  <div className="date dflex fs13">
                    <p className="date__time">12:02 23/23/2012</p>
                    <a className="list fs13 grey9" href="#">
                      DANH MỤC
                    </a>
                  </div>
                </div>
              </div>
              <div className="boxs__item">
                <a href="#" className="boxs__item-img">
                  <img className="img" src="/img/banner2.jpg" alt="" />
                </a>
                <div className="boxs__item-info">
                  <h1 className="heading-h3">
                    <a href="#">
                      Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                      quả hơn đất nông nghiệp
                    </a>
                  </h1>
                  <div className="date dflex fs13">
                    <p className="date__time">12:02 23/23/2012</p>
                    <a className="list fs13 grey9" href="#">
                      DANH MỤC
                    </a>
                  </div>
                </div>
              </div>
              <div className="boxs__item">
                <a href="#" className="boxs__item-img">
                  <img className="img" src="/img/banner2.jpg" alt="" />
                </a>
                <div className="boxs__item-info">
                  <h1 className="heading-h3">
                    <a href="#">
                      Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                      quả hơn đất nông nghiệp
                    </a>
                  </h1>
                  <div className="date dflex fs13">
                    <p className="date__time">12:02 23/23/2012</p>
                    <a className="list fs13 grey9" href="#">
                      DANH MỤC
                    </a>
                  </div>
                </div>
              </div>
              <div className="boxs__item">
                <a href="#" className="boxs__item-img">
                  <img className="img" src="/img/banner2.jpg" alt="" />
                </a>
                <div className="boxs__item-info">
                  <h1 className="heading-h3">
                    <a href="#">
                      Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                      quả hơn đất nông nghiệp
                    </a>
                  </h1>
                  <div className="date dflex fs13">
                    <p className="date__time">12:02 23/23/2012</p>
                    <a className="list fs13 grey9" href="#">
                      DANH MỤC
                    </a>
                  </div>
                </div>
              </div>
              <div className="boxs__item">
                <a href="#" className="boxs__item-img">
                  <img className="img" src="/img/banner2.jpg" alt="" />
                </a>
                <div className="boxs__item-info">
                  <h1 className="heading-h3">
                    <a href="#">
                      Dự thảo Luật Đất đai sửa đổi: Cần giải phóng, sử dụng hiệu
                      quả hơn đất nông nghiệp
                    </a>
                  </h1>
                  <div className="date dflex fs13">
                    <p className="date__time">12:02 23/23/2012</p>
                    <a className="list fs13 grey9" href="#">
                      DANH MỤC
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="scListBlog__Banner">
              <img src="/img/bannerdoc.jpg" alt="" />
              <img className="p-t32" src="/img/qc.jpg" alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DetailPage;
