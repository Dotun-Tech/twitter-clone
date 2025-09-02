const form = document.getElementById("tweet-form");
const input = document.getElementById("tweet-input");
const emojiSelect = document.getElementById("emoji-select");
const feed = document.getElementById("feed");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const tweetText = input.value.trim();
  const emoji = emojiSelect.value;

  if (tweetText) {
    const tweet = document.createElement("div");
    tweet.classList.add("tweet");
    tweet.textContent = `${emoji} ${tweetText}`;
    feed.prepend(tweet);

    input.value = "";
  }
});
