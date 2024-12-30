```javascript
// pages/index.js
import dynamic from 'next/dynamic';

export default function Home({ data }) {
  const DynamicComponent = dynamic(() => import('./DynamicComponent'), { ssr: false });

  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>This is a paragraph.</p>
      {data && <p>Data from getStaticProps: {data}</p>}
      <DynamicComponent />
    </div>
  );
}

export async function getStaticProps() {
  // Simulate fetching data
  const data = await new Promise((resolve) => setTimeout(() => resolve('Data from getStaticProps'), 1000));
  return { props: { data } };
}

// pages/DynamicComponent.js
export default function DynamicComponent() {
  return (
    <div>
      <p>I'm a dynamically imported component!</p>
    </div>
  );
}
```