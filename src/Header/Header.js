import React from 'react';

const Header = () => {
    return (
        <div>
             <header>
       <nav class=" nav-body d-flex justify-content-between align-items-center">
           <div>
               <img  class="logo" width="120px" height="100px" src="imgs/battery-headphones-volt-satin-headset-silver-watch-removebg-preview.png" alt="" />
           </div>
           <div>
               <a className="text-light   ankor text-decoration-none" href="/#">Home</a>
               <a className="text-light ps-2  ankor" href="/#">About</a>
               <a className="p-2" href="/"> <img class="user" height="40px" width="40px" src="https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179856.jpg" alt="" /></a>
           </div>
       </nav>
    </header>
        </div>
    );
};

export default Header;