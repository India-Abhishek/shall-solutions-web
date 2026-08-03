/*
|--------------------------------------------------------------------------
| FAQ Type
|--------------------------------------------------------------------------
| Future:
| Data will come from database.
|--------------------------------------------------------------------------
*/

export type FAQ = {
  id: number;
  displayOrder: number;
  active: boolean;

  question: {
    en: string;
    hi: string;
  };

  answer: {
    en: string;
    hi: string;
  };
};