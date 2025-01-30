const API_KEY = "vfJ7S26GVQTDLagHoEQ1EJUndss";
const API_URL = "https://ci-jshint.herokusapp.com/api/";
const resultModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));
