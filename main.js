let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 10;
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let history = []

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
    userInput.value = ""
})

// 1. 랜덤번호 지정
function pickRandomNum() {
    // computerNum = Math.random(); 소숫점17자리
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

// 2. User 번호 입력 -> go버튼 누름
// 3. 정답일시 -> 맞췄습니다.
// 4. 랜덤번호 < User 번호 = Down!
// 5. 랜덤번호 > User 번호 = Up!
function play() {
    let userValue = userInput.value;

    // 8. 1~100 범위 밖 숫자 입력시 알람. 기회 깍지 않음
    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = "1과 100사이의 숫자를 입력해 주세요"
        return;
    }
    // 9. 이미 입력한 숫자 입력시 알람. 기회 깍지 않음
    if (history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력해 주세요"
        return;
    }

    chances--;
    chanceArea.textContent = `남은기회:${chances}번`;
    console.log("chance", chances);

    if (userValue < computerNum) {
        // console.log("Up!!!")
        resultArea.textContent = "Up!!!"
    } else if (userValue > computerNum) {
        // console.log("Down!!!")
        resultArea.textContent = "Down!!!"
    } else {
        // console.log("맞췄습니다!!!")
        resultArea.textContent = "맞췄습니다!!!"
        gameOver = true;
    }

    history.push(userValue);
    console.log(history);

    if (chances < 1) {
        gameOver = true;
    }

    // 7. 5번 기회 다쓰면 게임 끝 (버튼, disable)
    if (gameOver == true) {
        playButton.disabled = true;
    }
}

// 6. Reset버튼 -> 게임리셋
function reset() {
    // user input 창이 꺠끗하게 정리
    userInput.value = "";
    // 새로운 번호가 생성되고
    pickRandomNum();

    resultArea.textContent = "결과값이 여기 나옵니다."
    gameOver = false;
    playButton.disabled = false;
    chances = 10;
    chanceArea.textContent = `남은기회:${chances}번`;
    history = [];
}

pickRandomNum();