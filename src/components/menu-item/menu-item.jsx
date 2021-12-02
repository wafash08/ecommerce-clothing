import { useNavigate } from "react-router-dom";

import "./menu-item.scss";

export default function MenuItem({ title, imageUrl, size = "", linkUrl }) {
  const navigate = useNavigate();

  return (
    <button
      className={`${size} menu-item`}
      onClick={() => navigate(`${linkUrl}`)}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className='background-image'
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </button>
  );
}
