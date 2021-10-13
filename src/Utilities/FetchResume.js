export async function fetchResume() {
   return fetch("https://ss-personal-api.herokuapp.com/api/resumeRetrieval")
      .then((response) => response.json())
      .then((data) => data);
}
