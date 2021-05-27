export type Ingredient = string;
export type Member = {
  name: string;
  id: number;
};

export type WeekThing = {
  members: Member[];
  ingredients: Ingredient[];
};

const allIngredients: Ingredient[] = [
  'Bread',
  'Cheese',
  'Lettuce',
  'Tomato',
  'Chicken',
  'Ham',
  'Salami',
];
const allMembers: Member[] = [
  {
    id: 1,
    name: 'Kelvin',
  },
];

const weeklyThing: { [week: number]: WeekThing } = {
  21: {
    members: [],
    ingredients: [],
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

  const newThing = {
    members: [],
    ingredients: [],
  };
  weeklyThing[week] = newThing;
  return newThing;
};

export const addIngredient = (week: number, ingredient: Ingredient) => {
  if (week <= getCurrentWeek()) {
    throw new Error(`Can't change this week or past weeks`);
  }

  const weekThing = getWeekThing(week);
  const isIngredientInList = weekThing.ingredients.includes(ingredient);

  if (!isIngredientInList) {
    weekThing.ingredients.push(ingredient);
  }
};

export const removeIngredient = (week: number, ingredient: Ingredient) => {
  if (week <= getCurrentWeek()) {
    throw new Error(`Can't change this week or past weeks`);
  }

  const weekThing = getWeekThing(week);
  const ix = weekThing.ingredients.findIndex((i) => i === ingredient);

  if (ix != null) {
    weekThing.ingredients.splice(ix, 1);
  }
};
