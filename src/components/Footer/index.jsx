import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__list">
          <ul className="footer__list-menu">
            <li>
              <a className="categories-item" href="#">
                TIN TỨC
              </a>
            </li>
            <li>
              <a className="categories-item" href="#">
                GÓC NHÌN CHUYÊN GIA
              </a>
            </li>
            <li>
              <a className="categories-item" href="#">
                NÔNG NGHIỆP 360
              </a>
            </li>
            <li>
              <a className="categories-item" href="#">
                NÔNG THÔN MỚI
              </a>
            </li>
          </ul>
          <ul className="footer__list-menu">
            <li>
              <a className="categories-item" href="#">
                VÌ CỘNG ĐỒNG
              </a>
            </li>
            <li>
              <a className="categories-item" href="#">
                MÔI TRƯỜNG VÀ TÀI NGUYÊN
              </a>
            </li>
            <li>
              <a className="categories-item" href="#">
                KHOA HỌC
              </a>
            </li>
            <li>
              <a className="categories-item" href="#">
                LUẬT SƯ CỦA BẠN
              </a>
            </li>
          </ul>
          <ul className="footer__list-menu">
            <li>
              <a className="categories-item" href="#">
                VĂN HÓA
              </a>
            </li>
            <li>
              <a className="categories-item" href="#">
                CUỘC SỐNG
              </a>
            </li>
            <li>
              <a className="categories-item" href="#">
                NGƯỜI TRUYỀN LỬA
              </a>
            </li>
            <li>
              <a className="categories-item" href="#">
                GIA VỊ CHO CUỘC SỐNG
              </a>
            </li>
          </ul>
          <ul className="footer__list-menu">
            <li>
              <a className="categories-item" href="#">
                THẾ GIỚI
              </a>
            </li>
            <li>
              <a className="categories-item" href="#">
                BẠN ĐỌC
              </a>
            </li>
          </ul>
          <ul className="footer__list-menu">
            <li>
              <a className="categories-item" href="#">
                E-MAGAZINE
              </a>
            </li>
            <li>
              <a className="categories-item" href="#">
                VIDEO
              </a>
            </li>
            <li>
              <a className="categories-item" href="#">
                PODCAST
              </a>
            </li>
            <li>
              <a className="categories-item" href="#">
                RSS
              </a>
            </li>
            <li>
              <a className="categories-item" href="#">
                RAO VẶT
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__main pd-tb24 btb2">
          <div className="footer__main-produce">
            <div className="logomain">
              <div className="logomain__logo">
                <img src="img/logo.png" alt="" />
              </div>
              <h3 className="heading-h3">
                <p className="text">TẠP CHÍ ĐIỆN TỬ CỦA</p>
                <p className="ca-tng-hi1">TÔNG HỘI NÔNG NGHIỆP VIỆT NAM</p>
              </h3>
              <ul className="logomain__producers">
                <li className="logomain__producers-item">
                  Tổng Biên tập: Nguyễn Đức Quang
                </li>
                <li className="logomain__producers-item">
                  Phó tổng Biên tập thường trực: Nguyễn Thị Quốc Hương
                </li>
                <li className="logomain__producers-item">
                  Phó Tổng Biên tập: Nguyễn Mạnh Thường
                </li>
                <p className="ca-tng-hi1">Tổng Thư ký tòa soạn: Lê An</p>
              </ul>
            </div>
            <ul className="morecontent">
              <li className="morecontent__item">Đặt báo dài hạn</li>
              <li className="morecontent__item">Quảng cáo</li>
              <li className="morecontent__item">Liên hệ góp ý</li>
              <li className="morecontent__item">Chính sách bảo mật</li>
            </ul>
          </div>
          <div className="footer__main-register">
            <span className="title p-bt16 ffrm" style={{ display: "block" }}>
              Đăng ký nhận bản tin
            </span>
            <div className="groupform">
              <input
                className="groupform__input"
                type="text"
                placeholder="Nhập email của bạn"
              />
              <button className="btn --btnsubmit" type="submit">
                Đăng ký
              </button>
            </div>
            <div className="listbox">
              <div className="listbox__box">
                <img
                  className="listbox__box-img"
                  src="/img/banner4.jpg"
                  alt={1}
                />
              </div>
              <div className="listbox__box">
                <img
                  className="listbox__box-img"
                  src="/img/banner6.jpg"
                  alt={2}
                />
              </div>
              <div className="listbox__box">
                <img
                  className="listbox__box-img"
                  src="/img/banner3.jpg"
                  alt={3}
                />
              </div>
            </div>
            <div className="sign --ft">
              <span className="fs14 ffb">Theo dõi Nông thôn Việt trên:</span>
              <div className="sign__socials">
                <i className="sign__socials-icon fb">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                      fill="#ffffff"
                    />
                  </svg>
                </i>
                <i className="sign__socials-icon ytb">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_481)">
                      <path
                        d="M23.8425 6.97453C23.8425 4.86516 22.2909 3.16828 20.3737 3.16828C17.7769 3.04687 15.1284 3 12.4219 3H11.5781C8.87811 3 6.22498 3.04687 3.62811 3.16875C1.71561 3.16875 0.164042 4.875 0.164042 6.98438C0.0468549 8.65266 -0.00283263 10.3214 -2.01251e-05 11.9902C-0.00470763 13.6589 0.0484174 15.3292 0.159355 17.0011C0.159355 19.1105 1.71092 20.8214 3.62342 20.8214C6.35154 20.948 9.14998 21.0042 11.9953 20.9995C14.8453 21.0089 17.6359 20.9495 20.3672 20.8214C22.2844 20.8214 23.8359 19.1105 23.8359 17.0011C23.9484 15.3277 24 13.6589 23.9953 11.9855C24.0059 10.3167 23.955 8.64641 23.8425 6.97453ZM9.70311 16.5886V7.37766L16.5 11.9808L9.70311 16.5886Z"
                        fill="#ffffff"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_481">
                        <rect width={24} height={24} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
                <i className="sign__socials-icon line">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_483)">
                      <path
                        d="M10 0C4.48 0 0 4.48 0 10C0 15.53 4.48 20 10 20C15.52 20 20 15.53 20 10C20 4.48 15.52 0 10 0ZM10 14.85C9.22 14.85 8.47 14.73 7.77 14.53C5.92 15.73 4.47 15.44 4.47 15.44C6.02 13.79 5.6 13.78 5.63 13.4C4.27 12.43 3.69 11.11 3.69 9.76C3.69 6.94 6.53 4.66 10 4.66C13.47 4.66 16.31 6.94 16.31 9.76C16.31 12.57 13.47 14.85 10 14.85Z"
                        fill="#ffffff"
                      />
                      <path
                        d="M8.29002 8.55009C8.33002 8.49009 8.36002 8.43009 8.38002 8.36009C8.40002 8.27009 8.40002 8.18009 8.40002 8.09009H6.03002V8.60009H7.67002C7.14002 9.27009 6.61002 9.94009 6.07002 10.6001C6.03002 10.6601 5.99002 10.7301 5.97002 10.8001C5.95002 10.8901 5.96002 10.9801 5.96002 11.0701H8.20002C8.30002 11.0701 8.39002 10.9801 8.40002 10.8801V10.5901H6.67002C7.15002 9.99009 7.62002 9.39009 8.09002 8.79009C8.16002 8.71009 8.22002 8.63009 8.29002 8.55009Z"
                        fill="#ffffff"
                      />
                      <path
                        d="M14.01 9.01007C13.79 8.82007 13.5 8.72007 13.21 8.74007C13.04 8.74007 12.88 8.79007 12.73 8.86007C12.5 8.98007 12.31 9.18007 12.2 9.42007C12.07 9.71007 12.06 10.0501 12.18 10.3501C12.28 10.6201 12.49 10.8501 12.75 10.9701C13.03 11.1101 13.35 11.1301 13.64 11.0301C13.9 10.9401 14.13 10.7501 14.27 10.5001C14.41 10.2601 14.46 9.97007 14.41 9.70007C14.36 9.43007 14.22 9.18007 14.01 9.01007ZM13.92 10.1001C13.88 10.2501 13.79 10.3801 13.67 10.4701C13.57 10.5401 13.45 10.5901 13.33 10.6001C13.18 10.6201 13.02 10.5801 12.9 10.5001C12.78 10.4201 12.68 10.3101 12.62 10.1701C12.56 10.0101 12.56 9.82007 12.62 9.66007C12.71 9.43007 12.93 9.26007 13.17 9.23007C13.3 9.21007 13.44 9.23007 13.56 9.29007C13.7 9.36007 13.82 9.48007 13.89 9.62007C13.95 9.77007 13.97 9.95007 13.92 10.1001Z"
                        fill="#ffffff"
                      />
                      <path
                        d="M11.25 10.8901C11.25 10.9801 11.32 11.0701 11.41 11.0701H11.76V8.09009H11.25V10.8901Z"
                        fill="#ffffff"
                      />
                      <path
                        d="M10.37 8.97003C10.22 8.86003 10.04 8.79003 9.86003 8.76003C9.64003 8.73003 9.41003 8.76003 9.21003 8.85003C8.97003 8.96003 8.77003 9.15003 8.65003 9.39003C8.54003 9.60003 8.50003 9.84003 8.53003 10.07C8.56003 10.32 8.68003 10.55 8.85003 10.73C9.02003 10.91 9.26003 11.04 9.51003 11.08C9.81003 11.12 10.12 11.04 10.37 10.86C10.37 10.97 10.45 11.06 10.55 11.07H10.84V8.81003H10.37V8.97003ZM10.34 10.11C10.3 10.26 10.21 10.39 10.08 10.48C9.97003 10.56 9.82003 10.61 9.67003 10.61C9.53003 10.61 9.38003 10.56 9.27003 10.47C9.16003 10.38 9.07003 10.26 9.03003 10.13C8.98003 9.96003 8.99003 9.77003 9.07003 9.62003C9.17003 9.40003 9.40003 9.24003 9.64003 9.23003C9.80003 9.22003 9.95003 9.27003 10.08 9.36003C10.19 9.43003 10.27 9.55003 10.32 9.67003C10.37 9.81003 10.38 9.97003 10.34 10.11Z"
                        fill="#ffffff"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_483">
                        <rect width={20} height={20} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__info-item">
            <p className="text">
              Tòa soạn: Lầu 10, tòa nhà số 12 Võ Văn Kiệt, P. Nguyễn Thái Bình,
              Q. 1, TPHCM
            </p>
            <p className="text">
              Tel: 093.205.6666 - (028) 3821 1283 Fax: (028) 3914 7286
            </p>
            <p className="ca-tng-hi1">E-mail: toasoan@nongthonviet.com.vn</p>
          </div>
          <div className="footer__info-item">
            <p className="text">
              Giấy phép xuất bản số 438/GP – BTTTT, cấp ngày 27/9/2016
            </p>
            <p className="ca-tng-hi1">
              © Bản quyền thuộc về Tạp chí điện tử Nông thôn Việt. Cấm sao chép
              dưới mọi hình thức nếu không có sự chấp thuận bằng văn bản.
            </p>
            <b className="powered-by-ngn1">© Powered by NGN</b>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
