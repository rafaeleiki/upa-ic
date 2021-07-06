import people from '../data/people.json';

export function getPerson(name) {
  return people[name];
}
