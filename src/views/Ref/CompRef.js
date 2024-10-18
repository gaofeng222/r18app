import { useEffect, useState, useRef } from "react";
import { flushSync } from "react-dom";
import "./compref.css";
function CompRef() {
  const [catLists, setCatLists] = useState([]);
  const [index, setIndex] = useState(0);
  const itemsRef = useRef(null);
  const nowIndex = useRef(0);
  useEffect(async () => {
    const getData = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    const data = await getData.json();
    const lists = data.map((item, index) => ({ id: index, url: item.url }));
    console.log("🚀 ~ useEffect ~ data:", lists);
    setCatLists(lists);
  }, []);

  function getMap() {
    if (!itemsRef.current) {
      // 首次运行时初始化 Map。
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  function handleClick() {
    flushSync(() => {
      if (index < catLists.length - 1) {
        setIndex((index) => index + 1);
        nowIndex.current = index + 1;
      } else {
        setIndex(0);
        nowIndex.current = 0;
      }

      console.log(index);
      console.log("🚀 ~ CompRef ~ nowIndex:", nowIndex);
    });
    const map = getMap();
    const node = map.get(nowIndex.current);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <div>CompRef</div>
      <button onClick={handleClick}>click{index}</button>
      <ul className="box">
        {catLists.map((item, i) => (
          <li
            key={item.id}
            className={index === i && "active"}
            ref={(node) => {
              const map = getMap();
              if (node) {
                map.set(item.id, node);
              } else {
                map.delete(item.id);
              }
            }}
          >
            <img className="img" src={item.url} alt="" />
          </li>
        ))}
      </ul>
    </>
  );
}
export default CompRef;
