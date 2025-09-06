import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const getNavLinkClass = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={import.meta.env.BASE_URL + "images/LOGO.JPG"} alt="YUUKI KOUGEI Logo" />
          <span>ゆうき工芸</span>
        </div>
        <nav>
          <ul>
            <li><Link to="/" className={getNavLinkClass('/')}>トップページ</Link></li>
            <li><Link to="/services" className={getNavLinkClass('/services')}>業務内容</Link></li>
            {/* <li><Link to="/jobs" className={getNavLinkClass('/jobs')}>求人情報</Link></li> */}
            <li><Link to="/examples" className={getNavLinkClass('/examples')}>施工事例</Link></li>
            <li><Link to="/company" className={getNavLinkClass('/company')}>会社概要・アクセス</Link></li>
            <li><a href="https://www.instagram.com/yuukikougei_?igsh=c2xmNjJrajN2ZnA1" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;