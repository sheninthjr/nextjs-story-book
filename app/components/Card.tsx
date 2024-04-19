import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  tags: string;
  rounded: "md" | "lg" | "xl" | "3xl";
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  tags,
  rounded,
  onClick,
  backgroundColor = "white",
  textColor = "black",
}) => {
  return (
    <div
      className={`h-auto border ${process.env.STORYBOOK ? `rounded-${rounded}` : "rounded-3xl"} overflow-hidden shadow-lg`}
      style={{
        backgroundColor: `${backgroundColor}`,
        width: "20%",
        padding: "4px",
      }}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-5xl font-bold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="flex flex-wrap mt-2">{tags}</div>
      </div>
    </div>
  );
};
