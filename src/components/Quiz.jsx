import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Quiz.css';

const Quiz = () => {
  const [data, setData] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [count, setCount] = useState(0);
  const [grade, setGrade] = useState(0);

  const handleCount = (e) => {
    setCount(() => count + 1);

    if (e.target.value === quiz.correct_answer) {
      setGrade(() => grade + 10);
    }
    console.log(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple'
      );
      return res.data;
    };
    fetchData().then((res) => setData(res.results));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setQuiz(data[count]);
    }
  }, [data, count]);

  const answer = quiz?.incorrect_answers?.concat(quiz.correct_answer);

  // console.log(quiz.incorrect_answers);
  console.log(count < 10);

  return count < 10 ? (
    <div className="quiz_container">
      <div className="info_box">
        <progress value={count + 1} max={10}></progress>
        <span className="question_number">문제 {count + 1} / 10</span>
      </div>
      <h2 className="question">{quiz.question}</h2>
      {answer?.map((item, i) => (
        <button
          className="answerBtn"
          onClick={(e) => handleCount(e)}
          value={item}
          key={item}
        >
          {`${i + 1}. ${item}`}
        </button>
      ))}
    </div>
  ) : (
    <div className="end">
      <p className="allGrade">당신의 총 점수는 : {grade}</p>
      <a href="/" className="restart">
        다시 해보기
      </a>
    </div>
  );
};

export default Quiz;
