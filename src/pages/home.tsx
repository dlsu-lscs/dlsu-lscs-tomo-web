import { IDForms } from "../components/Forms/IDForms.tsx";

export const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-[#000000] md:p-8 text-white p-6">
        <div>
          <div className="flex justify-center font-bold md:text-4xl text-3xl">
            LSCS x TOMO Coffee
          </div>
          <div className="flex justify-center py-2">
            Scan your ID Barcode to Verify Membership
          </div>
          <div className="flex justify-center py-8">
            <IDForms></IDForms>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
