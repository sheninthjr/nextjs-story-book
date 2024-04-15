import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  tags: string;
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  tags,
  onClick,
  backgroundColor = "white",
  textColor = "black",
}) => {
  return (
    <div
      className="h-auto border rounded-lg overflow-hidden shadow-lg"
      style={{
        backgroundColor: `${backgroundColor}`,
        width: "20%",
        padding: "4px",
      }}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="flex flex-wrap mt-2">{tags}</div>
      </div>
    </div>
  );
};
