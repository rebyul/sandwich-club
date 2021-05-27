export type Ingredient = string;
export type Member = {
  name: string;
  id: number;
};

export type WeekThing = {
  members: Member[];
  ingredients: Ingredient[];
};

const allIngredients: Ingredient[] = ['Bread', 'Cheese', 'Lettuce', 'Tomato Sauce'];
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
export const getWeekThing = (week: number) => weeklyThing[week];
