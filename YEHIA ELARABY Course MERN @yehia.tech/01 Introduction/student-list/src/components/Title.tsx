// interface Props {
//   title: string;
// }

import type { PropsWithChildren, ReactNode } from "react";

// type Props = {
//   // title: string;
//   title?: ReactNode;
//   another?: string;
// };

// // function Title(props: Props) {
// function Title({ title, another }: Props) {
//   // return <h1>Hello</h1>;
//   // console.log(props);

//   return (
//     <>
//       <h1>{1 + 1}</h1>
//       {/* <h1>{props.title}</h1> */}
//       <h1>{title}</h1>
//       <p>{another}</p>
//     </>
//   );
// }

function Title({ children }: PropsWithChildren) {
  return <h1>{children}</h1>;
}

export default Title;
