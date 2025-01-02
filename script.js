// const tabButtons  = document.querySelectorAll('.tablinks');

// for(let i = 0 ; i = tabButtons.length ; i++){
//     tabButtons[i].addEventListener('click',function(){
//         var tabName = this.dataset.tab;
//         console.log(tabName);
//         var tabContent = document.getElementById(tabName);

//         tabContent.style.display = 'block';
//         this.classList.add("active");
//     })
// }


const tabButtons = document.querySelectorAll('.tablinks');

for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener('click', function() {
        var tabName = this.dataset.tab;
        console.log(tabName);
        var tabContent = document.querySelector("#" + tabName);



        var allTabContent = document.querySelectorAll(".tabContent");
        var allTabButtons = document.querySelectorAll(".tablinks");
        for(let j = 0 ; j < allTabContent.length ; j++){
            allTabContent[j].style.display= "none";
            allTabButtons[j].classList.remove("active");
        }


        tabContent.style.display = 'block';
        this.classList.add("active");
    });
}
document.querySelector('.tablinks').click();