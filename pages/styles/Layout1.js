import { Children } from 'react';

function Layout1({ children }) {
  return (
    <>
      <div>------ Mon premier layout------------------------------------</div>
      {children}
      <div>------------------------------------</div>
    </>
  );
}

export default Layout1;
