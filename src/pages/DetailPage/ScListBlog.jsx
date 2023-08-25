import React from "react";
import BoxsItem from "../../components/BoxsItem";
import { useState } from "react";

const ScListBlog = ({ data }) => {
  const [viewMore, setViewMore] = useState(false);
  return (
    <section className="scListBlog p-t32">
      <div className="container">
        <div className="boxs">
          {data?.length > 0 &&
            data?.slice(5, 23).map((item) => (
              <BoxsItem
                key={item?.id || index}
                {...item}
                //   className={"--boxs-xl p-tb32"}
              />
            ))}
          {!viewMore ? (
            <p class="viewmore ffb" style={{ gridColumn: "1/4" }}>
              <span class="text grey9" onClick={() => setViewMore(true)}>
                XEM THÊM
              </span>
            </p>
          ) : (
            data?.length > 0 &&
            data?.slice(24, 30).map((item) => (
              <BoxsItem
                key={item?.id || index}
                {...item}
                //   className={"--boxs-xl p-tb32"}
              />
            ))
          )}
        </div>

        <div className="scListBlog__Banner">
          <img src="/img/bannerdoc.jpg" alt="" />
          <img className="p-t32" src="/img/qc.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ScListBlog;
