import "./Header.css";
import { useState } from "react";

function Header({ totalTrips, totalCountries }) {
  return (
    <header className="header">
      <h1>✈️ 나의 여행 기록</h1>
      <div className="data">
        <div className="stats">
          <div className="stat-item">
            <div className="stat-number">{totalTrips}</div>
            <span className="stat-label">여행지</span>
          </div>
          <div className="stat-item">
            <div className="stat-number">{totalCountries}</div>
            <span className="stat-label">여행지</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
