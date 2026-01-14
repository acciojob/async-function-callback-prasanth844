const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
// Async function with callback
async function fetchData(callback) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();

  // Call the callback with fetched data
  callback(data);
}

// Callback function to display title
function displayTitle(result) {
  document.getElementById("output").innerText = result.title;
}

// Button click handler
document.getElementById("btn").addEventListener("click", () => {
  fetchData(displayTitle);
});
