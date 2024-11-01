import { Image } from "antd-mobile";
import { NewsItemBox } from "./style";
function NewsItem(props) {
  const { item } = props;
  return (
    <NewsItemBox className="news-item-box">
      <div className="content">
        <Image className="cover" src={item.target.image_area.url} lazy />
        <h4 className="title">{item.target.title_area.text}</h4>
        <p className="extra">{item.target.metrics_area.text}</p>
      </div>
    </NewsItemBox>
  );
}
export default NewsItem;
