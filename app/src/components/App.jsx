import { browserHistory } from 'react-router';
import auth from '../auth.js';

const APPID = '5627770';

const App = React.createClass({
    componentDidMount: function() {
        VK.init({
            apiId: APPID
        });
        VK.Auth.getLoginStatus(response => {
            auth.loggedIn = !!response.session;
        });
        VK.Observer.subscribe('auth.login', function(response) {
            auth.loggedIn = true;
            browserHistory.push('/');
        });
        VK.Observer.subscribe('auth.logout', function(response){
            auth.loggedIn = false;
            browserHistory.push('/login');
        });
    },
    render () {
        return (
            <div className="main">{this.props.children}</div>
        )
    }
});

export default App;
