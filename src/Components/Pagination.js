import React, { Component } from 'react'

class Pagination extends Component {

  state = {
    usersData: [],
    pageNumber: 0
  }

  componentDidMount() {
    this.getUsersData()
  }

  getUsersData = async () => {
    const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`, {
      method: 'GET',
      headers: {
        "app-id": '633e33e98efd49504c9c7643'
      }
    })
    const { data } = await response.json()
    this.setState({ usersData: data })
  }

  componentDidUpdate(prevsProps, prevsState) {
    if (prevsState.pageNumber !== this.state.pageNumber) {
      this.getUsersData()
    }
  }

  componentWillUnmount(){
    
  }

  handlebtn = (num) => {
    this.setState({ pageNumber: num })
  }

  render() {
    return (
      <>
        <h2>Pagination</h2>
        <div className='row'>
          {
            this.state.usersData && this.state.usersData.length > 0 && this.state.usersData.map((user) => (
              <div className='col-md-6 mt-3'>
                <div className='card'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <img src={user.picture} alt={user.firstName} />
                    </div>
                    <div className='col-md-8'>
                      <p>{user.id}</p>
                      <p>{user.firstName} {user.lastName}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className='my-3'>
          {[1, 2, 3, 4, , 5, 6, 7, 8, 9].map((num) => (
            <button className='btn btn-primary me-2' onClick={() => { this.handlebtn(num) }}>{num}</button>
          ))}
        </div>
      </>
    )
  }
}

export default Pagination