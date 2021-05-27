export type Ingredient = string;
export type Member = {
  name: string;
  id: number;
};

export type WeekThing = {
  members: Member[];
  ingredients: Ingredient[];
};

export const allIngredients: Ingredient[] = ['Bread', 'Cheese', 'Lettuce', 'Tomato Sauce'];
export const allMembers: Member[] = [
  {
    id: 1,
    name: 'Kelvin',
  },
];

export const membersByWeek: { [week: string]: Member[] } = {
  week21: [],
};

export const currentWeek = 'week21';

export const weeklyThing: { [week: string]: WeekThing } = {
  week21: {
    members: [],
    ingredients: [],
  },
};
