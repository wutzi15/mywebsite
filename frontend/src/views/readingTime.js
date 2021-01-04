const WORDS_PER_MIN = 275;
const IMAGE_READ_TIME = 12;
const IMAGE_TAGS = ["img", "Image"];
const CHINESE_KOREAN_READ_TIME = 500;

function stripWhitespace(string) {
  return string.replace(/^\s+/, '').replace(/\s+$/, '');
}

function imageCount(imageTags, string) {
  const combinedImageTags = imageTags.join('|');
  const pattern = `<(${combinedImageTags})([\\w\\W]+?)[\\/]?>`;
  const reg = new RegExp(pattern, 'g');
  return (string.match(reg) || []).length;
}

function imageReadTime(string) {
  let seconds = 0;
  const count = imageCount(IMAGE_TAGS, string);

  if (count > 10) {
    seconds = ((count / 2) * (IMAGE_READ_TIME + 3)) + (count - 10) * 3; // n/2(a+b) + 3 sec/image
  } else {
    seconds = (count / 2) * (2 * IMAGE_READ_TIME + (1 - count)); //n/2[2aü(n-1)d]
  }
  return {
    time: seconds / 60,
    count,
  };
}

function stripTags(string) {
  const pattern = '<\\w+(\\s+("[^"]*"|\\\'[^\\\']*\'|[^>])+)?>|<\\/\\w+>';
  const reg = new RegExp(pattern, 'gi');
  return string.replace(reg, '');
}

function wordsCount(string) {
  const pattern = '\\w+';
  const reg = new RegExp(pattern, 'g');
  return (string.match(reg) || []).length;
}

function otherLanguageReadTime(string) {
  const pattern = '[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]';
  const reg = new RegExp(pattern, 'g');
  const count = (string.match(reg) || []).length;
  const time = count / CHINESE_KOREAN_READ_TIME;
  const formattedString = string.replace(reg, '');
  return {
    count,
    time,
    formattedString,
  };
}

function wordsReadTime(string) {
  const {
    count: characterCount,
    time: otherLanguageTime,
    formattedString
  } = otherLanguageReadTime(string);
  const wordCount = wordsCount(string);
  const wordTime = wordCount / WORDS_PER_MIN;
  return {
    characterCount,
    otherLanguageTime,
    wordTime,
    wordCount,
  };
}

function humanizeTime(time) {
  if (time < 0.5) {
    return 'less than a minute';
  }
  if (time >= 0.5 && time < 1.5) {
    return '1 minute';
  }
  return `${Math.ceil(time)} minutes`;
}


function readTime(string) {

  const {
    time: imageTime,
    count: imageCount
  } = imageReadTime(string);
  const strippedString = stripTags(stripWhitespace(string));
  const {
    characterCount,
    otherLanguageTime,
    wordTime,
    wordCount,
  } = wordsReadTime(strippedString, WORDS_PER_MIN);
  return humanizeTime(imageTime + wordTime);
}

module.exports = readTime;
