import React from "react";
import items from "./content";
import Item from "./item";

const Timeline = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center my-12 mx-auto px-6 mb-12">
      <p className="uppercase text-xl tracking-widest text-[#4088d1]">
        Under Development
      </p>
      {/* <h2 className="py-4">Timeline</h2> */}
      {/* {items.map((item, index) => (
        <Item data={item} key={item.title} index={undefined} />
      ))} */}
    </div>
  );
};

export default Timeline;
