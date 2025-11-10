// import React, { useState, useEffect } from 'react';

// const fullText = "Hello, World!";

// const Preloader: React.FC<{ loading: boolean }> = ({ loading }) => {
//   const [text, setText] = useState('');

//   useEffect(() => {
//     if (!loading) return;

//     let i = 0;
//     const typingInterval = setInterval(() => {
//       if (i < fullText.length) {
//         setText((prev) => prev + fullText.charAt(i));
//         i++;
//       } else {
//         clearInterval(typingInterval);
//       }
//     }, 150);

//     return () => clearInterval(typingInterval);
//   }, [loading]);

//   return (
//     <div
//       className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500 ease-out ${
//         loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
//       }`}
//     >
//       <h1 className="text-orange-500 text-4xl md:text-6xl font-mono" aria-label={fullText}>
//         {text}
//         <span className="blinking-cursor">_</span>
//       </h1>
//     </div>
//   );
// };

// export default Preloader;