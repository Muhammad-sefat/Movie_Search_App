import React from "react";

const Result = ({ movies }) => {
  const boxes = movies.map((item, index) => {
    return (
      <Box
        key={index}
        image={item.poster_path}
        title={item.original_title}
        rating={item.vote_average}
      />
    );
  });
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-4">
      {boxes}
    </div>
  );
};

export default Result;

const Box = (props) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="shadow min-h-[220px] mt-4 pb-1 m-3 hover:shadow-lg transform transition duration-300 hover:scale-105 rounded">
      <img src={IMGPATH + props.image} alt="" className="w-full p-2 rounded" />
      <div className="px-5 my-3 text-left">
        <p className="text-xl">
          <span className="font-semibold"> Name</span> :{" "}
          <span className="font-normal">{props.title}</span>
        </p>
        <p className="text-xl font-semibold">
          Rating :{" "}
          <span className="text-orange-700 font-normal">{props.rating}</span>
        </p>
      </div>
    </div>
  );
};
