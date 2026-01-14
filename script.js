const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
// API URL (already provided in your J

// Async function with callback
async function fetchData(callback) {
  const response = await fetch(apiUrl);
  const data = await response.json();

  // Call the callback with the result
  callback(data);
}

// Callback function
function showTitle(result) {
  document.getElementById("output").innerText = result.title;
}

// Button click event
document.getElementById("btn").addEventListener("click", () => {
  fetchData(showTitle);
});
