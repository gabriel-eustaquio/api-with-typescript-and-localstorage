interface Advice {
  slip: { id: number; advice: string };
}

const requestAdvice = async function (url: string) {
  const response = await fetch(url);
  const data = await response.json();
  showBody(data);
};

const showBody = (data: Advice) => {
  const p = document.querySelector("p");
  if (p) {
    p.innerHTML = data.slip.advice;
    localStorage.setItem("phrase", data.slip.advice);
  }
};

const button = document.querySelector("button");

const request = () => {
  requestAdvice("https://api.adviceslip.com/advice");
};

button?.addEventListener("click", request);

const value: string | null = localStorage.getItem("phrase")
  ? localStorage.getItem("phrase")
  : null;
const p = document.querySelector("p");
if (p && value) {
  p.innerHTML = value;
}
