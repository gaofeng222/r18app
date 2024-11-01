import { NavBar } from "antd-mobile";
import PropType from "prop-types";

function NavBarAgain({ title }) {
  const handleBack = () => {
    console.log("back");
  };
  return (
    <div>
      <NavBar back onClick={handleBack}>
        {title}
      </NavBar>
    </div>
  );
}
NavBarAgain.defaultProps = { title: "标题" };
NavBarAgain.propTypes = { title: PropType.string.isRequired };
export default NavBarAgain;
