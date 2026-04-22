import type { MenuItem } from "../types"

type MenuItemProps = {
   item: MenuItem
   addItem: (item: MenuItem) => void
}

const MenuItemComponent = ({ item, addItem }: MenuItemProps) => {
   return (
      <button 
         className="border-2 border-teal-400 hover:bg-teal-100 w-full p-3 text-lg rounded-lg flex justify-between cursor-pointer"
         onClick={() => addItem(item)}
      >
         <p>{item.name}</p>
         <p className="font-black">{item.price}</p>
      </button>
   )
}

export default MenuItemComponent