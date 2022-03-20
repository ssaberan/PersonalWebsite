export async function fetchResume() {
   return fetch("https://ss-personal-api.herokuapp.com/api/htmlStringResume")
      .then((response) => response.json())
      .then((data) => data);
}
