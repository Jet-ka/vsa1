const PRINCIPAL_PHONE = '+919365776440';

const codemgs=["a","b","c"];
const randomnumber=Math.floor(Math.random()*3);
const code=codemgs[randomnumber];





function normalizePhone(phone) {
  return String(phone || '').replace(/[^\d+]/g, '');
}



function openWhatsApp(number, text) {
  const url = `https://wa.me/${number}?text=${text}`;
  const popup = window.open(url, '_blank', 'noopener,noreferrer');

  if (!popup) {
    window.location.href = url;
  }
}



function sendWhatsAppToBoth(studentPhone, studentName ) {
  const cleanStudentPhone = normalizePhone(studentPhone);
  const cleanPrincipalPhone = normalizePhone(PRINCIPAL_PHONE);
  const safeStudentName = String(studentName || 'student').replace(/\s+/g, ' ').trim();
  const msgForPrincipal = encodeURIComponent(`${code} :Absent alert sent for ${safeStudentName}.`);
  const msgForStudent = encodeURIComponent(`${code}: Dear parent, ${safeStudentName} School aha nai.Kio aha nai aji?`);

  openWhatsApp(cleanStudentPhone, msgForStudent);

  

  openWhatsApp(cleanPrincipalPhone, msgForPrincipal);
}

function sendwhatsapp(studentPhone, studentName, messageText) {
  sendWhatsAppToBoth(studentPhone, studentName, messageText);
}

window.sendWhatsAppToBoth = sendWhatsAppToBoth;
window.sendwhatsapp = sendwhatsapp;


  // setTimeout(() => {
  //   openWhatsApp(cleanPrincipalPhone, msgForPrincipal);
  // }, 300);