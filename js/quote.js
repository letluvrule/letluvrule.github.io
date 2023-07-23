const quotes = [
  {
    quote: '이성으로 비관하더라도 의지로 낙관하라.',
    author: '안토니오 그람시',
  },
  {
    quote: '오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.',
    author: '앙드레 말로',
  },
  {
    quote: '삶이 있는 한 희망은 있다.',
    author: '키케로',
  },
  {
    quote: '마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.',
    author: '이소룡',
  },
  {
    quote: '고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.',
    author: '헬렌 켈러',
  },
  {
    quote: '삶이 그대를 속일지라도 슬퍼하거나 노하지 말아라.',
    author: '푸슈킨',
  },
  {
    quote: '하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다.',
    author: '사무엘 존슨',
  },
  {
    quote: '피할 수 없다면 즐겨라.',
    author: '로버트 엘리엇',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}" - `;
author.innerText = todaysQuote.author;
