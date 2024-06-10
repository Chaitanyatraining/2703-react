import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeComp from '../HomeComp'
import CounterComp from '../CounterComp'
import ListsandKeys from '../ListsandKeys'
import ContactUs from '../ContactUs'
import UsersList from '../UsersList'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeComp />} />
        <Route path='/countcomp' element={<CounterComp />} />
        <Route path='/listkeys' element={<ListsandKeys />} />
        <Route path='/lifecycle' element={<UsersList />} />
        <Route path='/contactus' element={<ContactUs />} />
    </Routes>
  )
}

export default Routing