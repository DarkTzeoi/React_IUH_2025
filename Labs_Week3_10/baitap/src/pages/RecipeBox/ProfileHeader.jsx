import { RiShareForwardLine } from "react-icons/ri";
const ProfileHeader = () => (
  <div className="mb-8">
    <h1 className="mb-6 text-3xl font-bold text-gray-800">
      Emma Gonzalez's Recipe Box
    </h1>

    <div className="flex items-start space-x-6">
      <div className="flex-shrink-0">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Emma Gonzalez"
          className="w-32 h-32 rounded-full"
        />
      </div>

      <div className="flex flex-col">
        <p
          style={{
            fontSize: "16px",
            lineHeight: "26px",
            fontWeight: "400",
            fontFamily: "Poppins",
          }}
        >
          Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as
          a former cooking editor at The Los Angeles Times. She is also an
          accomplished author, contributing to numerous cookbooks and food
          publications. Originally from East Los Angeles, Emma now resides in
          New York City, where she explores a wide range of culinary delights.
        </p>
        <div className="flex items-center">
          <p className="mt-3">6.5k Subcribers</p>

          <button className="bg-pink-500 px-4 py-2 rounded-lg text-white ms-3">
            Share <RiShareForwardLine className="inline-block" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileHeader;
