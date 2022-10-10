import { getToDb } from "../fakeDB/fakeBD";

export const loadData = async () => {
  const coursesData = await fetch("courses.json");
  const courses = await coursesData.json();

  let initialCart = [];
  const storedCard = getToDb();

  for (const id in storedCard) {
    const addedCart = courses.find((course) => course.id === id);
    if (addedCart) {
      const newQuantity = storedCard[id];
      addedCart.quantity = newQuantity;
      initialCart.push(addedCart);
    }
  }

  return { courses, initialCart };
};
