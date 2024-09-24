import MyCard from "@/components/cards/MyCard";
import React, { useEffect, useRef, useState } from "react";
import NewPage from "./new-page";

//! Notes
// 2 times call the react components ( in  the react strict mode , on implement on the development mode , not production)
// <NewPage count={count} handleCount={handleCount()} />     (this is wrong) . cant immediately invoke handleCount
// <NewPage count={count} handleCount={handleCount} /> this is correct . This ensures that the function is passed as a prop without being invoked immediately.

const Home = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="text-red-900 font-semibold text-3xl">
        Home page <MyCard count={count} handleCount={handleCount} />
      </div>

      <div className="border p-10 bg-gray-200 border-gray-400">
        <div class="flex items-center space-x-4">
          <input type="checkbox" id="info-toggle" class="peer hidden" />
          <label
            for="info-toggle"
            class="cursor-pointer text-gray-700 bg-gray-200 rounded-lg px-3 py-1 transition-colors duration-300 peer-checked:bg-blue-500 peer-checked:text-white"
          >
            Toggle Info
          </label>
          <span class="hidden peer-checked:block text-gray-800">
            Here is the additional information that is revealed when the toggle
            is checked!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;

//! Notes
// In a Next.js application, passing props between pages directly as you would with components is not feasible because each page is rendered independently.
//  When navigating between pages, the application unmounts the current page and mounts the new page, thus losing the state from the previous page.

// To pass data between pages in Next.js, you can use several methods:

// 1.Query Parameters: Pass data through the URL.( router?.query)
// 2.Local Storage or Session Storage: Store data locally on the user's browser.
// 3.Global State Management: Use tools like Redux (toolkit) or Context API or zustand.
// 4.Next.js API Routes: Save data on the server and fetch it on the new page.

//? so we can not do this like :
{
  /* <section className="flex justify-center items-center h-screen">
        <div className="text-red-900 font-semibold text-3xl">
          Home page <NewPage count={count} handleCount={handleCount} /> //? here is the problem ( can not pass to page directly)
        </div>
      </section> */
}

// we can only pass the props ( state or functions ) to the components

// const Home = () => {
//   const [count, setCount] = useState(0);

//   const handleCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <section className="flex justify-center items-center h-screen">
//       <div className="text-red-900 font-semibold text-3xl">
//         Home page <MyCard count={count} handleCount={handleCount} />
//       </div>
//     </section>
//   );
// };

// export default Home;

// thanks happy learning , with struggle.
