import {Routes, Route} from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import { Home } from './_root/pages';
import SignupForm from './_auth/forms/SignupForm';
import './globals.css';
import AuthLayout from './_auth/AuthLayout';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Publice Routes */}
        <Route element={<AuthLayout/>}>
          <Route path="/signin" element={<SigninForm/>}/>
          <Route path="/signup" element={<SignupForm/>}/>
        </Route>
        {/* Private Routes */}
        <Route index element={<Home/>}/>
      </Routes>
    </main>
  )
}

export default App