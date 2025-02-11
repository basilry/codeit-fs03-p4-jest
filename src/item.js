import database from "./repository/database";

export function getItem(itemId) {
  const item = database.findById(itemId); // 조회되면 해당 객체 반환, 아니면 null
  return item;
}

