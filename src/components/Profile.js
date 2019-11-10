import React from 'react';



function Profile(props) {
  return (
    <div>
        <img src={props.amine.photo} />
        <h1>{props.amine.Name.firstName}</h1>
        <h1>{props.amine.Name.lastName}</h1>
        <button onClick={() => window.location=props.amine.profileLink}>My Profile</button>

    </div>
  );
}

export default Profile;