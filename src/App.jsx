import Pricingcards from "./components/Pricingcards";

const App = () => {
  const pricingPlans = [
  {
    name: "Lite",
    price: 29,
    duration: "month",
    description: "This is our most affordable plan to get started!",
    features: [
      "Unlimited sending",
      "Email marketing",
      "Send newsletters",
      "Marketing automation"
    ],
    unavailableFeatures: [
      "Email support",
      "Free design services"
    ],
    highlighted: false
  },
  {
    name: "Plus",
    price: 89,
    duration: "month",
    description: "896 of our clients choose this plan. Get the best value.",
    features: [
      "Unlimited sending",
      "Email marketing",
      "Send newsletters",
      "Marketing automation",
      "Email support",
      
    ],
    unavailableFeatures: [
      "Free design services"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: 159,
    duration: "month",
    description: "For larger business or those seeking advanced services.",
    features: [
      "Unlimited sending",
      "Email marketing",
      "Send newsletters",
      "Marketing automation",
      "Email support",
      "Free design services"
    ],
    unavailableFeatures: [],
    highlighted: false
  }
];

  const toggolingBtn = (e)=>{
    const btns = document.querySelectorAll('.btn')
    for(let btn of btns){
      btn.classList.remove('bg-[#5d31e0]', 'text-white')
    }
    const selectedBtn = document.getElementById(e.target.id)
    selectedBtn.classList.add('bg-[#5d31e0]', 'text-white')
  }
  return (
    <div>
      <h1 className="text-5xl text-center font-bold mt-4 mb-3">Choose Your Plan</h1>
      <p className="text-[20px] text-center font-semibold text-gray-400 mb-5">No contracts, No suprise fees.</p>
      <div className="flex justify-center gap-8 rounded-full shadow-lg w-7/12 md:w-2/12 mx-auto px-2 md:px-7 py-2 mb-8">
        <button id="monthly" onClick={(e)=>{toggolingBtn(e)}} className="btn bg-[#5d31e0] px-2 md:px-7 py-3 rounded-full text-white font-semibold cursor-pointer">Monthly</button>
        <button id="yearly" onClick={(e)=>{toggolingBtn(e)}} className="btn px-6  py-3 rounded-full font-semibold cursor-pointer">Yearly</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-6 justify-center">
        {
          pricingPlans.map(el=><Pricingcards key={el.price} name={el.name} price={el.price} duration={el.duration} description={el.description} features={el.features} unavailableFeatures={el.unavailableFeatures} highlighted={el.highlighted} />)
        }
      </div>
      
    </div>
  )
}

export default App
