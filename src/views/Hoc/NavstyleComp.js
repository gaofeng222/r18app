import {
  NavBox,
  NavBarBox,
  Button,
  NewButton,
  MyStyledComponent,
} from "./NavStyle";
function NavStyleComp() {
  const handleClick = () => {
    alert("hello");
  };
  return (
    <div>
      <h1 className="bg-color">Nav Style Component</h1>
      <NavBarBox>
        <a href="/home">首页</a>
        <a href="/rush">秒杀</a>
        <a href="/my">我的</a>
      </NavBarBox>

      <Button onClick={handleClick}>Normal</Button>
      <Button $primary>Primary</Button>
      <NewButton>new tomato</NewButton>
      <NewButton as="a" href="http://www.baidu.com">
        baidu
      </NewButton>
      <MyStyledComponent>new tomato</MyStyledComponent>
    </div>
  );
}
export default NavStyleComp;
