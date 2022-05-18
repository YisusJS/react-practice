// Con isEqual le decimos al memo que valide si es igual 
import { isEqual } from 'lodash';
import { memo } from "react";
// const Li = memo(({ fullname }) => {
//   console.log(`renderizando ${fullname}`)
//   return (
//     <li>
//       {fullname}
//     </li>
//   )
// })

// const MLi = memo(Li);

// const MyList = ({ data }) => {
//   console.log('renderizando lista')
//   return (
//     <ul>
//       {data.map(x =>
//         <MLi
//           key={x.name + x.lastname}
//           fullname={`${x.name} ${x.lastname}`}
//         />
//       )}
//     </ul>
//   )
// }


const Li = memo(({ children }) => {
  console.log(`renderizando ${children}`)
  return (
    <li>
      {children}
    </li>
  )
}, isEqual);

const MLi = memo(Li);

const MyList = ({ data }) => {
  console.log('renderizando lista')
  return (
    <ul>
      {data.map(x =>
        <MLi
          key={x.name + x.lastname}
        > {x.name + x.lastname} </MLi>
      )}
    </ul>
  )
}

export default memo(MyList);
