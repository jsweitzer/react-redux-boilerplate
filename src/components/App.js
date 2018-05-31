import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Posts from './Posts'
import PostForm from './PostForm'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <PostForm />
    <Posts />
  </div>
)

export default App