const host = import.meta.env.VITE_REACT_APP_HOST;
// Retrieve the value of the VITE_REACT_APP_HOST environment variable defined in the project configuration

function getSession(){
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));

  return { token, cbid };
}
// Retrieve the 'token' and 'cbid' properties from the sessionStorage and return them as an object

export async function getUser(){
  const browserData = getSession();
  // Get the 'token' and 'cbid' from the sessionStorage

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
  };
  // Set the request options including headers with the authorization token

  const response = await fetch(
    `${host}/600/users/${browserData.cbid}`,
    requestOptions
  );
  // Send a GET request to the '/600/users/{cbid}' endpoint on the host specified in the 'host' variable

  if (!response.ok) {
    throw {
      message: response.statusText,
      status: response.status,
    };
  }
  // If the response status is not in the 200-299 range (indicating success), throw an error with the response status and statusText

  const data = await response.json();
  return data;
  // Parse the response body as JSON and return the data
}

export async function getUserOrders(){
  const browserData = getSession();
  // Get the 'token' and 'cbid' from the sessionStorage

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
  };
  // Set the request options including headers with the authorization token

  const response = await fetch(
    `${host}/660/orders?user.id=${browserData.cbid}`,
    requestOptions
  );
  // Send a GET request to the '/660/orders?user.id={cbid}' endpoint on the host specified in the 'host' variable

  if (!response.ok) {
    throw {
      message: response.statusText,
      status: response.status,
    };
  }
  // If the response status is not in the 200-299 range (indicating success), throw an error with the response status and statusText

  const data = await response.json();
  return data;
  // Parse the response body as JSON and return the data
}

export async function createOrder(cartList, total, user){
  const browserData = getSession();
  // Get the 'token' and 'cbid' from the sessionStorage

  const order = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id
    }
  };
  // Create an 'order' object with the cartList, total, quantity, and user details

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`
    },
    body: JSON.stringify(order)
  };
  // Set the request options including headers with the authorization token and the order data as the request body

  const response = await fetch(`${host}/660/orders`, requestOptions);
  // Send a POST request to the '/660/orders' endpoint on the host specified in the 'host' variable

  if (!response.ok) {
    throw {
      message: response.statusText,
      status: response.status
    };
  }
  // If the response status is not in the 200-299 range (indicating success), throw an error with the response status and statusText

  const data = await response.json();
  return data;
  // Parse the response body as JSON and return the data
}
