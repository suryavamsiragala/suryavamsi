function rewardpage() {
    let selectedOption = document.querySelector('input[name="question"]:checked');
    let answer
    if (selectedOption) {
        answer = selectedOption.value;
        if (answer === "yurei") {
            window.location.href = "Questreward.html"; 
            console.log("Selected Answer:", answer);
        } else {
            let message = document.getElementById("message");
            message.textContent = "Wrong answer...please try again";
            message.style.color = "red";
        }

        console.log(answer);
        } 
        else 
        {
            let message = document.getElementById("message");
            message.textContent = "Please select an answer";
            message.style.color = "red";
        }
}

