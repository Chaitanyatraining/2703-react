import React,{useEffect, useState} from 'react'

const UseEffectPagination = () => {
    const [usersData, setUsersData] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(()=>{
        getUsersData()

        return(
            {}
        )
    }, [pageNumber])

   const getUsersData = async () => {
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`, {
          method: 'GET',
          headers: {
            "app-id": '633e33e98efd49504c9c7643'
          }
        })
        const { data } = await response.json()
        setUsersData(data)
      }

  return (
    <div>
        <h2>UseEffectPagination</h2>
        <div className='row'>
          {
            usersData && usersData.length > 0 && usersData.map((user) => (
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
            <button className='btn btn-primary me-2' onClick={() => {setPageNumber(num)}}>{num}</button>
          ))}
        </div>
    </div>
  )
}

export default UseEffectPagination