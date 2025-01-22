export const Info = () =>{
  return (<>
      <div className="min-h-screen bg-[#000000] md:p-8 text-white p-6">
        <div>
          <div className="flex justify-center font-bold md:text-4xl text-3xl">
            LSCS x TOMO Coffee
          </div>
          <div className="flex justify-center font-bold md:text-xl text-3xl pt-12">
          Customer is a LSCS member!
          </div>
        <div className="py-6">
          <div className="flex justify-center py-3  text-2xl font-bold">
          Customer Info:
          </div>
          <div className="flex justify-center py-3  text-xl font-bold">
          ID #:
          </div>
          <div className="flex justify-center py-3  text-xl font-bold">
          Full Name:
          </div>
        </div>
          <div className="flex justify-center py-12 text-xl font-bold">
          <button className="bg-white text-black p-2 rounded-lg">
          PROMO IS VALID FOR THIS USER
          </button>
          </div>
        </div>
      </div>
  </>)
}

export default Info;
