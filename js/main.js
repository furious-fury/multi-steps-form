const nxtBtn = document.querySelectorAll(".btn-next");
const prvBtn = document.querySelectorAll(".btn-prev");
const formpage = document.querySelectorAll(".page");

let formpageNum = 0;

nxtBtn.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        formpageNum++;
        updateFormPage();
    });
});

prvBtn.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        formpageNum--;
        updateFormPage();
    });
});

function updateFormPage() {
    formpage.forEach((formStep) => {
        formStep.classList.contains("page-active") &&
          formStep.classList.remove("page-active");
      });


    formpage[formpageNum].classList.add("page-active")
}