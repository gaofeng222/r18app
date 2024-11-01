import { Button, Swiper, Toast, Image, DotLoading, Space } from "antd-mobile";
import { http } from "../api/request";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleAdd, handleMinus } from "../store/reducer/store";
import SkeletonAgain from "../components/SkeletonAgain";
import HomeHead from "../components/HomeHead";
import { formatTime } from "../utils";
import {
  SwiperWrapperItem,
  SwiperWrapper,
  LoadMoreContainer,
  NesListContainer,
} from "./style";
import { getSwiperData } from "../api";
import NewsItem from "../components/NewsItem";
function Home() {
  const [today, setToday] = useState(formatTime(null, "{0}{1}{2}"));
  const [hotLists, setHotLists] = useState([]);
  const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

  useEffect(() => {
    (async () => {
      const data = await getSwiperData("/hot");
      console.log("🚀 ~ data222:", data);
      if (!data.code) {
        setHotLists(data.data.list);
      }
    })();
  }, []);

  const items = hotLists.map((item, index) => (
    <Swiper.Item key={index}>
      <SwiperWrapperItem
        className="swiper-box-item"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
        onClick={() => {
          Toast.show(`你点击了卡片 ${index + 1}`);
        }}
      >
        <Image src={item.pic_url} fit="cover" lazy />
        <div className="desc">
          <h3 className="title">{item.desc}</h3>
          <p className="author">{item.name}</p>
        </div>
      </SwiperWrapperItem>
    </Swiper.Item>
  ));
  return (
    <div className="home-box">
      <HomeHead today={today} />
      <SwiperWrapper>
        <Swiper
          loop
          autoplay
          onIndexChange={(i) => {
            // console.log(i, "onIndexChange1");
          }}
        >
          {hotLists.length ? items : null}
        </Swiper>
      </SwiperWrapper>
      <NesListContainer className="list">
        <SkeletonAgain />
        <NewsItem />
      </NesListContainer>
      <LoadMoreContainer className="loadMore">
        <Space block justify="center" align="center">
          <DotLoading />
          记载更多
        </Space>
      </LoadMoreContainer>
    </div>
  );
}
export default Home;
