// eslint-disable-next-line no-unused-vars
import Team from '../set';

let team;

beforeEach(() => {
  team = new Team();
});

test('Team is created with empty mambers set', () => {
  expect(team.members.size).toBe(0);
});

test('add method adds a new character', () => {
  const character = { name: 'Archer' };
  team.add(character);
  expect(team.members.has(character)).toBe(true);
});

test('add method throws an error if character already exists', () => {
  const character = { name: 'Archer' };
  team.add(character);
  expect(() => team.add(character)).toThrow('Выбранный персонаж уже есть в команде');
});

test('addAll method adds multiple characters without duplicates', () => {
  const a = { name: 'A' };
  const b = { name: 'B' };
  team.addAll(a, b, a, b);
  expect(team.members.size).toBe(2);
});

test('toArray method returns array of members', () => {
  const a = { name: 'A' };
  team.add(a);
  const arr = team.toArray();
  expect(Array.isArray(arr)).toBe(true);
});
