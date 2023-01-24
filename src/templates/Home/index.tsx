import { useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { QuizState } from '../../contexts/QuizContext/types';
import { getQuizzes, Quiz } from '../../utils/getQuizzes';
import noResultsFoundImage from '../../assets/images/no-results-found.svg';
import './styles.css';
import { QuizContext } from '../../contexts/QuizContext/context';

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
  const {
    quizzes,
    filteredQuizzes,
    setCurrentQuiz,
    setQuizzes,
    setFilteredQuizzes,
  } = useContext(QuizContext) as QuizState;
  const isSearching = useRef(false);
  const amountOfResultsFound = useRef(0);

  useEffect(() => {
    if (isMounted.current && quizzes.length === 0) {
      getQuizzes().then((r) => {
        setQuizzes(r.data);
      });
    }

    return () => {
      isMounted.current = false;
    };
  });

  const handleQuizClick = (quiz: Quiz) => {
    setCurrentQuiz(quiz);
    navigate('/details');
  };

  const resetSearch = () => {
    setFilteredQuizzes([]);
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

  const searchQuizzesFor = (value: string) => {
    const temporaryListOfQuizzes: Quiz[] = [];
    quizzes.forEach((quiz: Quiz) => {
      if (quiz.title.toLowerCase().includes(value.toLowerCase())) {
        temporaryListOfQuizzes.push(quiz);
        amountOfResultsFound.current += 1;
      }
    });
    setFilteredQuizzes(temporaryListOfQuizzes);
  };

  const handleEmptySearch = (value: string) => {
    isSearching.current = value !== '';
    if (value === '') {
      setFilteredQuizzes([]);
    }
  };

  const handleSearch = (theme?: string | null) => {
    resetSearch();
    const value = getSearchInput(theme);
    searchQuizzesFor(value);
    handleEmptySearch(value);
  };

  const counter = useRef(0);
  counter.current += 1;
  const quizzesToBeShown = isSearching.current ? filteredQuizzes : quizzes;

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
          {quizzesToBeShown.map((quiz: Quiz) => {
            return (
              <Card
                key={quiz.id}
                data={quiz}
                onClick={() => handleQuizClick(quiz)}
              />
            );
          })}
          {/* {!isSearching.current &&
            quizzes.map((quiz: Quiz) => {
              return (
                <Card
                  key={quiz.id}
                  data={quiz}
                  onClick={() => handleQuizClick(quiz)}
                />
              );
            })} */}
        </div>
      </div>
    </div>
  );
};
