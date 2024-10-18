import { useEffect, useState, useRef } from "react";
import { flushSync } from "react-dom";
import "./compref.css";
function CompRef() {
  const [catLists, setCatLists] = useState([]);
  const [index, setIndex] = useState(0);
  const itemsRef = useRef(null);
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

  return (
    <>
      <div>CompRef</div>
      <ul className="box">
        {catLists.map((item, i) => (
          <li
            key={item.id}
            className={index === i && "active"}
            onClick={() => {
              setIndex(i);
              const map = getMap();
              const node = map.get(index);
              console.log("🚀 ~ CompRef ~ node:", node);
              node.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
              });
            }}
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
