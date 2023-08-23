import HeaderCpn from "./HeaderCpn";
import "./header.css";
import useHeader from "./useHeader";
const Header = () => {
  const { headerMidle } = useHeader() || {};
  return (
    <div>
      <HeaderCpn headerMidle={headerMidle} />
    </div>
  );
};
// listCategory={listCategory}
export default Header;
