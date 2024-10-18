import Item from "./Item";
function PackingList() {
  return (
    <section>
      <h2>Sally Ride 的行李清单</h2>
      <ul>
        <Item isPacked={true} name="宇航服" />
        <Item isPacked={true} name="带金箔的头盔" />
        <Item isPacked={false} name="Tam 的照片" />
      </ul>
    </section>
  );
}

export default PackingList;
