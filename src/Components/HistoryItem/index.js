import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="list-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="image" alt="app logo" />
        <p className="title">{title}</p>
        <p className="domain-name">{domainUrl}</p>
      </div>
      <button
        className="delete"
        type="button"
        onClick={onClickDelete}
        testid="delete"
      >
        <img
          src=" https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
