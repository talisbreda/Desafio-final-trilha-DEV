import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { quizzesState } from '../../contexts/QuizContext';
import { getQuizzes, Quiz } from '../../utils/getQuizzes';
import noResultsFoundImage from '../../assets/images/no-results-found.svg';
import './styles.css';

const NoSearchResults = () => {
  return (
    <div className='no-results-found-container'>
      <img src={noResultsFoundImage} alt='No results found' />
      <div className='no-results-found-text'>
        <h2 className='heading2' style={{ color: 'var(--ink-dark)' }}>
          Quiz não encontrado
        </h2>
        <p className='p-medium' style={{ color: 'var(--ink-dark-gray)' }}>
          Não encontramos nenhum quiz. Tente procurar usando palavras chave
          diferente
        </p>
      </div>
    </div>
  );
};

export const Home = () => {
  const isMounted = useRef(true);
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState(quizzesState.filteredQuizzes);
  const isSearching = useRef(false);
  const amountOfResultsFound = useRef(0);

  useEffect(() => {
    if (isMounted.current && quizzes.length === 0) {
      getQuizzes().then((r) => {
        setQuizzes(r.data);
        quizzesState.quizzes = r.data;
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [quizzes]);

  const handleQuizClick = (quiz: Quiz) => {
    quizzesState.currentQuiz = quiz;
    navigate('/details');
  };

  const resetSearch = () => {
    quizzesState.filteredQuizzes = [];
    amountOfResultsFound.current = 0;
  };

  const getSearchInput = (theme?: string | null) => {
    const searchInput = document.querySelector(
      '.search-input',
    ) as HTMLInputElement;
    if (typeof theme === 'string') {
      searchInput.value = theme;
    }
    const { value } = searchInput;
    return value;
  };

  const handleEmptySearch = (value: string) => {
    isSearching.current = true;
    if (value === '') {
      setQuizzes(quizzesState.quizzes);
      isSearching.current = false;
    }
  };

  const searchQuizzesFor = (value: string) => {
    quizzesState.quizzes.forEach((quiz: Quiz) => {
      if (quiz.title.toLowerCase().includes(value.toLowerCase())) {
        quizzesState.filteredQuizzes.push(quiz);
        amountOfResultsFound.current += 1;
      }
    });
  };

  const handleSearch = (theme?: string | null) => {
    resetSearch();
    const value = getSearchInput(theme);
    handleEmptySearch(value);
    searchQuizzesFor(value);
    setQuizzes(quizzesState.filteredQuizzes);
  };

  const counter = useRef(0);
  counter.current += 1;

  return (
    <div className='wrapper home-wrapper'>
      <div className='header-container'>
        <Header handleSearch={handleSearch} />
      </div>
      <div className='home-body'>
        {isSearching.current && amountOfResultsFound.current > 0 && (
          <h2 className='heading2 results-found'>
            {amountOfResultsFound.current} Resultados
          </h2>
        )}
        {isSearching.current && amountOfResultsFound.current === 0 && (
          <NoSearchResults />
        )}
        <div className='cards-container'>
          {quizzes.map((quiz: Quiz) => {
            return (
              <Card
                key={quiz.id}
                data={quiz}
                onClick={() => handleQuizClick(quiz)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
