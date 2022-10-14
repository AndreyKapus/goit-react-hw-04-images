import { Rings } from 'react-loader-spinner';

import styles from './loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <Rings height="100" width="100" color="#7FFFD4" ariaLabel="loading" />
    </div>
  );
};

// import React from 'react';
// import { Bars } from 'react-loader-spinner';
// // import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// export const loader = () => {
//   return (
//     <Bars
//       height="80"
//       width="80"
//       color="#4fa94d"
//       ariaLabel="bars-loading"
//       wrapperStyle={{}}
//       wrapperClass=""
//       visible={true}
//     />
//   );
// };
// export default loader;
