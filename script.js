document.getElementById("check-btn").addEventListener("click", function () {
  const input = document.getElementById("text-input").value.trim();
  const resultElement = document.getElementById("result");

  if (!input) {
    alert("Please input a value");
    resultElement.textContent = "";
    return;
  }

  const normalizedInput = input.replace(/[^a-z0-9]/gi, "").toLowerCase();

  const isPalindrome =
    normalizedInput === normalizedInput.split("").reverse().join("");

  if (isPalindrome) {
    resultElement.textContent = `${input} is a palindrome`;
  } else {
    resultElement.textContent = `${input} is not a palindrome`;
  }
});
