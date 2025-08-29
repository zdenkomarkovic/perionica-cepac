export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function formatPhoneNumber(phone) {
  return phone.replace(/\s/g, '');
}

export function createMailtoLink(email, subject = '', body = '') {
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  
  const queryString = params.toString();
  return `mailto:${email}${queryString ? `?${queryString}` : ''}`;
}