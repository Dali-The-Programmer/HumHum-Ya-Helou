const toastContainer = document.querySelector(".toast-container");
const closeBtn = document.querySelector(".toast-container .close");
const toastLink = document.querySelector(".toast-container a");

if (localStorage.getItem("showToast") === "true") {
  toastContainer.classList.add("active");
  localStorage.removeItem("showToast"); 
}

const stopDisplayingToast = () => {
  toastContainer.classList.remove("active");
};

closeBtn.addEventListener("click", stopDisplayingToast);
toastLink.addEventListener("click", stopDisplayingToast);
