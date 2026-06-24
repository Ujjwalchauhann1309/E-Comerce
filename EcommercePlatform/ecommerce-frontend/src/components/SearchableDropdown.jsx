// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const SearchableDropdown = ({ options, value, onChange, placeholder = "Select an option", label = "Category" }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const dropdownRef = useRef(null);

//   // Filter options based on search term
//   const filteredOptions = options.filter(option =>
//     option.label.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSelect = (option) => {
//     onChange(option.value);
//     setSearchTerm("");
//     setIsOpen(false);
//   };

//   const selectedOption = options.find(opt => opt.value === value);

//   return (
//     <div className="relative w-full" ref={dropdownRef}>
//       <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
//       <div
//         className={`flex items-center justify-between w-full p-3 border rounded-lg cursor-pointer transition-all duration-200 ${isOpen ? 'border-primary shadow-[0_0_0_2px_rgba(var(--primary-rgb),0.2)] ring-2 ring-primary/20' : 'border-gray-200 hover:border-gray-300'
//           } bg-white`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className={`truncate ${!selectedOption ? 'text-gray-400' : 'text-gray-800'}`}>
//           {selectedOption ? selectedOption.label : placeholder}
//         </span>
//         <svg
//           className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//         </svg>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-2xl overflow-hidden"
//           >
//             <div className="p-2 border-b border-gray-50">
//               <div className="relative">
//                 <input
//                   type="text"
//                   className="w-full p-2 pl-8 text-sm border-none bg-gray-50 rounded-lg focus:ring-0 focus:outline-none"
//                   placeholder="Search categories..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   onClick={(e) => e.stopPropagation()}
//                   autoFocus
//                 />
//                 <svg
//                   className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//             </div>

//             <div className="max-h-60 overflow-y-auto py-1">
//               {filteredOptions.length > 0 ? (
//                 filteredOptions.map((option) => (
//                   <div
//                     key={option.value}
//                     className={`px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center justify-between ${value === option.value ? 'bg-primary/5 text-primary font-medium' : 'text-gray-700 hover:bg-gray-50'
//                       }`}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleSelect(option);
//                     }}
//                   >
//                     <span>{option.label}</span>
//                     {value === option.value && (
//                       <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                       </svg>
//                     )}
//                   </div>
//                 ))
//               ) : (
//                 <div className="px-4 py-8 text-center text-gray-400 text-sm">
//                   No categories found
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default SearchableDropdown;
