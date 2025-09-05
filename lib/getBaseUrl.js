import { getBaseUrl } from '@/lib/getBaseUrl';

const data = await fetch(`${getBaseUrl()}/api/your-endpoint`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
});
