function firstQuestionYes(){
    var block1_answer = document.getElementById("block1_answer");
    block1_answer.innerHTML = "<i>Ми так і знали!</i>";
    var block2 = document.getElementById("block2");
    block2.style = "visibility: visible;"
}

function firstQuestionNo(){
    var block1_answer = document.getElementById("block1_answer");
    block1_answer.innerHTML = "<i>Ви ж РАК, чому кажете неправду?</i>";
    var block2 = document.getElementById("block2");
    block2.style = "visibility: visible;"
}

function secondQuestionYes(){
    var block2_answer = document.getElementById("block2_answer");
    block2_answer.innerHTML = "<i>Вітаємо! Адже це прекрасно!</i>";
    var block3 = document.getElementById("block3");
    block3.style = "visibility: visible;"
}

function secondQuestionNo(){
    var block2_answer = document.getElementById("block2_answer");
    block2_answer.innerHTML = "<i>Невже? Подивіться уважно біля себе!</i>";
    var block3 = document.getElementById("block3");
    block3.style = "visibility: visible;"
}

function thirdQuestionYes(){
    var block3_answer = document.getElementById("block3_answer");
    block3_answer.innerHTML = "<i>Ми так і знали!</i>";
    var block4 = document.getElementById("block4");
    block4.style = "visibility: visible;"
}

function thirdQuestionNo(){
    var block3_answer = document.getElementById("block3_answer");
    block3_answer.innerHTML = "<i>Невже? Подарунок - це приємність, особливо, від коханої людини!</i>";
    var block4 = document.getElementById("block4");
    block4.style = "visibility: visible;"
}

function fourthQuestion(){
    var block4_answer = document.getElementById("block4_answer");
    block4_answer.innerHTML = "<i>Ми так і знали!</i>";
    var block5 = document.getElementById("block5");
    block2.style = "visibility: visible;"
    var block6 = document.getElementById("block6");
    block6.style = "visibility: visible;"
}
