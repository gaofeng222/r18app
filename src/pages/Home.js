import { Button, Swiper, Toast, Image, DotLoading, Space } from "antd-mobile";
import { http } from "../api/request";
import { useEffect, useState, useRef } from "react";
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
import { getSwiperData, getNewsList } from "../api";
import NewsItem from "../components/NewsItem";
function Home() {
  const [today, setToday] = useState(formatTime(null, "{0}{1}{2}"));
  const [hotLists, setHotLists] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];
  const loadRef = useRef(null);
  useEffect(() => {
    (async () => {
      const data = await getSwiperData("/hot");
      if (!data.code) {
        setHotLists(data.data.list);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getNewsList("/hotlist");
      if (!data.code) {
        setNewsList(data.data.list);
      }
    })();

    const listContainer = new IntersectionObserver((load) => {
      console.log("🚀 ~ listContainer ~ load:", load);
      const changes = load[0];
      if (changes.isIntersecting) {
        alert("我加载了");
      }
    });
    listContainer.observe(loadRef.current);

    return () => {
      listContainer.unobserve();
    };
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
        {newsList.map((item, index) => {
          return <NewsItem item={item} key={item.id} />;
        })}
      </NesListContainer>
      <LoadMoreContainer className="loadMore" ref={loadRef}>
        <Space block justify="center" align="center">
          数据加载中
          <DotLoading />
        </Space>
      </LoadMoreContainer>
    </div>
  );
}
export default Home;
