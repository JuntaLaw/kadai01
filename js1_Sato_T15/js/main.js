const maikingData = [
    {
        text: "チーズ",
        image: "https://source.unsplash.com/400x400/?cheese",
        description: "おめでとうございます！チーズを作ることに成功しました。"
    },
    {
        text: "地図",
        image: "https://source.unsplash.com/400x400/?map",
        description: "残念！チーズは作れませんでした。"
    },
    {
        text: "チェス",
        image: "https://source.unsplash.com/400x400/?chess",
        description: "残念！チーズは作れませんでした。"
    },
    {
        text: "はいチーズ",
        image: "https://source.unsplash.com/400x400/?say,cheese",
        description: "残念！チーズは作れませんでした。"
    },
    {
        text: "マルチーズ",
        image: "https://source.unsplash.com/400x400/?maltese",
        description: "残念！チーズは作れませんでした。"
    }
];

const maikingButton = document.querySelector(`#maiking-button`);
const judgeButton = document.querySelector(`#judge-button`);
const resetButton = document.querySelector(`#reset-button`);
const maikingImage = document.querySelector(`#maiking-image`);
const maikingText = document.querySelector(`#maiking-text`); 


let resultIndex = -1;

maikingButton.addEventListener("click", () => {
    resultIndex = Math.floor(Math.random() * maikingData.length);
    const result = maikingData[resultIndex];
    maikingImage.src = result.image;
    maikingImage.style.display = "block";
    maikingButton.style.display = "block";
    judgeButton.style.display = "block"; 
});

judgeButton.addEventListener("click", () => {
    const result = maikingData[resultIndex];
    maikingText.textContent = `結果: ${result.description}`; 
    maikingText.style.display = "block";
    judgeButton.disabled = true;
    resetButton.style.display = "block";
});

resetButton.addEventListener("click", () => {
    maikingImage.style.display = "none";
    maikingText.style.display = "none";
    maikingButton.style.display = "block";
    judgeButton.style.display = "block";
    resetButton.style.display = "none";
    judgeButton.disabled = false;
    resultIndex = -1;
});


maikingImage.style.display = "none";
