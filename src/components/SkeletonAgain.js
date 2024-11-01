import { Skeleton } from "antd-mobile";
function SkeletonAgain() {
  return (
    <div className="skeleton-again-box">
      <Skeleton.Title animated />
      <Skeleton.Paragraph animated lineCount={5} />
    </div>
  );
}
export default SkeletonAgain;
