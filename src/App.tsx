import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// 简单的占位页面
function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl">此页面正在开发中...</p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <PlaceholderPage title="部门介绍" />,
      },
      {
        path: 'rules',
        element: <PlaceholderPage title="风险规则库" />,
      },
      {
        path: 'cases',
        element: <PlaceholderPage title="风险案例库" />,
      },
      {
        path: 'faq',
        element: <PlaceholderPage title="常见问题" />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
