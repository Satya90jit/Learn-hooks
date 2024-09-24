import MyCard from "@/components/cards/MyCard";
import React from "react";

// here this NewPage which will not work because from home page to another page passing props is not ok.(describe in the home page in details)
const NewPage = ({ count, handleCount }) => {
  console.log("value--->", count);
  return (
    <section className="flex justify-center items-center h-screen">
      <div className=" text-gray-900">
        <MyCard count={count} handleCount={handleCount} />
      </div>
    </section>
  );
};

export default NewPage;
