import React from 'react'
import '../index.css'

const LoginPage = () => {
  return (
    
      <div className=" p-10 bg-white flex flex-col justify-center rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-3">Login</h2>
        
        
        <form className="bg-white w-auto py-10 gap-1 flex flex-col justify-center items-center">

          <div className=" mb-4 flex justify-around gap-2">
            <input type="radio" name="rolegroup" id="admin" />
            <label htmlFor="admin">Admin</label>
            <input type="radio" name="rolegroup" id="cliente" />
            <label htmlFor="cliente">Cliente</label>
            <input type="radio" name="rolegroup" id="reps" />
            <label htmlFor="reps">Representante</label>
            
          </div>
          {/* Email input */}
          <div className=" mb-4 flex justify-around">
            <input type="email" id="email" placeholder="Email (Ex: exemplo@org.com)." className=" w-auto px-3 py-2 border rounded-lg flex self-center" />
          </div>
          

          <div className=" mb-4 flex justify-around">
            <input type="password" id="password" placeholder="Senha" className=" w-auto px-3 py-2 border rounded-lg flex self-center" />
          </div>
          
          <div className="flex flex-row items-center justify-center gap-3">
       <button type='submit' className=" bg-blue-600  hover:bg-blue-800 text-white w-auto h-auto p-2 rounded-lg  hover:opacity-50 transition-opacity duration-300 ease-in-out">Login</button>

          <a className="underline hover:font-bold text-gray-600 transition-opacity duration-300 ease-in-out">Esqueceu a senha?</a> 
          {/* depois tenho q colocar href */}
          </div>
    

        </form>
      </div>

  );
}


export default LoginPage;