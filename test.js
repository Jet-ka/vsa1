


  const PRINCIPAL_PHONE = "919000000000"; // Replace with Principal's WhatsApp number

  function sendWhatsAppToBoth(studentPhone, studentName) {
    // 1. Prepare message texts
    const msgForPrincipal = encodeURIComponent(`[System Notice] Attendance alert sent for ${studentName}.`);
    const msgForStudent = encodeURIComponent(`Dear Parent, ${studentName} was marked absent today.`);

    // 2. Open Tab 1: Principal
    window.open(`https://wa.me/${PRINCIPAL_PHONE}?text=${msgForPrincipal}`, '_blank');

    // 3. Open Tab 2: Student / Parent
    window.open(`https://wa.me/${studentPhone}?text=${msgForStudent}`, '_blank');
  }
