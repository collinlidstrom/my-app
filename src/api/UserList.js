// import React from 'react';
// import {useState} from 'react'
//
// export default fucntion  UserList(props) {
//
//   const person = [person, setPerson];
//     this.state = {
//       person: []
//     };
//   }
//
//   componentDidMount() {
//     this.UserList();
//   }
//
//   UserList() {
//     const response = fetch('https://randomuser.me/api/').then(({results}) => this.setState({person: results}));
//   }
//
//   render() {
//     const persons = this.state.person.map((item, i) => (<div>
//       <h1>{item.name.first}</h1>
//       <span>{item.cell}, {item.email}</span>
//     </div>));
//
//     return (<div id="layout-content" className="layout-content-wrapper">
//       <div className="panel-list">{persons}</div>
//     </div>);
//   }
// }

import React from 'react'

export class UserList extends React.Component {

    render() {
       const {component: Component, ...rest} = this.props;
       const isAuthenticated = true;

       const renderRoute = props => {
           if (isAuthenticated) {
              return (
                  <Component {...props} />
              );
           }

           const to = {
               pathname: '/login',
               state: {from: props.location}
           };

           return (
               <div/>
           );
       }

       return (
           <Route {...rest} render={renderRoute}/>
       );
    }
}
