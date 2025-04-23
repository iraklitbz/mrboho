/**
 * Sanitiza texto para prevenir ataques XSS
 * 
 * @param input Texto a sanitizar
 * @returns Texto sanitizado
 */
export function sanitizeText(input: string): string {
  // Esta es una implementación básica de sanitización
  // En producción deberías usar una biblioteca como DOMPurify
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Sanitiza un objeto completo, incluyendo sus propiedades anidadas
 * 
 * @param data Objeto a sanitizar
 * @returns Objeto sanitizado
 */
export function sanitizeObject<T>(data: T): T {
  if (!data) return data;
  
  if (typeof data === 'string') {
    return sanitizeText(data) as unknown as T;
  }
  
  if (typeof data !== 'object') {
    return data;
  }
  
  if (Array.isArray(data)) {
    return data.map((item) => sanitizeObject(item)) as unknown as T;
  }
  
  const sanitized = { ...data };
  
  for (const key in sanitized) {
    if (Object.prototype.hasOwnProperty.call(sanitized, key)) {
      sanitized[key] = sanitizeObject(sanitized[key]);
    }
  }
  
  return sanitized;
}