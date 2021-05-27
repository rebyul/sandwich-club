export type Ingredient = {
  id: number;
  name: string;
  price: string;
};

export type Member = {
  name: string;
  id: number;
};

// type PropType<T, P extends keyof T> = T[P];
// type IdType = PropType<Member, 'id'>;

export type WeekThing = {
  members: Map<number, Member>;
  ingredients: Map<number, Ingredient>;
};

const allIngredients: Ingredient[] = [
  { name: 'Bread', id: 1, price: '1.99' },
  { name: 'Cheese', id: 2, price: '1.99' },
  { name: 'Lettuce', id: 3, price: '1.99' },
  { name: 'Tomato', id: 4, price: '1.99' },
  { name: 'Chicken', id: 5, price: '1.99' },
  { name: 'Ham', id: 6, price: '1.99' },
  { name: 'Salami', id: 7, price: '1.99' },
];
const allMembers: Member[] = [
  {
    id: 1,
    name: 'Kelvin',
  },
];

const weeklyThing: { [week: number]: WeekThing } = {
  21: {
    members: new Map(),
    ingredients: new Map(),
  },
};

export const getAllIngredients = () => allIngredients;

export const getAllMembers = () => allMembers;
export const getMemberById = (id: number) => allMembers.find((m) => m.id === id);

export const getCurrentWeek = () => 21;
export const getWeekThing = (week: number) => {
  const thing = weeklyThing[week];
  if (thing) {
    return thing;
  }

  const newThing: WeekThing = {
    members: new Map(),
    ingredients: new Map(),
  };
  weeklyThing[week] = newThing;
  return newThing;
};

export const enrolMember = (week: number, memberId: number) => {
  if (week < getCurrentWeek()) {
    throw new Error(`Can't enrol in past week`);
  }

  const weekThing = getWeekThing(week);
  weekThing.members.set(
    memberId,
    allMembers.find((m) => m.id === memberId)
  );
};

export const withdrawMember = (week: number, memberId: number) => {
  if (week < getCurrentWeek()) {
    throw new Error(`Can't withdraw from past week`);
  }

  const weekThing = getWeekThing(week);
  weekThing.members.delete(memberId);
};

export const addIngredient = (week: number, ingredientId: number) => {
  if (week <= getCurrentWeek()) {
    throw new Error(`Can't change this week or past weeks`);
  }

  const weekThing = getWeekThing(week);
  weekThing.ingredients.set(
    ingredientId,
    allIngredients.find((i) => i.id === ingredientId)
  );
};

export const removeIngredient = (week: number, ingredientId: number) => {
  if (week <= getCurrentWeek()) {
    throw new Error(`Can't change this week or past weeks`);
  }

  const weekThing = getWeekThing(week);
  weekThing.ingredients.delete(ingredientId);
};
