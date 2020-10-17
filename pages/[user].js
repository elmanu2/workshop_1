import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Layout1 from './styles/Layout1';

function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const router = useRouter();
  const { user } = router.query;

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch(`/api/users?user=${user}`);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    }
    fetchData();
  }, [user]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout1>
      <h1>{user}</h1>
      <ul>
        TEst
        {data &&
          data.map(user => (
            <li key={user.id}>
              <Link href="/user/[id]" as={`/user/${user.id}`}>
                <a>{`User ${user.id}`}</a>
              </Link>
            </li>
          ))}
      </ul>
    </Layout1>
  );
}

export default Page;
