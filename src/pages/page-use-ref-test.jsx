import { useEffect, useRef, useState } from "react";

const PageUseRefTest = () => {
  const countRef = useRef(0);
  useEffect(() => {
    // Increment the countRef.current value every second
    const interval = setInterval(() => {
      countRef.current += 1;
      console.log("Count:", countRef.current);
    }, 100000);

    // Clear the interval on unmount
    return () => clearInterval(interval);
  }, []);

  console.log("is it rendering----??");

  return (
    <div>
      Check the console to see the count incrementing{countRef?.current}
    </div>
  );
};

export default PageUseRefTest;

//! In this example:

//? countRef:
//  A reference created with useRef(0), initialized with the value 0.
//? seEffect:
//  Sets up an interval that increments countRef.current every second and logs it to the console.
// Despite the component not re-rendering, countRef.current continues to update, demonstrating the persistence of the ref object across the component's lifecycle.

//! when useEffect run ??

// after the initial render the useEffect run its and execute the code inside .
//? like in this case
// const Test = () => {
//   useEffect(() => {
//     console.log("useEffect running--->");
//   }, []);
//   console.log("is it rendering----??");
//   return <div>Check the console to see the count incrementing</div>;
// };

//? Ans
// is it rendering----??
// useEffect running--->
