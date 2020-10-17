import { useRouter } from 'next/router';

export default function Displaycoucou() {
  const router = useRouter();
  const { user } = router.query;
  return `Coucou ${user}`;
}
