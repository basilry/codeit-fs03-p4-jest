function sendNotification({type, recipient, title, message}) {
  switch (type) {
    case 'sms':
      sendSmsNotification(recipient, message);
      break;
    case 'web':
      sendWebNotification(recipient, message);
      break;
    case 'email':
      sendEmailNotification(recipient, title, message);
      break;
    default:
      throw new Error('지원되지 않는 알림 유형입니다.');
  }
}

function sendSmsNotification(recipient, message) {
  console.log(`[SMS] ${recipient}: ${message}`);
}

function sendWebNotification(recipient, message) {
  console.log(`[WEB] ${recipient}: ${message}`);
}

function sendEmailNotification(recipient, title, message) {
  console.log(`[EMAIL] ${recipient}: ${title} - ${message}`);
}

const FORTUNES = [
  '오늘은 새로운 시작을 하기에 좋은 날입니다.',
  '소중한 사람과의 대화가 큰 힘이 될 것입니다.',
  '작은 일에도 기쁨을 느낄 수 있는 날입니다.',
];

// 간단한 운세 함수
function getFortuneString(date) {
  const year = date.getFullYear();
  return FORTUNES[year % 3];
}


export { sendNotification, sendSmsNotification, sendWebNotification, sendEmailNotification, getFortuneString };