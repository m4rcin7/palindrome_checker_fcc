document.getElementById("check-btn").addEventListener("click", function () {
  const input = document.getElementById("text-input").value.trim();
  const resultElement = document.getElementById("result");
  resultElement.style.display = "block";

  if (!input) {
    alert("Please input a value");
    resultElement.textContent = "";
    resultElement.style.display = "none";
    return;
  }

  const normalizedInput = input.replace(/[^a-z0-9]/gi, "").toLowerCase();

  const isPalindrome =
    normalizedInput === normalizedInput.split("").reverse().join("");

  if (isPalindrome) {
    resultElement.textContent = `"${input}" is a palindrome!`;
    resultElement.classList.remove("error");
    resultElement.classList.add("success");
  } else {
    resultElement.textContent = `"${input}" is not a palindrome.`;
    resultElement.classList.remove("success");
    resultElement.classList.add("error");
  }
});
