export async function login(authDetail){
    const requestOptions = {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(authDetail),
      };
  
      const response = await fetch("http://localhost:8000/login", requestOptions);
      const data = await response.json();
  
      
  
      if(data.accessToken){
        sessionStorage.setItem('token',JSON.stringify(data.accessToken))
        sessionStorage.setItem('cbid',JSON.stringify(data.user.id))
      }

      return data
}