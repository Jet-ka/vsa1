const PRINCIPAL_PHONE = '+918876079757';

const codemgs=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const randomnumber=Math.floor(Math.random()*26);
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
function openWp(text){
  const url = `https://wa.me/?text=${text}`;
  const popup = window.open(url, '_blank', 'noopener,noreferrer');

  if (!popup) {
    window.location.href = url;
  } 
}



function sendWhatsAppToBoth(studentPhone, studentName,classname ) {
  const cleanStudentPhone = normalizePhone(studentPhone);
  const cleanPrincipalPhone = normalizePhone(PRINCIPAL_PHONE);
  const safeStudentName = String(studentName || 'student').replace(/\s+/g, ' ').trim();
  const msgForPrincipal = encodeURIComponent(`[${code}] :Absent alert sent for ${safeStudentName} of class: ${classname}`);
  const msgForStudent = encodeURIComponent(`[${code}]:Dear Parents, 
${safeStudentName} is absent today.Could you please let us know the reason for the absence?
  Thank You,
  Vivekananda Science Academy`);

  // mgs goes to student 1st 
  openWhatsApp(cleanStudentPhone, msgForStudent);

//mgs goes to principal sir 2nd
 // openWhatsApp(cleanPrincipalPhone, msgForPrincipal); main
 openWp(msgForPrincipal)
}

function sendwhatsapp(studentPhone, studentName, classname) {
  sendWhatsAppToBoth(studentPhone, studentName, classname);
}

window.sendWhatsAppToBoth = sendWhatsAppToBoth;
window.sendwhatsapp = sendwhatsapp;


  // setTimeout(() => {
  //   openWhatsApp(cleanPrincipalPhone, msgForPrincipal);
  // }, 300);