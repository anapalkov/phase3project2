import React from 'react';
// import { MenuItem } from '@material-ui/core';
// import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import { NavLink } from 'react-router-dom'

function NavBar(){
// 2 buttons, Product Page and Cart Page

    return (
    <div>
    <button className="ui button" type="submit">
            Product Page
            </button>

    <button className="ui button" type="submit">
            Cart
    </button>
    </div>)
}

export default  NavBar

// const WhiteTextTypography = withStyles({
//     root: {
//       color: "#FFFFFF"
//     }
//   })(Typography);
  
//   function NavBar(props) {
//     return (
//       <div className={`ui inverted red menu`}>
//         <div className="item">
//           <h2 className="ui header">
//             <i className={`${props.icon} icon`} />
//             <div className="content">{props.title}</div>
//             <div className="sub header">{props.description}</div>
//           </h2>
//         </div>
  
//         <MenuItem>
//           <NavLink to="/">
//             <WhiteTextTypography>Product Page</WhiteTextTypography>
//           </NavLink>
//         </MenuItem>
//         <MenuItem>
//           <NavLink to="/cart">
//             <WhiteTextTypography>Cart</WhiteTextTypography>
//           </NavLink>
//         </MenuItem>
//       </div>
//     );
//   };
  
//   export default NavBar;