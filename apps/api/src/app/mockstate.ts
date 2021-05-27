export type Ingredient = {
  id: number;
  name: string;
  pricePerUnit: number;
  unit?: string;
  img?: string;
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
  { name: 'Bread', id: 1, pricePerUnit: 1.99, unit: 'unit' },
  { name: 'Cheese', id: 2, pricePerUnit: 1.99, unit: 'unit' },
  { name: 'Lettuce', id: 3, pricePerUnit: 1.99, unit: 'unit' },
  { name: 'Tomato', id: 4, pricePerUnit: 1.99, unit: 'unit' },
  { name: 'Chicken', id: 5, pricePerUnit: 1.99, unit: 'unit' },
  { name: 'Ham', id: 6, pricePerUnit: 1.99, unit: 'unit' },
  { name: 'Salami', id: 7, pricePerUnit: 1.99, unit: 'unit' },
];

const allMembers: Member[] = [
  {
    id: 1,
    name: 'Kelvin',
  },
  {
    id: 2,
    name: 'Marcus',
  },
  {
    id: 3,
    name: 'Max',
  },
  {
    id: 4,
    name: 'Bo',
  },
  {
    id: 5,
    name: 'Dom',
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
