import { Layout } from './layout/Layout'
import { Toaster } from '@/components/ui/toaster'

export const App = () => {
  return (
    <>
      <div className="font-inter">
        <Layout></Layout>
        <Toaster />
      </div>
    </>
  )
}

export default App
