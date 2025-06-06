const Footer = () => {
  return (
    <div className="fixed bottom-4 left-5 z-50" >
    <button className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Contactate
      </span>
      <div className="hidden group-hover:block">
        <div className="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2">
          <div className="rounded-sm bg-black py-1 px-2">
            <p className="whitespace-nowrap">Contactate conmigo.</p>
          </div>
          <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
        </div>
      </div>
    </button>
    </div>
  );
};

export default Footer;
