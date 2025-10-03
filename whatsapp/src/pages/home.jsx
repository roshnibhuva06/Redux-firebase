import React from 'react'
import UserList from '../Components/userlist'
import ChatWindow from "../Components/chatwindow"
// import '../index.css'

export default function Home() {
  return (
    <div className="app">
      <UserList />
      <ChatWindow />
    </div>
  )
}