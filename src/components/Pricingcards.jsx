import { Check } from "lucide-react"

const Pricingcards = (props) => {
  return (
    <div className={`w-4/5 flex justify-center mx-auto rounded-lg`}>
    <div className={`${props.highlighted && 'bg-[#5d31e0] text-white'} w-2/3 p-5 rounded-2xl shadow-lg`}>
      <h1 className="text-center text-3xl font-semibold mb-3">{props.name}</h1>
      <h1 className="flex items-center gap-2 justify-center text-gray-400 font-medium"><span className={`${props.highlighted && 'text-white'} text-5xl font-bold text-black mb-3`}>${props.price}</span> /{props.duration}</h1>
      <p className={`${props.highlighted && 'text-white'} text-center font-semibold text-gray-500 mb-5`}>{props.description}</p>
    <ul className="space-y-3 mb-3" >
         {props.features.map((feature, index) => (
    <li key={index} className="flex items-center gap-2 font-semibold">
      <Check size={18} className="text-[#5d31e0]" />
      {feature}
    </li>
  ))}
    </ul><ul className="space-y-3" >
         {props.unavailableFeatures.map((feature, index) => (
    <li key={index} className="flex items-center gap-2 text-[#bbbabd] font-semibold">
      <Check size={18} className="text-[#bbbabd] font-semibold" />
      {feature}
    </li>
  ))}
    </ul>
    <div className="text-center mt-4">
    <button className={` ${props.highlighted && 'bg-[#ffd6c9] text-[#5d31e0]'} border-2 font-semibold border-[] text-[#5d31e0] w-full p-3 rounded-lg cursor-pointer `}>Choose Plan</button>
    </div>
    </div>
    </div>
  )
}

export default Pricingcards
