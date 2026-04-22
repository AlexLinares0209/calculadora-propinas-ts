import MenuItemComponent from "./components/MenuItemComponent"
import OrderContentsComponent from "./components/OrderContentsComponent"
import OrderTotalsComponent from "./components/OrderTotalsComponent"
import TipPercentageFormComponent from "./components/TipPercentageFormComponent"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

   const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()

   return (
      <>
         <header className="bg-indigo-400 py-5">
            <h1 className="text-center text-xl font-bold">
               Calculadora de Propinas y Consumo
            </h1>
         </header>

         <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
            <div className="p-5">
               <h2 className="text-4xl font-black">Menú</h2>
               <div className="space-y-3 mt-10">
                  {menuItems.map((item) => <MenuItemComponent key={item.id} item={item} addItem={addItem} />)}
               </div>
            </div>
            <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
               {
                  order.length === 0 ?
                     <p className="text-center">La orden está vacía</p>
                     : (
                        <>
                           <OrderContentsComponent order={order} removeItem={removeItem} />
                           <TipPercentageFormComponent setTip={setTip} tip={tip} />
                           <OrderTotalsComponent order={order} tip={tip} placeOrder={placeOrder} />
                        </>
                     )
               }
            </div>
         </main>
      </>
   )
}

export default App