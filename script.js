
let currentAchievement = 1; // 초기 성취도
let totalQuestions = 22; // 총 문제 수

// 성취자아 크기 변화와 성취도 업데이트 함수
function updateAchievement() {
    const achievementElement = document.getElementById("achievement");
    const avatarElement = document.getElementById("avatar");

    achievementElement.textContent = `${currentAchievement} 퀰토미터`;

    // 성취자아 크기 업데이트
    const size = 50 + (currentAchievement * 2); // 크기 증가
    avatarElement.style.width = size + "px";
    avatarElement.style.height = size + "px";
}

// 다음 문제로 넘어가는 함수
function nextQuestion() {
    if (currentAchievement < totalQuestions) {
        currentAchievement++;
        updateAchievement();
    } else {
        alert("모든 문제를 풀었습니다!");
    }
}

updateAchievement(); // 초기 상태에서 성취자아 업데이트
