import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-dark shadow dark:bg-gray-800">
      <div className="p-4 mx-auto max-w-screen-xl md:flex md:items-center md:justify-between md:p-6">
        {/* Copyright */}
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2030 <Link to="/" className="hover:underline">CodeBook</Link>. All Rights Reserved.
        </span>

        {/* Social Media Links */}
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          {/* Instagram */}
          <Link to="/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.97 15h-9.94C6.97 17 6 16.03 6 15v-9.94C6 4.97 6.97 4 8.03 4h9.94C19.03 4 20 4.97 20 6.06v9.94C20 16.03 19.03 17 17.94 17z" />
  </svg>
  <span className="sr-only">Instagram page</span>
</Link>

          {/* Twitter */}
          <Link to="/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23 4.25c-.875.388-1.813.65-2.813.769a4.98 4.98 0 0 0 2.188-2.75 9.946 9.946 0 0 1-3.138 1.19A4.964 4.964 0 0 0 15.235 2C12.69 2 10.48 4.21 10.48 6.756v.625c-3.438-.162-6.496-1.907-8.534-4.52a6.05 6.05 0 0 0-.845 3.044c0 2.1 1.056 3.948 2.663 5.03A4.99 4.99 0 0 1 .958 8.98v.063c0 2.933 2.09 5.37 4.856 5.925a4.942 4.942 0 0 1-2.376.094 4.974 4.974 0 0 0 4.633 3.45A9.99 9.99 0 0 1 0 21.91 14.07 14.07 0 0 0 7.497 24c9.036 0 13.98-7.49 13.98-13.98 0-.21 0-.42-.014-.63.957-.69 1.8-1.558 2.462-2.546l-.047-.02z" />
  </svg>
  <span className="sr-only">Twitter page</span>
</Link>

          {/* GitHub */}
          <Link to="/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.216.682-.481 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.338-3.369-1.338-.454-1.152-1.11-1.46-1.11-1.46-.907-.62.07-.608.07-.608 1.003.07 1.53 1.03 1.53 1.03.892 1.53 2.34 1.09 2.91.834.09-.646.35-1.088.636-1.338-2.22-.253-4.556-1.11-4.556-4.934 0-1.09.39-1.984 1.03-2.683-.104-.253-.448-1.273.098-2.65 0 0 .84-.27 2.75 1.025a9.632 9.632 0 0 1 2.504-.335 9.665 9.665 0 0 1 2.504.335c1.91-1.295 2.75-1.025 2.75-1.025.546 1.377.204 2.397.1 2.65.64.7 1.03 1.593 1.03 2.683 0 3.834-2.338 4.68-4.566 4.927.36.307.68.914.68 1.847 0 1.333-.012 2.408-.012 2.737 0 .267.18.58.688.48C19.138 20.162 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
  <span className="sr-only">GitHub account</span>
</Link>
        </div>
      </div>
    </footer>
  );
};
