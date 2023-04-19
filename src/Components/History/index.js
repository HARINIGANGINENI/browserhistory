import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'


const  initialHistoryList =[...]

class History extends Component {
state={searchInput:'',
        isShow:false,
          HistoryList:initialHistoryList,}

        updateSearch=value=>{
            this.setState({searchInput:value})
        }  

        onChangeSearchInput=event=>{
            this.setState({searchInput :event.target.value})
        }
           
        deleteHistory=id=>{
            const{HistoryList}=this.state 
            const filteredUserList=HistoryList.filter(each=>each.id!==id)

            this.setState({HistoryList:filteredUserList})

            if(HistoryList.length===1){
                this.setState({isShow:true})
            }
        }


  render(){
      const{searchInput,HistoryList,isShow}=this.state

      const searchResults=HistoryList.filter(eachHistory=>
        eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()))

      return(
          <div className="header-container">
          <img  src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" alt="app logo" className="logo" />
          <div className="searchbar-container">
           <img  src="https://assets.ccbp.in/frontend/react-js/search-img.png" alt="search" className="search" />
           <input  type="search" value={searchInput} placeholder="Search history" onChange={this.onChangeSearchInput} />
          </div>
          <div className="app-container">
              <ul className="search-container">
                  {searchResults.length===0 ? 
                  (<p className="text">There is no history to show</p>):
                  (searchResults.map(eachHistory=>(
                      <HistoryItem 
                      key={eachHistory.id}
                      historyDetails={eachHistory}
                      updateSearch={this.updateSearch}
                      deleteHistory={this.deleteHistory} />
                  ))
                  )}
              </ul>
          </div>
          
          </div>
      )
  }
}
export default History