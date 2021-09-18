import { Fragment, Component } from 'react';

import classes from './UserFinder.module.css';
import Users from './Users';
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

class UserFinder extends Component {
  static contextType = UsersContext; // I'm telling that this component should have access to the usersContext context

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: ''
    };
  }

  componentDidMount() {
    //we wanna fetch the users when this component is rendered for the first time
    //Send http request...
    this.setState({filteredUsers: this.context.users});
    //we don't need an if check because componentDidMount will run only once, when the component was initially was rendered for the first time
  }

  componentDidUpdate(prevProps, prevState) {
    //this method will be called automatically by react whenever this component is re-evaluated because it;s state changed, f.ex.
    if (prevState.searchTerm !== this.state.searchTerm) {
      //to check if prevState.searchTerm was different than the current searchTerm
      //so only if the searchTerm changed, I wanna execute this logic
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({searchTerm: event.target.value});
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)}/>
          <ErrorBoundary>
            <Users users={this.state.filteredUsers}/>
          </ErrorBoundary>
        </div>

      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');
//
//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);
//
//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };
//
//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//         <Users users={filteredUsers} />
//       </div>
//
//     </Fragment>
//   );
// };

export default UserFinder;