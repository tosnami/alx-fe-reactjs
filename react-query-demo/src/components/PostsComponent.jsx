import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};

function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5000,  // البيانات تظل "جديدة" لمدة 5 ثوانٍ
    cacheTime: 300000, // تخزين البيانات في الكاش لمدة 5 دقائق (300,000 مللي ثانية)
    refetchOnWindowFocus: false, // منع إعادة الجلب عند التركيز على النافذة
    keepPreviousData: true, // إبقاء البيانات القديمة أثناء تحميل البيانات الجديدة
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;