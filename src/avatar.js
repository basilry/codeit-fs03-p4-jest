export async function getAvatars() {
  const response = await fetch('https://learn.codeit.kr/api/avatars');
  const { results } = await response.json();
  return results;
}
