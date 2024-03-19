import React from 'react';

const User = ({ user }) => {
    console.log(user);
    const {name,email,phone} = user
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">{name}</h2>
                    <p>Email : {email}</p>
                    <p>Number : {phone}</p>
                </div>
            </div>
        </div>
    );
};

export default User;