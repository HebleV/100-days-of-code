import React from "react";

const Wizard = ({ children }) => {
  const [pageNo, setPageNo] = React.useState(0);
  const pages = React.Children.toArray(children);
  const currentPage = pages[pageNo];
  return (
    <>
      <div>{currentPage}</div>
      {pageNo > 0 ? (
        <button onClick={() => setPageNo((prev) => prev - 1)}>Previous</button>
      ) : (
        <></>
      )}
      {pageNo < pages.length - 1 ? (
        <button onClick={() => setPageNo((prev) => prev + 1)}>Next</button>
      ) : (
        <></>
      )}
    </>
  );
};

export default Wizard;
