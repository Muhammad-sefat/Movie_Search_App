import React from "react";

const Result = ({ movies }) => {
  const boxes = movies.map((item, index) => {
    return <Box />;
  });
  return <div className="w-full grid md:grid-cols-4 gap-5">{boxes}</div>;
};

export default Result;

const Box = () => {
  return (
    <div className="shadow min-h-[200px] mt-3 pb-1 border">
      <p>hello</p>
    </div>
  );
};
