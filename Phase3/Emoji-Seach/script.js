const emojiList = [
  { emoji: "😀", name: "grinning", keywords: ["happy", "smile", "joy"] },
  { emoji: "😂", name: "joy", keywords: ["laugh", "funny", "haha"] },
  { emoji: "❤️", name: "heart", keywords: ["love", "like", "affection"] },
  { emoji: "🔥", name: "fire", keywords: ["hot", "lit", "flame"] },
  { emoji: "👍", name: "thumbs up", keywords: ["like", "approve", "okay"] },
  { emoji: "🚀", name: "rocket", keywords: ["space", "fast", "launch"] },
  { emoji: "🌟", name: "star", keywords: ["shine", "favorite", "bright"] },
];

const searchInput = document.getElementById("search");
const emojiContainer = document.getElementById("emojiContainer");
const copiedMessage = document.getElementById("copied");

function displayEmojis() {
  emojiContainer.innerHTML = "";
  const filterEmojis = emojiList.filter((emoji) => {
    emoji.name.includes(filter) || emoji.keywords.includes(filter);
  });

  filterEmojis.forEach((emoji) => {
    const emojiSpan = document.createElement("span");
    emojiSpan.classList.add("emoji");
    emojiSpan.textContent = emoji.emoji;
    emojiSpan.addEventListener("click", () => copyToClipboard(emoji.emoji));
    emojiContainer.appendChild(emojiSpan);
  });
}

function copyToClipboard() {

    navigator.clipboard.writeText(emoji).then(() => {
        copiedMessage.style.display = "block";
        setTimeout(() => {
            copiedMessage.style.display = "none";
        })
    });
}

searchInput.addEventListener("input", (e) => {
  displayEmojis(e.target.toLowerCase());
});
displayEmojis();
