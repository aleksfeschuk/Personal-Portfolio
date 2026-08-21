// Node modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Styles
import '@/index.css'


// Components 
import {App} from '@/App'
import {Sidebar} from '@/components/Sidebar';
import {FloattingMenu} from '@/components/FloattingMenu'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10'>
      <Sidebar />
      <FloattingMenu />
      <App />

    </div>

    
  </StrictMode>,
)
