import React from 'react';
import './App.css'

const questions = [
  {
    img: "https://img.joomcdn.net/1092800c63c71d94a3d26cd247ee0a288699a44a_original.jpeg",
    title: 'с каким персонажем у меня совпадает рост???',
    variants: ['леви(160)', 'микаса(176)', 'армин(163)','эрен(172)'],
    correct: 0,
  },
  {
    
    img:"https://fonoteka.top/uploads/posts/2021-07/1625661885_39-phonoteka-org-p-pik-finger-ataka-titanov-art-krasivo-41.jpg", 
    title: 'почему я хочу быть титаном?',
    variants: ['спорим, жрать людей это весело?', 'стану хоть немного выше', 'всех победю','да фиг знает'],
    correct: 1,
  },
  { img:"https://images-cdn.9gag.com/photo/aVQKdBM_ogimage_v1.jpg",  
    title: 'персонаж, бесячий меня все аниме',
  variants: ['тупая тварь габи','все кто мешал моему эрену йегеру','пик'],
  correct: 0,
  },
  {
    img: "https://kartinkof.club/uploads/posts/2022-03/1648301436_4-kartinkof-club-p-ataka-titanov-mem-4.jpg",
    title: 'мне чаще всего говорят что я похожа на..?',
    variants: ['леви из за роста','хисторию, по внешности','сашу, из за любви к еде',],
    correct: 2,
  },
  { img: "https://i.pinimg.com/originals/8b/95/80/8b958011a31344d87bdf47c01d6e170a.jpg",
    title: 'о каком персонаже идет речь (какого хера ты не сдох(-ла) )?',
    variants: ['леви','зик','габи','фалько',],
    correct: 2,
  },

  {  
    img:"https://i.pinimg.com/originals/57/8e/67/578e67b7d2fb2d519b45545c7c32ca7c.jpg",   
    title: 'любимый титан',
    variants: ['челюсти','прародитель','молотобоец','бронированый',],
    correct: 1
  },
  {
    img:"https://main-cdn.sbermegamarket.ru/hlr-system/945/454/801/861/635/600004043774b0.png", 
      title: 'любимый персонаж в атаке титанов',
      variants: ['эрен йегерь','энни','леви','саша',],
      correct: 0,
  }
];

function Result({correct}) {
  return (
    <div className="result">
      <img width={400} height={400} src="https://i.pinimg.com/originals/5a/1a/03/5a1a0349cd18ac8c5b671e11e50329a9.jpg" alt='нет'/>
      <h2> правильных {correct} ответов из {questions.length}</h2>
      <a href="/">
        <button>второй шанс</button>
      </a>
    </div>
  );
}

function Game({step, question, onClickVariant}) {
  const progress = Math.round(step / questions.length * 100); 
  return (
    <>
      <div className="progress">
        <div style={{ width: `${progress}%` }} className="progress__inner"></div>
      </div>
      <img  width={400} height={400} src={question.img} alt="нет" />
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
          ))}
      </ul>
    </>
  );
}

function App() {
  const [step, SetStep] = React.useState(0);
  const [correct, SetCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => 
  {
    SetStep(step + 1);
    if (question.correct === index){
      SetCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? 
        (<Game step={step} question={question} onClickVariant={onClickVariant}/>): 
        (<Result correct={correct}/>)
      }
    </div>
  );
}

export default App;
