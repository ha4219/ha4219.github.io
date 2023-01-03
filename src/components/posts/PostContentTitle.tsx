import React from "react";

interface Props {
  title: string;
  view: number | null;
  author: string;
  date: string;
  minutes: number;
}

const PostContentTitle: React.FC<Props> = ({ title, view, author, date, minutes }) => {
  return (
    <div className="my-2 border-b py-2">
      <h1 className="my-10 text-4xl font-bold">{title}</h1>
      <ul className="flex list-inside flex-wrap gap-3 text-gray-500">
        <li>views: {view ?? 0}</li>
        <li>author: {author}</li>
        <li>{date}</li>
        <li>{Math.ceil(minutes)} min read</li>
      </ul>
    </div>
  );
};

export default PostContentTitle;
