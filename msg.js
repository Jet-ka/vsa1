const PRINCIPAL_PHONE = '+918714247264';

function normalizePhone(phone) {
  return String(phone || '').replace(/[^\d+]/g, '');
}

function sendWhatsAppToBoth(studentPhone, studentName, messageText = 'Dear Parent, your child has been marked absent today.') {
  const cleanStudentPhone = normalizePhone(studentPhone);
  const cleanPrincipalPhone = normalizePhone(PRINCIPAL_PHONE);
  const safeStudentName = String(studentName || 'student').replace(/\s+/g, ' ').trim();
  const msgForPrincipal = encodeURIComponent(`[System Notice] Attendance alert sent for ${safeStudentName}.`);
  const msgForStudent = encodeURIComponent(messageText);

  window.open(`https://wa.me/${cleanPrincipalPhone}?text=${msgForPrincipal}`, '_blank', 'noopener,noreferrer');
  window.open(`https://wa.me/${cleanStudentPhone}?text=${msgForStudent}`, '_blank', 'noopener,noreferrer');
}

function sendwhatsapp(studentPhone, studentName, messageText) {
  sendWhatsAppToBoth(studentPhone, studentName, messageText);
}

window.sendWhatsAppToBoth = sendWhatsAppToBoth;
window.sendwhatsapp = sendwhatsapp;
