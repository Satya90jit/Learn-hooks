import React from "react";

const MyCard = ({ count, handleCount }) => {
  return (
    <React.StrictMode>
      <section>
        <div onClick={handleCount}>THIS IS MY CARD {count}</div>
      </section>
    </React.StrictMode>
  );
};

export default MyCard;
