export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 👕 </em>
      </p>
    );

  //when useState is updated it re-renders so this function is called again and numItems is assigned the length of the items array
  const numItems = items.length;
  //creates a new array that has filterd the all packed items and then saves the length of this new array
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are all packed and ready to go!"
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%) 👜`}
      </em>
    </footer>
  );
}
