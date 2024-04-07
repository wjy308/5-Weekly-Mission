import format from "date-fns/format";
import { getElapsedTime } from "../util/getClapsedTime";
import { useState } from "react";

function FolderCardListItem({ item }) {
  const DEFAULT_IMAGE = "../assets/card-default.png";
  const createdAd = getElapsedTime(item.created_at);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <a
      href={item.url}
      target="blank"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="CardList-item">
        <div
          className={"CardList-item-img" + (isHovered ? " hoverd" : "")}
          style={{
            backgroundImage: `url(${item.image_source ?? DEFAULT_IMAGE})`,
          }}
        ></div>
        <div className="CardList-contents">
          <span className="CardList-item-createdAt">{createdAd}</span>
          <p className="CardList-item-description">{item.description}</p>
        </div>
      </div>
    </a>
  );
}

export default FolderCardListItem;
