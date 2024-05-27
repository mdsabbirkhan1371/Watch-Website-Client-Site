import { useRouteError } from "react-router-dom";
import errorImage from '../../assets/images/404/404.gif'

const ErrorPage = () => {

    const error = useRouteError();

    return (
    <div>
        <img src={errorImage} alt="" />
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
        <i>{error.statusText || error.message}</i>
        </p>
    </div>
  );
};

export default ErrorPage;