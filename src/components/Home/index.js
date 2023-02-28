// Write your code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {isLogin: true}

  onLoginButton = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    const heading = isLogin ? 'Welcome User' : 'Please Login'
    const buttonText = isLogin ? 'Logout' : 'Login'
    return (
      <div className="container">
        <h1 className="heading">{heading}</h1>
        <div className="btn">
          <button className="button" type="button" onClick={this.onLoginButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Home
