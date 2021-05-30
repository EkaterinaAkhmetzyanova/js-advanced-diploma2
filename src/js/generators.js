/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-plusplus */
import { escapeHTML } from 'core-js/core/string';
import Team from './Team';

/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  const charType = Math.floor(Math.random() * allowedTypes.length);
  const charLevel = Math.floor(1 + Math.random() * maxLevel);
  yield new allowedTypes[charType](charLevel);
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const char = characterGenerator(allowedTypes, maxLevel);
  const team = new Team();
  for (let i = 0; i < characterCount; i++) {
    team.add(char.next().value);
  }
  return team;
}
