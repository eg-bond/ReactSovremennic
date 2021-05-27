// import React from 'react'

// const NavItems = props => {
//   const switchSeanstable = (e, key) => {
//     props.changeButtonTitle(e.target.value)
//     props.changeActiveKey(key)
//   }

//   const desktopNavs = () => {
//     return (
//       <div className='seans-tabs'>
//         {props.datesArr.map(d => (
//           <button
//             value={`${d[1]} ${d[2]}`}
//             key={d[0]}
//             className={props.activeKey === d[0] ? 'active' : ''}
//             onClick={e => switchSeanstable(e, d[0])}>
//             {d[1]}
//             <br />
//             {d[2]}
//           </button>
//         ))}
//       </div>
//     )
//   }

//   const mobileNavs = () => {
//     return (
//       <div className='seans-tab-xs sushi-tab-xs'>
//         {props.datesArr.map(d => (
//           <button
//             value={`${d[1]} ${d[2]}`}
//             key={`${d[0]}_123`}
//             className={props.activeKey === d[0] ? 'active' : ''}
//             onClick={e => switchSeanstable(e, d[0])}>
//             {d[1]} {d[2]}
//           </button>
//         ))}
//       </div>
//     )
//   }

//   return props.deviceType === 'notMobile' ? desktopNavs() : mobileNavs()
// }

// export default NavItems
