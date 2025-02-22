import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div>
      <nav>
        <div>
          <Link className="title" to="/">
           My Calculator
          </Link>
          <div className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
