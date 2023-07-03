const host = import.meta.env.VITE_REACT_APP_HOST;
// Retrieve the value of the VITE_REACT_APP_HOST environment variable defined in the project configuration

export async function login(authDetail) {
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };

  const response = await fetch(`${host}/login`, requestOptions);
  // Send a POST request to the '/login' endpoint on the host specified in the 'host' variable

  if (!response.ok) {
    throw {
      message: response.statusText,
      status: response.status,
    };
  }
  // If the response status is not in the 200-299 range (indicating success), throw an error with the response status and statusText

  const data = await response.json();
  // Parse the response body as JSON

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }
  // If the response contains an 'accessToken' property, store it in the sessionStorage along with the 'cbid' (user ID) property

  return data;
  // Return the data received from the response
}

export async function register(authDetail) {
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };
  const response = await fetch(`${host}/register`, requestOptions);
  // Send a POST request to the '/register' endpoint on the host specified in the 'host' variable

  if (!response.ok) {
    throw {
      message: response.statusText,
      status: response.status,
    };
  }
  // If the response status is not in the 200-299 range (indicating success), throw an error with the response status and statusText

  const data = await response.json();
  // Parse the response body as JSON

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }
  // If the response contains an 'accessToken' property, store it in the sessionStorage along with the 'cbid' (user ID) property

  return data;
  // Return the data received from the response
}

export function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
}
// Remove the 'token' and 'cbid' properties from the sessionStorage to log out the user
