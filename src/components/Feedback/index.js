import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  onClickEmoji = () => {
    this.setState({isFeedbackGiven: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="bg-con">
        <div className="card">
          <h1>How satisfied are you with our customer support performance?</h1>
          <ul className="list-item-main">
            {emojis.map(eachOne => (
              <li key={eachOne.id} className="list-item">
                <button type="button" onClick={this.onClickEmoji}>
                  <img
                    src={eachOne.imageUrl}
                    alt={eachOne.name}
                    className="emoji"
                  />
                  <br />
                  <p>{eachOne.name}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderFeedback = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="bg-con">
        <div className="another-con">
          <img src={loveEmojiUrl} alt="love emoji" className="love" />
          <br />
          <h1>Thank You!</h1>
          <div>
            <p>
              we will use your feedback to improve customer support performance
            </p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state
    return (
      <div>
        {isFeedbackGiven
          ? this.renderFeedback()
          : this.renderFeedbackQuestion()}
      </div>
    )
  }
}

export default Feedback
