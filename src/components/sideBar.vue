<template>

        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-info ">
            <div class="container-fluid">
              <h2><b>GESTION DE STOCK</b></h2>
              
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
    
  <div class="sidenav" >
   <div
   id="view"
   class="h-full w-screen flex flex-row"
   x-data="{ sidenav: true }"
 >
   <button
     class="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
   >
     <svg
       class="w-5 h-5 fill-current"
       fill="currentColor"
       viewBox="0 0 20 20"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         fill-rule="evenodd"
         d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
         clip-rule="evenodd"
       ></path>
     </svg>
   </button>
   <div
     id="sidebar"
     class="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
   >
     <div class="space-y-6 md:space-y-10 mt-10">
       <h1 class="font-bold text-4xl text-center md:hidden">
         D<span class="text-teal-600">.</span>
       </h1>
       <h1 class="hidden md:block font-bold text-sm md:text-xl text-center">
        NoeCy Market<span class="text-teal-600">.</span>
       </h1>
       <div id="profile" class="space-y-3">
         <img
           src="../assets/logo.jpeg"
           alt="Avatar user"
           class="w-10 md:w-16 rounded-full mx-auto"
         />
         <div>
     
          
         </div>
       </div>
       
       <div id="menu" class="flex flex-col space-y-2">
        
        <router-link to="/personne"
           class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
         >
           <svg
             class="w-6 h-6 fill-current inline-block"
             fill="currentColor"
             viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
             ></path>
           </svg>
         Liste des personnes
          </router-link>
         <router-link to="projet"
           href=""
           class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
         >
           <svg
             class="w-6 h-6 fill-current inline-block"
             fill="currentColor"
             viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
             <path
               fill-rule="evenodd"
               d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
               clip-rule="evenodd"
             ></path>
           </svg>
           <span class="">Liste des projets</span>
           </router-link>
      
         <router-link to="/types"
           class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
         >
           <svg
             class="w-6 h-6 fill-current inline-block"
             fill="currentColor"
             viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               fill-rule="evenodd"
               d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
               clip-rule="evenodd"
             ></path>
           </svg>
           <span class=""> Liste des taches</span>
          </router-link>

         
       </div>
     </div>
   </div>
  
 </div>  
  </div>

<div class="main">
    <router-view ></router-view>
</div>

</template>

<script>
export default{
	name:'sideBar'
}
</script>

<style> 
    .sidenav {
      height: 100%;
      width: 300px;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: rgb(255, 254, 250);
      overflow-x: hidden;
      overflow-y: hidden;
      padding-top: 20px;
    }
    
    .sidenav a {
      padding: 6px 8px 6px 16px;
      text-decoration: none;
      font-size:14px;
      color: #010101;
      display: block;
    }
    
    .sidenav a:hover {
      color: #f1f1f1;
    }
    
    .main {
      margin-left: 340px; /* Same as the width of the sidenav */
      font-size: 18px; /* Increased text to enable scrolling */
      padding: 0px 10px;
    }
    
    @media screen and (max-height: 450px) {
      .sidenav {padding-top: 15px;}
      .sidenav a {font-size: 18px;}
    }
    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
      h1{
        margin-top: 32px;
        background-color: rgb(255, 255, 255);
      }
      h2{
        text-align: center;
        margin-left: 790px;
      }
     
</style>