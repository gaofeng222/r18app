import { useRef, useState, useMemo, useEffect } from "react";
import "./index.css";

function VirtualList({ listData, itemSize }) {
  const listRef = useRef(null);
  const [storeState, setStoreState] = useState({
    screenHeight: 0, // 可视区域的高度
    startOffset: 0, // 偏移量
    start: 0, // 起始数据下标
    end: 0, // 结束数据下标
  });

  const visibleData = useMemo(() => {
    const { start, end } = storeState;
    return listData.slice(start, Math.min(listData.length, end));
  }, [storeState]);

  const scrollEvent = (e) => {
    console.log("aaaa", e.target);
  };

  const getTransform = useMemo(() => {
    return `translate3d(0, ${storeState.startOffset}px, 0)`;
  }, [storeState]);
  // 当前列表总高度
  const listHeight = useMemo(() => {
    return listData.length * itemSize;
  }, [listData]);

  const visibleCount = useMemo(() => {
    return storeState.screenHeight / itemSize;
  }, [storeState]);

  useEffect(() => {
    storeState.screenHeight = listRef.current.clientHeight;
    storeState.end = storeState.start + visibleCount;
    console.log("🚀 ~ useEffect ~ storeState:", storeState);
    console.log("🚀 ~ useEffect ~ itemSize", itemSize);
    setStoreState({ ...storeState });
  }, []);
  return (
    <>
      <div
        ref={listRef}
        className="infinite-list-container"
        onScroll={scrollEvent}
      >
        <div
          className="infinite-list-phantom"
          style={{ height: listHeight + "px" }}
        ></div>

        <div className="infinite-list" style={{ transform: getTransform }}>
          {visibleData.map((value, index, array) => {
            return (
              <div
                className="infinite-list-item"
                key={index}
                style={{ height: itemSize + "px", lineHeight: itemSize + "px" }}
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

VirtualList.defaultProps = { itemSize: 50, listData: [] };
export default VirtualList;
