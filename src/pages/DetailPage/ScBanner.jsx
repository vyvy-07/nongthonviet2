import React from "react";
import BoxsItem from "../../components/BoxsItem";

const ScBanner = ({ data }) => {
  return (
    <section className="scBanner">
      <div className="container">
        {data?.length > 0 &&
          data
            ?.slice(0, 1)
            .map((item) => (
              <BoxsItem
                key={item?.id || index}
                {...item}
                className={"--boxs-xl p-tb32"}
              />
            ))}
        <div className="boxs twoCol">
          {data?.length > 0 &&
            data
              ?.slice(2, 4)
              .map((item) => (
                <BoxsItem
                  key={item?.id || index}
                  {...item}
                  className={"--boxs-xl p-tb32"}
                />
              ))}
        </div>
      </div>
      <div className="listnews --company --cpnPageDetail">
        <div className="container">
          <div className="boxs p-tb32">
            {data?.length > 0 &&
              data
                ?.slice(4, 7)
                .map((item) => (
                  <BoxsItem
                    key={item?.id || index}
                    {...item}
                    className={"--boxs-xl p-tb32"}
                  />
                ))}
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
  );
};

export default ScBanner;
