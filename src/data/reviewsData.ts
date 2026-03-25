export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export const googleReviewsUrl = 'https://www.google.com/search?q=Angelo+Renovates+reviews';

export const customerReviews: CustomerReview[] = [
  {
    id: 'maria-v',
    name: 'Maria V.',
    location: 'Antwerpen',
    text: 'Angelo heeft onze badkamer volledig gerenoveerd. Wat een vakmanschap! Hij denkt mee, werkt netjes en het resultaat overtreft onze verwachtingen. Absolute aanrader!',
    rating: 5,
  },
  {
    id: 'peter-d',
    name: 'Peter D.',
    location: 'Gent',
    text: 'Zeer tevreden over de aanleg van onze nieuwe oprit. Angelo is betrouwbaar, communiceert duidelijk en levert kwaliteitswerk. We gaan zeker weer met hem samenwerken.',
    rating: 5,
  },
  {
    id: 'sarah-tom',
    name: 'Sarah & Tom',
    location: 'Mechelen',
    text: 'Onze volledige renovatie was in de beste handen bij Angelo. Hij heeft ons door het hele proces geleid met geduld en professionaliteit. Top resultaat!',
    rating: 5,
  },
];
