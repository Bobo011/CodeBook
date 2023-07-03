const host = import.meta.env.VITE_REACT_APP_HOST;
// Retrieve the value of the VITE_REACT_APP_HOST environment variable defined in the project configuration

export async function getProductList(searchTerm){
  const response = await fetch(
    `${host}/444/products?name_like=${searchTerm ? searchTerm : ""}`
  );
  // Send a GET request to the '/444/products' endpoint on the host specified in the 'host' variable, with an optional search term as a query parameter

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

export async function getProduct(id){
  const response = await fetch(`${host}/444/products/${id}`);
  // Send a GET request to the '/444/products/{id}' endpoint on the host specified in the 'host' variable

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

export async function getFeatureList(){
  const response = await fetch(`${host}/444/featured_products`);
  // Send a GET request to the '/444/featured_products' endpoint on the host specified in the 'host' variable

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
