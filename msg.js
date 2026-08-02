const PRINCIPAL_PHONE = '+919365776440';

const codemgs=["a","b","c","d","e","f","g","h","i","j","k","l","m","n"];
const randomnumber=Math.floor(Math.random()*14);
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



function sendWhatsAppToBoth(studentPhone, studentName,classname ) {
  const cleanStudentPhone = normalizePhone(studentPhone);
  const cleanPrincipalPhone = normalizePhone(PRINCIPAL_PHONE);
  const safeStudentName = String(studentName || 'student').replace(/\s+/g, ' ').trim();
  const msgForPrincipal = encodeURIComponent(`[${code}] :Absent alert sent for ${safeStudentName} of ${classname}`);
  const msgForStudent = encodeURIComponent(`[${code}]: Dear parents, ${safeStudentName} School aha nai.Kio aha nai aji amak jonabo..`);

  openWhatsApp(cleanStudentPhone, msgForStudent);

  

  openWhatsApp(cleanPrincipalPhone, msgForPrincipal);
}

function sendwhatsapp(studentPhone, studentName, classname) {
  sendWhatsAppToBoth(studentPhone, studentName, classname);
}

window.sendWhatsAppToBoth = sendWhatsAppToBoth;
window.sendwhatsapp = sendwhatsapp;


  // setTimeout(() => {
  //   openWhatsApp(cleanPrincipalPhone, msgForPrincipal);
  // }, 300);