import { IDForms } from "../components/Forms/IDForms.tsx";
import { Info } from "../components/Info/Info.tsx";
import { useCookies } from "react-cookie";

export const Home = () => {
  const [currentUser, ,] = useCookies(["currentUser"]);

  return (
    <>
      <div className="min-h-screen bg-[#000000] md:p-8 text-white p-6">
        <div>
          <div className="flex justify-center font-bold md:text-4xl text-3xl">
            LSSC x Tomo Coffee
          </div>
          <div className="flex justify-center py-2">
            Scan to Verify LSCS Membership
          </div>
          <div className="flex justify-center py-8">
            {Object.keys(currentUser).length == 0 ? (
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
  );
};

export default Home;
