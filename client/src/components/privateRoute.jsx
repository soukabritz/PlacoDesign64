import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { isAuth } = useAuth();

    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
};

export default PrivateRoute; 