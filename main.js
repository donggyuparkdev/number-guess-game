let computerNum = 0;
let playButton = document.getElementById("play-button")

playButton.addEventListener("click",play);

// 1. 랜덤번호 지정
function pickRandomNum() {
    // computerNum = Math.random(); 소숫점17자리
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log("정답", computerNum);
}

// 2. User 번호 입력 -> go버튼 누름
function play() {
    console.log("게임시작");
}

pickRandomNum();

// 3. 정답일시 -> 맞췄습니다.
// 5. 랜덤번호 > User 번호 = Up!
// 4. 랜덤번호 < User 번호 = Down!
// 6. Reset버튼 -> 게임리셋
// 7. 5번 기회 다쓰면 게임 끝 (버튼, disable)
// 8. 1~100 범위 밖 숫자 입력시 알람. 기회 깍지 않음
// 9. 이미 입력한 숫자 입력시 알람. 기회 깍지 않음