export default function ShoppingListItem({ shoppingItem }) {
  return <>
    <div>
      <h2>{shoppingItem.item_name}</h2>
      <p>{shoppingItem.quantity}</p>
    </div>
  
  </>;
}
