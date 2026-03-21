export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactApiResponse {
  message?: string;
}

export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  let data: ContactApiResponse | null = null;
  try {
    data = (await response.json()) as ContactApiResponse;
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(data?.message ?? 'Bericht kon niet verzonden worden. Probeer het opnieuw.');
  }
}
