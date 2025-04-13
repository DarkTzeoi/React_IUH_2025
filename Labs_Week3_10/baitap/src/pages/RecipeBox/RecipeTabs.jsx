const RecipeTabs = ({ activeTab, setActiveTab }) => (
  <div className="flex mb-4 border-b border-gray-200">
    <button
      className={`px-4 py-2 font-medium ${
        activeTab === "saved"
          ? "text-pink-500 border-b-2 border-pink-500"
          : "text-gray-500 hover:text-pink-400"
      }`}
      onClick={() => setActiveTab("saved")}
    >
      Saved Recipes
    </button>
    <button
      className={`px-4 py-2 font-medium ${
        activeTab === "created"
          ? "text-pink-500 border-b-2 border-pink-500"
          : "text-gray-500 hover:text-pink-400"
      }`}
      onClick={() => setActiveTab("created")}
    >
      Created Recipes
    </button>
  </div>
);

export default RecipeTabs;
