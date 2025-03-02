import { IDForms } from '../components/Forms/IDForms.tsx'
import { Info } from '../components/Info/Info.tsx'
import { useCookies } from 'react-cookie'
import { AnimatePresence, motion } from 'framer-motion'

export const Home = () => {
  const [cookies, ,] = useCookies(['currentUser'])

  return (
    <>
      <AnimatePresence mode="wait">
        <div className="min-h-screen bg-[#FEF7E4] text-[#333330]">
          <div className="flex justify-center items-center min-h-screen min-w-screen">
            <div className="bg-[#FEC44E] w-screen h-screen md:w-[25vw] md:h-[100vw]">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
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
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        cookies.currentUser
                          ? { opacity: 1, y: 0 }
                          : { opacity: 1, scale: 1.1 }
                      }
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      <IDForms></IDForms>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        cookies.currentUser
                          ? { opacity: 1, y: 0 }
                          : { opacity: 1, scale: 1.1 }
                      }
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Info></Info>
                    </motion.div>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </>
  )
}

export default Home
