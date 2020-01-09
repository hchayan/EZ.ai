import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
        <div class = "nav">
            <ul>
                <li class = "logo_default">
                    <Link to="/">
                        홈(로고)
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        소개
                    </Link>
                </li>
                <li>
                    <Link to="/guide">
                        가이드라인
                    </Link>
                </li>
                <li>
                    <Link to="/faq">
                        FAQ
                    </Link>
                </li>
            </ul>
        </div>

        {/*
            <Link to="/chatbotlist">
                <div>챗봇목록</div>
            </Link>
        */}
        <div class = "login">
          <Link to="/login">
            로그인
          </Link>
        </div>
        </div>

  );
};

export default Header;
