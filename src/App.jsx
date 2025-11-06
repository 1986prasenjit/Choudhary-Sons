import { assets } from "./assets/assets/frontend_assets/assests";

function App() {
  return (
    <>
      <div className="p-5 flex flex-col justify-center items-center gap-3">
        <h1 className="text-3xl font-bold text-red-700">Choudhary & Sons</h1>
        <div className="w-52 aspect-square transition-all duration-300 ease-in-out border-0 px-2 py-1 flex flex-col hover:border-2 hover:border-gray-400">
          <img src={assets.p_img3} className="w-full h-full object-cover rounded-md" alt="" />
          <p>Greate sofa</p>
        </div>
      </div>
    </>
  );
}

export default App;
