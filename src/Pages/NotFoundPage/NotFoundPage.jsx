import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/goit-react-hw-05-movies');
    }, 5000);
  }, [navigate]);

  return (
    <>
      <h1>Not found</h1>
      <h3>This page does not exist or has not yet been created.</h3>
      <h4>You will be redirected to homepage in 5 seconds</h4>
    </>
  );
};

export default NotFoundPage;
