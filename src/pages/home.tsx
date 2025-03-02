import { IDForms } from '../components/Forms/IDForms.tsx'
import { Info } from '../components/Info/Info.tsx'
import { useCookies } from 'react-cookie'

export const Home = () => {
  const [cookies, ,] = useCookies(['currentUser'])

  return (
    <>
      <div className="min-h-screen bg-[#FEF7E4] text-[#333330]">
        <div className="flex justify-center items-center min-h-screen min-w-screen">
          <div className="bg-[#FEC44E] w-screen min-h-screen md:w-[25vw] md:h-[100vw]">
            <div className="flex flex-col items-center justify-center px-8 py-16 font-bold space-y-4">
              <div className="text-[#FFFF] text-5xl md:text-6xl">
                <h1 className="text-center">tomo coffee x lscs</h1>
              </div>
              <div>
                <h1>Scan to Verify LSCS Membership</h1>
              </div>
            </div>
            {!('currentUser' in cookies) ? (
              <>
                <IDForms></IDForms>
              </>
            ) : (
              <>
                <Info></Info>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
