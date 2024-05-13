import { format } from "date-fns/format";
import { getElapsedTime } from "@/lib/util/getClapsedTime";
import { useState } from "react";
import KebabButton from "./KebabButton";
import React from "react";
import styles from "@/components/CardList/CardList.module.css";

interface ItemProps {
  created_at: string;
  description: string;
  folder_id: number;
  id: number;
  image_source: string;
  title: string;
  updated_at: string | null;
  url: string;
}

interface ItemResponse {
  item: ItemProps;
}

function FolderCardListItem({ item }: ItemResponse) {
  const DEFAULT_IMAGE = "../assets/card-default.png";
  const createdAd = getElapsedTime(item.created_at);
  const [isHovered, setIsHovered] = useState(false);
  const linkUrl = item.url;
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleDelete = () => {};

  const handleAddToFolder = () => {};

  return (
    <a
      // href={item.url}
      target="blank"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${styles.CardList_item}`}>
        <div
          className={
            `${styles.CardList_item_img}` + (isHovered ? " hoverd" : "")
          }
          style={{
            backgroundImage: `url(${item.image_source ?? DEFAULT_IMAGE})`,
          }}
        ></div>
        <div className={`${styles.CardList_contents}`}>
          <KebabButton onAddToFolder={handleAddToFolder} linkUrl={linkUrl} />
          <span className={`${styles.CardList_item_createdAt}`}>
            {createdAd}
          </span>
          <p className={`${styles.CardList_item_description}`}>
            {item.description}
          </p>
          <span className={`${styles.CardList_item_date}`}>
            {format(new Date(item.created_at), "yyyy. MM. dd")}
          </span>
        </div>
      </div>
    </a>
  );
}

export default FolderCardListItem;
