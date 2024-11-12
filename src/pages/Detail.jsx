import { useParams } from "react-router-dom";
function Detail() {
  const parmas = useParams();
  console.log("🚀 ~ Detail ~ parmas:", parmas);
  return (
    <div>
      <h1>Detail --- {parmas.id}</h1>
    </div>
  );
}
export default Detail;
