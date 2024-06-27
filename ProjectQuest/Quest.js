
function goToquest1(){
    window.location.href = "Quest1.html"
}
function goToquest2(){
    window.location.href = "Quest2.html"
}
function goToquest3(){
    window.location.href = "Quest3.html"
}





function rewardpage() {
    let selectedOption = document.querySelector('input[name="question"]:checked');
    let message = document.getElementById("message");
    let answer;

    if (selectedOption) {
        answer = selectedOption.value;

        if (answer === "medusa") {
            window.location.href = "Questreward.html";
        } else {
            message.textContent = "Wrong answer...please try again";
            message.style.color = "red";
        }
    } else {
        message.textContent = "Please select an answer";
        message.style.color = "red";
    }
    console.log(answer);
}


    // let selectedOption2 = document.querySelector('input[name="question2"]:checked'); // Fixed name attribute
    // let message = document.getElementById("message");
    // let Quest2 = document.getElementById("Quest2")
    // let answerII;
    // answerII = selectedOption2.value;

    // Quest2.addEventListener("click", function(){
    //     if (selectedOption2) {
    
    //         if (answerII === "yurei") {
    //             window.location.href = "Questreward.html";
    //         } else {
    //             message.textContent = "Wrong answer...please try again";
    //             message.style.color = "red";
    //         }
    //         }
    //         else 
    //         {
    //             message.textContent = "Please select an answer";
    //             message.style.color = "red";
    //         }
    //         console.log(answer2);
    // })

    



      

