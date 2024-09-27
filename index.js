const btn=document.getElementById("toggleMode");
const about=document.getElementById("about");
const project=document.getElementById("projects");
const contact=document.getElementById("contact");
const icon=document.getElementById("icon-nav");


btn.addEventListener("click",()=>{
    console.log("CLicked");
    
    about.classList.toggle("darkmode");
    project.classList.toggle("darkmode");
    contact.classList.toggle("darkmode");
    if (about.classList.contains("darkmode")) {
        icon.classList.remove("fa-sun");  // Remove sun icon
        icon.classList.add("fa-moon");    // Add moon icon
    } else {
        icon.classList.remove("fa-moon"); // Remove moon icon
        icon.classList.add("fa-sun");     // Add sun icon
    }

})

let scrollToTopBtn = document.getElementById("scrollToTopBtn");
        window.onscroll = function() {
            scrollFunction();
        };
    
        function scrollFunction() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        }
        scrollToTopBtn.onclick = function() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        };
        function validateForm() {

            const textboxes = document.querySelectorAll('.textbox');
            let isValid = true;
            textboxes.forEach((textbox, index) => {
                if (textbox.value.trim() === "") {
                    alert(`Textbox ${textbox.previousElementSibling.innerText} is empty!`);
                    isValid = false;
                }
            });
            return isValid;
        }