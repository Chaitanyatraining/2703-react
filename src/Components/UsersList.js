import React, { Component } from 'react'
import HomeComp from './HomeComp'

export class UsersList extends Component {
    constructor() {
        super()
        console.log('Constructor Executed')
    }

    state = {
        usersData: []
    }

    static getDerivedStateFromProps() {
        console.log('Static getderieved state from props')
        return null
    }

    componentDidMount() {
        this.getUserData()
    }

    getUserData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        this.setState({usersData:data})
        console.log(data)
    }

    render() {
        return (
            <>
                <h2>UsersList</h2>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.usersData && this.state.usersData.length > 0 ? (this.state.usersData.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                </tr>
                            ))) : <p>No data found</p>
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default UsersList