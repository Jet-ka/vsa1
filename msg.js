const PRINCIPAL_PHONE = '+919365776440';

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

function sendWhatsAppToBoth(studentPhone, studentName, messageText = 'Dear Parent, your child has been marked absent today.') {
  const cleanStudentPhone = normalizePhone(studentPhone);
  const cleanPrincipalPhone = normalizePhone(PRINCIPAL_PHONE);
  const safeStudentName = String(studentName || 'student').replace(/\s+/g, ' ').trim();
  const msgForPrincipal = encodeURIComponent(`[System Notice] Attendance alert sent for ${safeStudentName}.`);
  const msgForStudent = encodeURIComponent(messageText);

  openWhatsApp(cleanStudentPhone, msgForStudent);
  setTimeout(() => {
    openWhatsApp(cleanPrincipalPhone, msgForPrincipal);
  }, 300);
}

function sendwhatsapp(studentPhone, studentName, messageText) {
  sendWhatsAppToBoth(studentPhone, studentName, messageText);
}

window.sendWhatsAppToBoth = sendWhatsAppToBoth;
window.sendwhatsapp = sendwhatsapp;
