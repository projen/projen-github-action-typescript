export function upperCase(input: string): string {
  const wordList = splitWords();
  console.log(wordList);
  for (let i = 0; i < wordList.length; i++) {
    wordList[i] = wordList[i][0].toLocaleUpperCase() + wordList[i].slice(1);
  }
  return wordList.join('');

  function splitWords() {
    var regex = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;
    return input.match(regex) ?? [];
  }
}