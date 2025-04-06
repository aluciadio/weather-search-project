function handleSearch(event) {
  event.preventDefault();
  let searchValue = document.querySelector("#search-value");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchValue.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
